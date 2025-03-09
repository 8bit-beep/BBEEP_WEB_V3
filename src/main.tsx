import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {requestPermission} from "./libs/fcm/requestPermission.ts";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker 등록 완료 ✅", registration);
    })
    .catch((error) => {
      console.error("Service Worker 등록 실패 ❌", error);
    });
}

requestPermission();

createRoot(document.getElementById("root")!).render(<App />);
