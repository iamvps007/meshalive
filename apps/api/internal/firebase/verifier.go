package firebase

import (
	"crypto/rsa"
	"crypto/x509"
	"encoding/json"
	"encoding/pem"
	"errors"
	"fmt"
	"io"
	"net/http"
	"sync"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

const googleCertURL = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com"

// Claims holds fields we care about from a Firebase ID token.
type Claims struct {
	Email         string `json:"email"`
	EmailVerified bool   `json:"email_verified"`
	Name          string `json:"name"`
	Picture       string `json:"picture"`
	UserID        string `json:"user_id"`
	jwt.RegisteredClaims
}

// Verifier validates Firebase ID tokens using Google public RSA keys.
// Keys are cached for 1 hour.
type Verifier struct {
	projectID string
	mu        sync.RWMutex
	keys      map[string]*rsa.PublicKey
	keysExpAt time.Time
}

func NewVerifier(projectID string) *Verifier {
	return &Verifier{projectID: projectID}
}

func (v *Verifier) Verify(idToken string) (*Claims, error) {
	if v.projectID == "" {
		return nil, errors.New("firebase: project ID not configured")
	}
	keys, err := v.publicKeys()
	if err != nil {
		return nil, fmt.Errorf("firebase: fetch keys: %w", err)
	}

	token, err := jwt.ParseWithClaims(idToken, &Claims{}, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("unexpected alg: %v", t.Header["alg"])
		}
		kid, ok := t.Header["kid"].(string)
		if !ok {
			return nil, errors.New("firebase: missing kid")
		}
		key, ok := keys[kid]
		if !ok {
			return nil, fmt.Errorf("firebase: unknown kid %q", kid)
		}
		return key, nil
	},
		jwt.WithAudience(v.projectID),
		jwt.WithIssuer("https://securetoken.google.com/"+v.projectID),
		jwt.WithExpirationRequired(),
	)
	if err != nil {
		return nil, fmt.Errorf("firebase: %w", err)
	}
	claims, ok := token.Claims.(*Claims)
	if !ok || !token.Valid {
		return nil, errors.New("firebase: invalid claims")
	}
	if !claims.EmailVerified {
		return nil, errors.New("firebase: email not verified")
	}
	return claims, nil
}

func (v *Verifier) publicKeys() (map[string]*rsa.PublicKey, error) {
	v.mu.RLock()
	if time.Now().Before(v.keysExpAt) {
		k := v.keys
		v.mu.RUnlock()
		return k, nil
	}
	v.mu.RUnlock()

	v.mu.Lock()
	defer v.mu.Unlock()
	if time.Now().Before(v.keysExpAt) {
		return v.keys, nil
	}

	resp, err := http.Get(googleCertURL)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)

	var certs map[string]string
	if err := json.Unmarshal(body, &certs); err != nil {
		return nil, err
	}

	keys := make(map[string]*rsa.PublicKey, len(certs))
	for kid, pem_ := range certs {
		block, _ := pem.Decode([]byte(pem_))
		if block == nil {
			continue
		}
		cert, err := x509.ParseCertificate(block.Bytes)
		if err != nil {
			continue
		}
		rsaKey, ok := cert.PublicKey.(*rsa.PublicKey)
		if ok {
			keys[kid] = rsaKey
		}
	}
	v.keys = keys
	v.keysExpAt = time.Now().Add(time.Hour)
	return keys, nil
}
