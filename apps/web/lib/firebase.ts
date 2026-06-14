import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAByriAMuFOx2U59GcLvHz5rBCVCXn8Ocs",
  authDomain: "meshalivecom.firebaseapp.com",
  projectId: "meshalivecom",
  storageBucket: "meshalivecom.firebasestorage.app",
  messagingSenderId: "983291910253",
  appId: "1:983291910253:web:c7c94cb830ddd98b264764",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
