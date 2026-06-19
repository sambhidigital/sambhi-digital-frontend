import api from "./api";

/* ==========================================
   API ENDPOINT
========================================== */

const PORTFOLIO_ENDPOINT =
    "/portfolio";

/* ==========================================
   GET ALL PROJECTS
========================================== */

export const getPortfolioProjects =
    () => {

        return api.get(
            PORTFOLIO_ENDPOINT
        );
    };

/* ==========================================
   GET PROJECT BY ID
========================================== */

export const getProjectById =
    (id) => {

        return api.get(
            `${PORTFOLIO_ENDPOINT}/${id}`
        );
    };

/* ==========================================
   GET PROJECT BY SLUG
========================================== */

export const getProjectBySlug =
    (slug) => {

        return api.get(
            `${PORTFOLIO_ENDPOINT}/slug/${slug}`
        );
    };

/* ==========================================
   GET FEATURED PROJECTS
========================================== */

export const getFeaturedProjects =
    () => {

        return api.get(
            `${PORTFOLIO_ENDPOINT}/featured`
        );
    };

/* ==========================================
   GET PROJECTS BY CATEGORY
========================================== */

export const getProjectsByCategory =
    (category) => {

        return api.get(
            `${PORTFOLIO_ENDPOINT}/category/${category}`
        );
    };

/* ==========================================
   GET PROJECTS BY TECHNOLOGY
========================================== */

export const getProjectsByTechnology =
    (technology) => {

        return api.get(
            `${PORTFOLIO_ENDPOINT}/technology/${technology}`
        );
    };

/* ==========================================
   CREATE PROJECT
========================================== */

export const addPortfolioProject =
    (projectData) => {

        return api.post(
            PORTFOLIO_ENDPOINT,
            projectData
        );
    };

/* ==========================================
   UPDATE PROJECT
========================================== */

export const updatePortfolioProject =
    (
        id,
        projectData
    ) => {

        return api.put(
            `${PORTFOLIO_ENDPOINT}/${id}`,
            projectData
        );
    };

/* ==========================================
   DELETE PROJECT
========================================== */

export const deletePortfolioProject =
    (id) => {

        return api.delete(
            `${PORTFOLIO_ENDPOINT}/${id}`
        );
    };
