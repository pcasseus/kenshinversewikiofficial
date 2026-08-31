import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { getUserRole } from "../utils/auth";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    if (user) {
      getUserRole(user.uid).then((role) => {
        setIsAdmin(role === "admin");
      });
    }
  }, [user]);

  if (loading || isAdmin === null) {
    return <div className="text-yellow-300 text-center mt-20">Loading...</div>;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
}
