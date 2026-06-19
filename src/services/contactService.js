// src/services/contactService.js

import api from "./api";

/* ==========================================
   API ENDPOINTS
========================================== */

const CONTACT_ENDPOINT = "/contact";

const ADMIN_CONTACT_ENDPOINT = "/admin/contacts";

/* ==========================================
   SEND CONTACT MESSAGE
========================================== */

export const sendContactMessage = async (
    contactData
) => {

    try {

        const response =
            await api.post(
                CONTACT_ENDPOINT,
                contactData
            );

        return response.data;

    } catch (error) {

        console.error(
            "Send Contact Message Error:",
            error
        );

        throw error;
    }
};

/* ==========================================
   GET ALL CONTACT MESSAGES
   (ADMIN)
========================================== */

export const getAllMessages = async () => {

    try {

        const response =
            await api.get(
                ADMIN_CONTACT_ENDPOINT
            );

        return response.data;

    } catch (error) {

        console.error(
            "Get Contact Messages Error:",
            error
        );

        throw error;
    }
};

/* ==========================================
   GET CONTACT MESSAGE BY ID
   (ADMIN)
========================================== */

export const getMessageById = async (
    id
) => {

    try {

        const response =
            await api.get(
                ADMIN_CONTACT_ENDPOINT
            );

        return response.data;

    } catch (error) {

        console.error(
            "Get Contact Message Error:",
            error
        );

        throw error;
    }
};

/* ==========================================
   DELETE CONTACT MESSAGE
   (ADMIN)
========================================== */

export const deleteMessage = async (
    id
) => {

    try {

        const response =
            await api.delete(
                `${ADMIN_CONTACT_ENDPOINT}/${id}`
            );

        return response.data;

    } catch (error) {

        console.error(
            "Delete Contact Message Error:",
            error
        );

        throw error;
    }
};
