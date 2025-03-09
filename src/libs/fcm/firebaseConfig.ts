import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FCM_KEY,
  authDomain: import.meta.env.VITE_FCM_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FCM_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FCM_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FCM_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FCM_APP_ID,
  measurementId: import.meta.env.VITE_FCM_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
getToken(messaging, { vapidKey: import.meta.env.VITE_VAPID_KEY }).then((token) => {
  if (token) {
    fetch("https://fcm.cher1shrxd.me/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => console.log("✅ 토픽 구독 성공:", data))
      .catch((err) => console.error("❌ 토픽 구독 실패:", err));
  }
})

export { messaging, getToken, onMessage };