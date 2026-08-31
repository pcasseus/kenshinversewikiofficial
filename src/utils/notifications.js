// src/utils/notifications.js
import { getMessaging, getToken } from "firebase/messaging";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import app from "../firebase";

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.log("🔕 Notification permission denied.");
      return;
    }

    const messaging = getMessaging(app);
    const token = await getToken(messaging, {
      vapidKey: "BAoM53EmY1QAyo14kYX9NO5-IxSCc3scxANRb6wRuRxeTrwgGfd3P0Qt6YZhinhwg85g93X8QOWL1fDEtzmP-WY",
    });

    if (token) {
      const user = auth.currentUser;
      if (!user) {
        console.warn("User not authenticated — cannot store token.");
        return;
      }

      // Save token under user's deviceTokens collection
      await setDoc(doc(db, "users", user.uid, "deviceTokens", token), {
        token,
        createdAt: Date.now(),
        platform: navigator.platform,
      });

      console.log("✅ FCM token saved to Firestore:", token);
    } else {
      console.warn("❌ No FCM token received.");
    }
  } catch (error) {
    console.error("🔥 Failed to request push notification permission:", error);
  }
};
