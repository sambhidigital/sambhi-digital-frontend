import api from "./api";

const SETTINGS_ENDPOINT =
    "/settings";

/* ==========================================
   GET SETTINGS
========================================== */

export const getSettings =
    () => {

        return api.get(
            SETTINGS_ENDPOINT
        );
    };

/* ==========================================
   UPDATE SETTINGS
========================================== */

export const updateSettings =
    (settingsData) => {

        return api.put(
            SETTINGS_ENDPOINT,
            settingsData
        );
    };
    