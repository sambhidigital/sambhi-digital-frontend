import api from "./api";

const NEWSLETTER_ENDPOINT =
    "/newsletter";

class NewsletterService {

    /* ===========================
       SUBSCRIBE
    =========================== */

    subscribe(
        emailData
    ) {

        return api.post(
            NEWSLETTER_ENDPOINT,
            emailData
        );
    }

    /* ===========================
       GET ALL SUBSCRIBERS
       ADMIN
    =========================== */

    getAllSubscribers() {

        return api.get(
            NEWSLETTER_ENDPOINT
        );
    }

    /* ===========================
       DELETE SUBSCRIBER
       ADMIN
    =========================== */

    deleteSubscriber(
        id
    ) {

        return api.delete(
            `${NEWSLETTER_ENDPOINT}/${id}`
        );
    }
}

const newsletterService =
    new NewsletterService();

export default newsletterService;
