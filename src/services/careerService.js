// src/services/careerService.js

import api from "./api";

/* ==========================================
   API ENDPOINTS
========================================== */

const CAREER_ENDPOINT =
    "/careers";

const APPLICATION_ENDPOINT =
    "/careers/apply";

/* ==========================================
   GET ALL JOBS
========================================== */

export const getAllJobs =
    () => {

        return api.get(
            CAREER_ENDPOINT
        );
    };

/* ==========================================
   GET JOB BY ID
========================================== */

export const getJobById =
    (id) => {

        return api.get(
            `${CAREER_ENDPOINT}/${id}`
        );
    };

/* ==========================================
   APPLY FOR JOB
========================================== */

export const applyForJob =
    (applicationData) => {

        return api.post(
            APPLICATION_ENDPOINT,
            applicationData
        );
    };

/* ==========================================
   APPLY FOR INTERNSHIP
========================================== */

export const applyForInternship =
    (internshipData) => {

        return api.post(
            APPLICATION_ENDPOINT,
            internshipData
        );
    };

/* ==========================================
   UPLOAD RESUME
========================================== */

export const uploadResume =
    (file) => {

        const formData =
            new FormData();

        formData.append(
            "file",
            file
        );

        return api.post(
    "/files/upload/resume",
    formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data"
                }
            }
        );
    };

/* ==========================================
   CREATE JOB
========================================== */

export const createJob =
    (jobData) => {

        return api.post(
            CAREER_ENDPOINT,
            jobData
        );
    };

/* ==========================================
   UPDATE JOB
========================================== */

export const updateJob =
    (
        id,
        jobData
    ) => {

        return api.put(
            `${CAREER_ENDPOINT}/${id}`,
            jobData
        );
    };

/* ==========================================
   DELETE JOB
========================================== */

export const deleteJob =
    (id) => {

        return api.delete(
            `${CAREER_ENDPOINT}/${id}`
        );
    };

/* ==========================================
   GET APPLICATIONS
========================================== */

export const getApplications =
    () => {

        return api.get(
            "/careers/applications"
        );
    };

/* ==========================================
   DELETE APPLICATION
========================================== */

export const deleteApplication =
    (id) => {

        return api.delete(
            `/careers/applications/${id}`
        );
    };
