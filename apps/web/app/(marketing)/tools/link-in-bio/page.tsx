import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Free Link in Bio Tool — Linktree Alternative | Meshalive" },
  description:
    "Create a beautiful link-in-bio page for free. Add unlimited links, track clicks with analytics, and share one URL for Instagram, YouTube, and WhatsApp. No credit card needed.",
  alternates: {
    canonical: "https://meshalive.com/tools/link-in-bio",
  },
  openGraph: {
    title: { absolute: "Free Link in Bio Tool — Linktree Alternative | Meshalive" },
    description:
      "Create a beautiful link-in-bio page for free. Add unlimited links, track clicks with analytics, and share one URL for Instagram, YouTube, and WhatsApp. No credit card needed.",
    url: "https://meshalive.com/tools/link-in-bio",
    siteName: "Meshalive",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "Free Link in Bio Tool — Linktree Alternative | Meshalive" },
    description:
      "Create a beautiful link-in-bio page for free. Add unlimited links, track clicks with analytics, and share one URL for Instagram, YouTube, and WhatsApp.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Meshalive Link in Bio",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Create a free link-in-bio landing page with unlimited links, click analytics, QR codes, and custom slugs. The best free Linktree alternative for Indian creators and small businesses.",
      url: "https://meshalive.com/tools/link-in-bio",
      publisher: {
        "@type": "Organization",
        name: "Meshalive",
        url: "https://meshalive.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a link in bio page?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A link-in-bio page is a single URL that hosts a mini landing page with all your important links — your online store, YouTube channel, WhatsApp contact, portfolio, and more. Because Instagram and most social platforms only allow one link in your profile, a link-in-bio page lets you share everything from that one spot.",
          },
        },
        {
          "@type": "Question",
          name: "Is Meshalive link-in-bio free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Meshalive's link-in-bio tool is completely free. The free plan includes unlimited links on your bio page, 7-day click analytics, a QR code for your page, and a custom slug like meshalive.com/yourname. No credit card required.",
          },
        },
        {
          "@type": "Question",
          name: "How is Meshalive different from Linktree?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Meshalive offers more on the free plan than Linktree: unlimited bio links (Linktree free caps at 5), 7-day analytics (Linktree free has none), and a QR code included. Meshalive is completely free, with full API access included.",
          },
        },
        {
          "@type": "Question",
          name: "Can I add analytics to my bio page?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every Meshalive bio page comes with click tracking per link. Free users see 7-day analytics including total clicks and click-through rate per link. Paid plans unlock 90-day history, geo breakdown, device stats, and referrer data.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use a custom domain for my link-in-bio page?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Custom domains are available on all plans — completely free. You can connect your own domain (e.g., links.yourbrand.com) and host your bio page there.",
          },
        },
        {
          "@type": "Question",
          name: "How many links can I add to my bio page?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no limit on the number of links you can add to your Meshalive bio page — even on the free plan. Add as many links as you need: your shop, your social profiles, your content, your contact links.",
          },
        },
        {
          "@type": "Question",
          name: "Is the link-in-bio page mobile-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All Meshalive bio pages are fully mobile-optimized by default. Since most traffic comes from Instagram and WhatsApp on mobile, the design is built mobile-first with large tap targets and fast load times.",
          },
        },
      ],
    },
  ],
};

