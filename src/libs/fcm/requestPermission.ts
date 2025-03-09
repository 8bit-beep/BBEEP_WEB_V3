import { messaging, getToken } from "./firebaseConfig.ts";

export const requestPermission = async () => {
  const permission = await Notification.requestPermission();
  
  if (permission === "granted") {
    console.log("알림 권한 허용됨 ✅");
    
    try {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });
      console.log("FCM 토큰:", token);
      return token;
    } catch (error) {
      console.error("FCM 토큰 요청 실패 ❌", error);
    }
  } else {
    console.log("알림 권한 거부됨 ❌");
  }
};
