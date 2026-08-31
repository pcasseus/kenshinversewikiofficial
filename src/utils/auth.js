import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getUserRole = async (uid) => {
  try {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;

    const data = snap.data();
    return data.role || null;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};
