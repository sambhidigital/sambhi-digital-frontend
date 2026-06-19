// src/services/api.js

import axios from "axios";

/* ==========================================
   API BASE URL
========================================== */

const BASE_URL =
    process.env.REACT_APP_API_URL ||
    "https://sambhi-digital-backend-production.up.railway.app/api";

export const FILE_BASE_URL =
    "https://sambhi-digital-backend-production.up.railway.app";
/* ==========================================
   AXIOS INSTANCE
========================================== */

const api = axios.create({

    baseURL: BASE_URL,

    timeout: 15000,

    headers: {

        "Content-Type": "application/json",

        Accept: "application/json"
    }
});

/* ==========================================
   REQUEST INTERCEPTOR
========================================== */

api.interceptors.request.use(

    (config) => {

        const token =
            localStorage.getItem(
                "jwtToken"
            );

        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;
        }

        if (
            process.env.NODE_ENV ===
            "development"
        ) {

            console.log(

                "API Request:",

                config.method?.toUpperCase(),

                config.url
            );
        }

        return config;
    },

    (error) => {

        return Promise.reject(error);
    }
);

/* ==========================================
   RESPONSE INTERCEPTOR
========================================== */

api.interceptors.response.use(

    (response) => {

        return response;
    },

    (error) => {

        const status =
            error?.response?.status;

        switch (status) {

            case 401:

                console.warn(
                    "Unauthorized Access"
                );

                localStorage.removeItem(
                    "jwtToken"
                );

                localStorage.removeItem(
                    "userId"
                );

                localStorage.removeItem(
                    "firstName"
                );

                localStorage.removeItem(
                    "email"
                );

                localStorage.removeItem(
                    "role"
                );

                localStorage.removeItem(
                    "profileImage"
                );

                window.location.href =
                    "/login";

                break;

            case 403:

                console.warn(
                    "Access Forbidden"
                );

                break;

            case 404:

                console.warn(
                    "Resource Not Found"
                );

                break;

            case 500:

                console.error(
                    "Internal Server Error"
                );

                break;

            default:

                break;
        }

        if (!error.response) {

            console.error(
                "Network Error. Backend may be unavailable."
            );
        }

        return Promise.reject(
            error
        );
    }
);

/* ==========================================
   EXPORT
========================================== */

export default api;
