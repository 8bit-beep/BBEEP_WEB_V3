importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAopnO0mE2tT8MjvvOHu7lAfx9bRnmB-LE",
  authDomain: "beep-68d8b.firebaseapp.com",
  projectId: "beep-68d8b",
  storageBucket: "beep-68d8b.firebasestorage.app",
  messagingSenderId: "870415446002",
  appId: "1:870415446002:web:bd131a6f9bb4617193c56b",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("백그라운드 푸시 알림 수신:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/assets/Logo.svg",
  });
});