export default function LinkInBioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        style={{
          background: "var(--bg, #0D0A1A)",
          color: "var(--fg, #F0ECF8)",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "96px 24px 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(196,90,57,0.12)",
              border: "1px solid rgba(196,90,57,0.3)",
              borderRadius: 100,
              padding: "6px 14px",
              marginBottom: 28,
              fontSize: 13,
              color: "var(--pulse, #0078D4)",
              fontWeight: 500,
              letterSpacing: 0.2,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--pulse, #0078D4)",
                display: "inline-block",
              }}
            />
            Free Linktree Alternative
          </div>

          <h1
            className="display"
            style={{
              fontSize: "clamp(36px, 6vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              background:
                "linear-gradient(135deg, var(--fg, #F0ECF8) 40%, var(--pulse, #0078D4))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            One Link.
            <br />
            Everything You Share.
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 20px)",
              color: "var(--fg-muted, #9B8DB8)",
              maxWidth: 620,
              margin: "0 auto 40px",
              lineHeight: 1.6,
            }}
          >
            Create a beautiful link-in-bio page with your top links, QR code,
            and click analytics — free. No credit card. Live in 60 seconds.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/register"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--pulse, #0078D4)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
            >
              Create your page free
              <span style={{ fontSize: 18 }}>→</span>
            </a>
            <a
              href="#demo"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "var(--fg, #F0ECF8)",
                padding: "14px 28px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                border: "1px solid var(--line-c, rgba(255,255,255,0.12))",
              }}
            >
              See example
            </a>
          </div>

          <p
            style={{
              marginTop: 18,
              fontSize: 13,
              color: "var(--fg-muted, #9B8DB8)",
            }}
          >
            Free forever plan · No credit card required · Setup in 60 seconds
          </p>
        </section>

        {/* ── DEMO PREVIEW ─────────────────────────────────────── */}
        <section
          id="demo"
          style={{
            padding: "16px 24px 96px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--fg-muted, #9B8DB8)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            Live preview
          </p>

          {/* Phone frame wrapper */}
          <div
            style={{
              width: 360,
              maxWidth: "100%",
              background: "#13101f",
              borderRadius: 36,
              border: "6px solid #2a2440",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.12), 0 0 60px rgba(196,90,57,0.08)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Notch */}
            <div
              style={{
                height: 28,
                background: "#0D0A1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 10,
                  background: "#2a2440",
                  borderRadius: 8,
                }}
              />
            </div>

            {/* Bio page content */}
            <div
              style={{
                padding: "28px 20px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background:
                  "linear-gradient(180deg, #1a1230 0%, #110d22 100%)",
                minHeight: 520,
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0057ff, #003dc4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  marginBottom: 14,
                  flexShrink: 0,
                  boxShadow: "0 0 0 3px rgba(196,90,57,0.25)",
                }}
              >
                🙋‍♀️
              </div>

              {/* Name */}
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#F0ECF8",
                  marginBottom: 6,
                  letterSpacing: "-0.01em",
                }}
              >
                Priya Sharma
              </p>

              {/* Bio */}
              <p
                style={{
                  fontSize: 13,
                  color: "#9B8DB8",
                  textAlign: "center",
                  lineHeight: 1.5,
                  maxWidth: 260,
                  marginBottom: 28,
                }}
              >
                Founder @MomAndBaby · UGC Creator · Shop my faves 👇
              </p>

              {/* Bio link buttons */}
              {[
                { label: "🛍️  Shop my Amazon list", highlight: true },
                { label: "▶️  My YouTube channel", highlight: false },
                { label: "📅  Book a call with me", highlight: false },
                { label: "💬  WhatsApp me", highlight: false },
                { label: "📥  Download my free guide", highlight: false },
              ].map((link) => (
                <div
                  key={link.label}
                  style={{
                    width: "100%",
                    padding: "12px 18px",
                    borderRadius: 10,
                    marginBottom: 10,
                    background: link.highlight
                      ? "var(--pulse, #0078D4)"
                      : "rgba(255,255,255,0.06)",
                    border: link.highlight
                      ? "none"
                      : "1px solid #e5e7eb",
                    color: "#F0ECF8",
                    fontSize: 13.5,
                    fontWeight: 500,
                    textAlign: "center",
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                  }}
                >
                  {link.label}
                </div>
              ))}

              {/* Powered by */}
              <p
                style={{
                  marginTop: 20,
                  fontSize: 11,
                  color: "rgba(155,141,184,0.5)",
                  letterSpacing: "0.05em",
                }}
              >
                powered by{" "}
                <span style={{ color: "var(--pulse, #0078D4)", fontWeight: 600 }}>
                  meshalive.com
                </span>
              </p>
            </div>
          </div>

          <p
            style={{
              marginTop: 20,
              fontSize: 13,
              color: "var(--fg-muted, #9B8DB8)",
            }}
          >
            meshalive.com/priya — yours looks exactly like this
          </p>
        </section>

        {/* ── FEATURES GRID ────────────────────────────────────── */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px 96px",
          }}
        >
          <h2
            className="display"
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 750,
              textAlign: "center",
              marginBottom: 12,
              letterSpacing: "-0.025em",
            }}
          >
            Everything a link-in-bio needs
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--fg-muted, #9B8DB8)",
              fontSize: 16,
              marginBottom: 52,
            }}
          >
            Built for creators and small businesses who need more than just a
            list of links.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                icon: "∞",
                title: "Unlimited links",
                desc: "Add as many links as you want on your bio page — no arbitrary caps, even on the free plan.",
              },
              {
                icon: "📊",
                title: "Click analytics per link",
                desc: "See exactly which links get tapped. Free plan includes 7-day analytics. Paid plans unlock 90-day geo & device breakdowns.",
              },
              {
                icon: "◻️",
                title: "QR code for your page",
                desc: "Every bio page gets a free QR code, perfect for packaging, business cards, and offline promotions.",
              },
              {
                icon: "✏️",
                title: "Custom slug",
                desc: "Claim meshalive.com/yourname so your URL is memorable. Custom domains available on paid plans.",
              },
              {
                icon: "📱",
                title: "Mobile-optimized design",
                desc: "Your bio page looks perfect on every phone. 90%+ of your visitors arrive from Instagram and WhatsApp on mobile.",
              },
              {
                icon: "⚡",
                title: "Zero setup — live in 60 seconds",
                desc: "Sign up, add your links, share your URL. No code, no design skills, no waiting for approval.",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--line-c, rgba(255,255,255,0.08))",
                  borderRadius: 14,
                  padding: "24px 22px",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    marginBottom: 14,
                    lineHeight: 1,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 650,
                    marginBottom: 8,
                    color: "var(--fg, #F0ECF8)",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--fg-muted, #9B8DB8)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────── */}
        <section
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "0 24px 96px",
          }}
        >
          <h2
            className="display"
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 750,
              textAlign: "center",
              marginBottom: 12,
              letterSpacing: "-0.025em",
            }}
          >
            Meshalive vs Linktree
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--fg-muted, #9B8DB8)",
              fontSize: 16,
              marginBottom: 48,
            }}
          >
            More features, a better free plan, and priced right for India.
          </p>

          <div
            style={{
              borderRadius: 16,
              border: "1px solid var(--line-c, rgba(255,255,255,0.1))",
              overflow: "hidden",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontWeight: 600,
                      color: "var(--fg-muted, #9B8DB8)",
                      borderBottom: "1px solid var(--line-c, rgba(255,255,255,0.08))",
                      fontSize: 13,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "center",
                      fontWeight: 700,
                      color: "var(--pulse, #0078D4)",
                      borderBottom: "1px solid var(--line-c, rgba(255,255,255,0.08))",
                      fontSize: 14,
                    }}
                  >
                    Meshalive (Free)
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "center",
                      fontWeight: 600,
                      color: "var(--fg-muted, #9B8DB8)",
                      borderBottom: "1px solid var(--line-c, rgba(255,255,255,0.08))",
                      fontSize: 14,
                    }}
                  >
                    Linktree (Free)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Links on bio page", "Unlimited", "5 links"],
                  ["Click analytics", "7-day history", "None"],
                  ["QR code", "✓ Included", "✗ Paid only"],
                  ["Custom slug", "✓ Free", "✓ Free"],
                  ["Custom domain", "Free", "Paid plan ($5/mo)"],
                  ["API access", "Free", "Enterprise only"],
                  ["Price", "Free forever", "$5/month (~₹420)"],
                ].map(([feature, mesh, linktree], i) => (
                  <tr
                    key={feature}
                    style={{
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 20px",
                        color: "var(--fg, #F0ECF8)",
                        fontWeight: 500,
                        borderBottom:
                          i < 6
                            ? "1px solid var(--line-c, rgba(255,255,255,0.06))"
                            : "none",
                      }}
                    >
                      {feature}
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        textAlign: "center",
                        color: String(mesh).startsWith("✓")
                          ? "#4ADE80"
                          : "var(--fg, #F0ECF8)",
                        fontWeight: String(mesh).startsWith("✓") ? 600 : 400,
                        borderBottom:
                          i < 6
                            ? "1px solid var(--line-c, rgba(255,255,255,0.06))"
                            : "none",
                      }}
                    >
                      {mesh}
                    </td>
                    <td
                      style={{
                        padding: "14px 20px",
                        textAlign: "center",
                        color: String(linktree).startsWith("✗")
                          ? "#F87171"
                          : "var(--fg-muted, #9B8DB8)",
                        borderBottom:
                          i < 6
                            ? "1px solid var(--line-c, rgba(255,255,255,0.06))"
                            : "none",
                      }}
                    >
                      {linktree}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── USE CASES ────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px 96px",
          }}
        >
          <h2
            className="display"
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 750,
              textAlign: "center",
              marginBottom: 12,
              letterSpacing: "-0.025em",
            }}
          >
            Who uses link-in-bio pages
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--fg-muted, #9B8DB8)",
              fontSize: 16,
              marginBottom: 52,
            }}
          >
            One URL that does the heavy lifting, no matter your platform.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                icon: "📸",
                title: "Instagram creators & influencers",
                desc: "Turn your profile link into a shoppable landing page. Track which products drive clicks.",
              },
              {
                icon: "▶️",
                title: "YouTube channels",
                desc: "Send subscribers to your merch, Patreon, community, and latest upload — all in one tap.",
              },
              {
                icon: "🏪",
                title: "Small business owners",
                desc: "Link your shop, WhatsApp catalog, Google Maps listing, and reviews from a single URL.",
              },
              {
                icon: "💼",
                title: "Freelancers & consultants",
                desc: "Showcase your portfolio, booking calendar, and testimonials without building a full site.",
              },
              {
                icon: "🎵",
                title: "Musicians & artists",
                desc: "Aggregate your Spotify, Apple Music, YouTube, and ticket links into one sharable page.",
              },
            ].map((uc) => (
              <div
                key={uc.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--line-c, rgba(255,255,255,0.08))",
                  borderRadius: 14,
                  padding: "22px 18px",
                }}
              >
                <div style={{ fontSize: 30, marginBottom: 12 }}>{uc.icon}</div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 650,
                    marginBottom: 8,
                    color: "var(--fg, #F0ECF8)",
                    lineHeight: 1.3,
                  }}
                >
                  {uc.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--fg-muted, #9B8DB8)",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 24px 96px",
            textAlign: "center",
          }}
        >
          <h2
            className="display"
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 750,
              marginBottom: 12,
              letterSpacing: "-0.025em",
            }}
          >
            Up and running in 3 steps
          </h2>
          <p
            style={{
              color: "var(--fg-muted, #9B8DB8)",
              fontSize: 16,
              marginBottom: 52,
            }}
          >
            No design skills or technical knowledge needed.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
              position: "relative",
            }}
          >
            {[
              {
                step: "1",
                title: "Create a free account",
                desc: "Sign up with email or Google. Takes under 30 seconds. No credit card needed.",
              },
              {
                step: "2",
                title: "Add your links",
                desc: "Paste your URLs, add labels, drag to reorder. Customize colors to match your brand.",
              },
              {
                step: "3",
                title: "Share one URL",
                desc: "Put meshalive.com/yourname in your Instagram bio, WhatsApp status, or anywhere you share.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  position: "relative",
                  background: "rgba(196,90,57,0.05)",
                  border: "1px solid rgba(196,90,57,0.2)",
                  borderRadius: 16,
                  padding: "32px 24px",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "var(--pulse, #0078D4)",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                    flexShrink: 0,
                  }}
                >
                  {s.step}
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 650,
                    marginBottom: 10,
                    color: "var(--fg, #F0ECF8)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--fg-muted, #9B8DB8)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
                {i < 2 && (
                  <div
                    aria-hidden
                    style={{
                      display: "none",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 24px 96px",
          }}
        >
          <h2
            className="display"
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 750,
              textAlign: "center",
              marginBottom: 48,
              letterSpacing: "-0.025em",
            }}
          >
            Frequently asked questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {[
              {
                q: "What is a link in bio page?",
                a: "A link-in-bio page is a single URL that hosts a mini landing page with all your important links — your online store, YouTube channel, WhatsApp contact, portfolio, and more. Because Instagram and most social platforms only allow one link in your profile, a link-in-bio page lets you share everything from that one spot.",
              },
              {
                q: "Is Meshalive link-in-bio free?",
                a: "Yes. Meshalive's link-in-bio tool is completely free. The free plan includes unlimited links on your bio page, 7-day click analytics, a QR code for your page, and a custom slug like meshalive.com/yourname. No credit card required.",
              },
              {
                q: "How is Meshalive different from Linktree?",
                a: "Meshalive offers more on the free plan: unlimited bio links (Linktree free caps at 5), 7-day analytics (Linktree free has none), and a QR code included. Meshalive is completely free, with full API access included.",
              },
              {
                q: "Can I add analytics to my bio page?",
                a: "Yes. Every Meshalive bio page comes with click tracking per link. Free users see 7-day analytics including total clicks and click-through rate per link. Paid plans unlock 90-day history, geo breakdown, device stats, and referrer data.",
              },
              {
                q: "Can I use a custom domain?",
                a: "Custom domains are available on all plans — completely free. You can connect your own domain (e.g., links.yourbrand.com) and host your bio page there.",
              },
              {
                q: "How many links can I add?",
                a: "There is no limit on the number of links you can add to your Meshalive bio page — even on the free plan. Add as many links as you need: your shop, your social profiles, your content, your contact links.",
              },
              {
                q: "Is the bio page mobile-friendly?",
                a: "Yes. All Meshalive bio pages are fully mobile-optimized by default. Since most traffic comes from Instagram and WhatsApp on mobile, the design is built mobile-first with large tap targets and fast load times.",
              },
            ].map((faq, i) => (
              <details
                key={faq.q}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--line-c, rgba(255,255,255,0.08))",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "18px 20px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "var(--fg, #F0ECF8)",
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    userSelect: "none",
                  }}
                >
                  {faq.q}
                  <span
                    style={{
                      color: "var(--pulse, #0078D4)",
                      fontSize: 20,
                      fontWeight: 300,
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    margin: 0,
                    padding: "0 20px 18px",
                    fontSize: 14,
                    color: "var(--fg-muted, #9B8DB8)",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────── */}
        <section
          style={{
            padding: "0 24px 120px",
          }}
        >
          <div
            style={{
              maxWidth: 700,
              margin: "0 auto",
              background:
                "linear-gradient(135deg, rgba(196,90,57,0.12) 0%, rgba(196,90,57,0.06) 100%)",
              border: "1px solid rgba(196,90,57,0.25)",
              borderRadius: 24,
              padding: "64px 40px",
              textAlign: "center",
            }}
          >
            <h2
              className="display"
              style={{
                fontSize: "clamp(24px, 4vw, 38px)",
                fontWeight: 750,
                marginBottom: 14,
                letterSpacing: "-0.025em",
                color: "var(--fg, #F0ECF8)",
              }}
            >
              Your link-in-bio page is waiting
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--fg-muted, #9B8DB8)",
                marginBottom: 36,
                lineHeight: 1.6,
              }}
            >
              Join thousands of Indian creators and small businesses who use
              Meshalive to share everything in one link.
            </p>

            <a
              href="/register"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--pulse, #0078D4)",
                color: "#fff",
                padding: "16px 36px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(196,90,57,0.35)",
              }}
            >
              Start free — no credit card required
              <span style={{ fontSize: 20 }}>→</span>
            </a>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 28,
                marginTop: 28,
                flexWrap: "wrap",
              }}
            >
              {[
                "Free forever plan",
                "Unlimited links",
                "Live in 60 seconds",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontSize: 13,
                    color: "var(--fg-muted, #9B8DB8)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "#4ADE80", fontSize: 14 }}>✓</span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
