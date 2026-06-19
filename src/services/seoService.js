import api from "./api";

const SEO_ENDPOINT =
    "/seo";

/* ==========================================
   GET SEO SETTINGS
========================================== */

export const getSeoSettings =
    () => {

        return api.get(
            SEO_ENDPOINT
        );
    };

/* ==========================================
   UPDATE SEO SETTINGS
========================================== */

export const updateSeoSettings =
    (data) => {

        return api.put(
            SEO_ENDPOINT,
            data
        );
    };
