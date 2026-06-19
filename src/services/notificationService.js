import api from "./api";

const NOTIFICATION_ENDPOINT =
    "/notifications";

/* ==========================================
   GET ALL NOTIFICATIONS
========================================== */

export const getAllNotifications =
    () => {

        return api.get(
            NOTIFICATION_ENDPOINT
        );
    };

/* ==========================================
   MARK AS READ
========================================== */

export const markAsRead =
    (id) => {

        return api.put(

            `${NOTIFICATION_ENDPOINT}/${id}/read`

        );
    };

/* ==========================================
   GET UNREAD COUNT
========================================== */

export const getUnreadCount =
    () => {

        return api.get(

            `${NOTIFICATION_ENDPOINT}/unread-count`

        );
    };
    