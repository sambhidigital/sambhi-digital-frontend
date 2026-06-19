import api from "./api";

/* ==========================================
   DASHBOARD STATS
========================================== */

export const getDashboardStats =
    () => {

        return api.get(
            "/dashboard/stats"
        );
    };

/* ==========================================
   USER CHART
========================================== */

export const getUserChart =
    () => {

        return api.get(
            "/dashboard/chart/users"
        );
    };

/* ==========================================
   CONTACT CHART
========================================== */

export const getContactChart =
    () => {

        return api.get(
            "/dashboard/chart/contacts"
        );
    };

/* ==========================================
   CAREER CHART
========================================== */

export const getCareerChart =
    () => {

        return api.get(
            "/dashboard/chart/careers"
        );
    };

/* ==========================================
   NEWSLETTER CHART
========================================== */

export const getNewsletterChart =
    () => {

        return api.get(
            "/dashboard/chart/newsletters"
        );
    };

