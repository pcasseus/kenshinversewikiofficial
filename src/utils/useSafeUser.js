import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

export default function useSafeUser() {
  const [firebaseUser, loadingAuth] = useAuthState(auth);
  const [safeUser, setSafeUser] = useState(null);
  const [privateData, setPrivateData] = useState(null);

  useEffect(() => {
    if (!firebaseUser) {
      setSafeUser(null);
      setPrivateData(null);
      return;
    }

    setSafeUser({
      uid: firebaseUser.uid,
      displayName: firebaseUser.displayName || "",
      photoURL: firebaseUser.photoURL || "",
    });

    const fetchPrivate = async () => {
      try {
        const ref = doc(db, "privateData", firebaseUser.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setPrivateData(snap.data());
        }
      } catch (err) {
        console.error("Failed to load privateData:", err.message);
      }
    };

    fetchPrivate();
  }, [firebaseUser]);

  return {
    user: firebaseUser,
    uid: safeUser?.uid || null,
    displayName: safeUser?.displayName || "",
    photoURL: safeUser?.photoURL || "",
    email: privateData?.email || "",
    role: privateData?.role || "viewer",
    loading: loadingAuth,
    isAuthenticated: !!firebaseUser,
  };
}
