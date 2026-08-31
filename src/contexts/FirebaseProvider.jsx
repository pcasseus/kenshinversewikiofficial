import { createContext, useContext, useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import useSafeUser from "../utils/useSafeUser";

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  const {
    user,
    uid,
    displayName,
    photoURL,
    email,
    role,
    loading: userLoading,
    isAuthenticated,
  } = useSafeUser();

  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) return;
    const q = query(collection(db, "users"), orderBy("lastActive", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const result = snap.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((u) => u.username && u.privacyMode === false);
      setUsers(result);
    });
    return () => unsub();
  }, [isAuthenticated]);

  useEffect(() => {
    if (!uid) return;
    const ref = collection(db, "users", uid, "notifications");
    const q = query(ref, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setNotifications(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, [uid]);

  useEffect(() => {
    if (!userLoading) setLoading(false);
  }, [userLoading]);

  return (
    <FirebaseContext.Provider
      value={{
        user,
        uid,
        displayName,
        photoURL,
        email,
        role,
        isAuthenticated,
        users,
        notifications,
        loading,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);
