import api from "./api";

const FILE_ENDPOINT =
    "/files";

/* ==========================================
   GET ALL FILES
========================================== */

export const getAllFiles =
    () => {

        return api.get(
            FILE_ENDPOINT
        );
    };

/* ==========================================
   DELETE FILE
========================================== */

export const deleteFile =
    (fileName) => {

        return api.delete(
            `${FILE_ENDPOINT}/${fileName}`
        );
    };

/* ==========================================
   BLOG FILE
========================================== */

export const uploadBlogFile =
    (formData) => {

        return api.post(
            "/files/upload/blog",
            formData
        );
    };

/* ==========================================
   PORTFOLIO FILE
========================================== */

export const uploadPortfolioFile =
    (formData) => {

        return api.post(
            "/files/upload/portfolio",
            formData
        );
    };

/* ==========================================
   RESUME FILE
========================================== */

export const uploadResumeFile =
    (formData) => {

        return api.post(
            "/files/upload/resume",
            formData
        );
    };

/* ==========================================
   TESTIMONIAL FILE
========================================== */

export const uploadTestimonialFile =
    (formData) => {

        return api.post(
            "/files/upload/testimonial",
            formData
        );
    };

/* ==========================================
   PROFILE IMAGE
========================================== */

export const uploadProfileFile =
    (formData) => {

        return api.post(
            "/files/upload/profile",
            formData
        );
    };

/* ==========================================
   SERVICE IMAGE
========================================== */

export const uploadServiceFile =
    (formData) => {

        return api.post(
            "/files/upload/service",
            formData
        );
    };

/* ==========================================
   SOLUTION IMAGE
========================================== */

export const uploadSolutionFile =
    (formData) => {

        return api.post(
            "/files/upload/solution",
            formData
        );
    };

/* ==========================================
   TEAM IMAGE
========================================== */

export const uploadTeamFile =
    (formData) => {

        return api.post(
            "/files/upload/team",
            formData
        );
    };

/* ==========================================
   DOCUMENT FILE
========================================== */

export const uploadDocumentFile =
    (formData) => {

        return api.post(
            "/files/upload/document",
            formData
        );
    };
    