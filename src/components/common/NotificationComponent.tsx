import { useEffect } from "react";
import { messaging, onMessage } from "../../libs/fcm/firebaseConfig.ts";
import { notification } from "antd";

const NotificationComponent = () => {
    useEffect(() => {
        const unsubscribe = onMessage(messaging, (payload) => {
            if (payload.notification) {
                notification.open({
                    message: payload.notification.title,
                    description: payload.notification.body,
                    icon: payload.notification.icon,
                });
                console.log("포그라운드 푸시 알림 수신:", payload);
            }
        });

        return () => unsubscribe();
    }, []);

    return <></>;
};

export default NotificationComponent;
