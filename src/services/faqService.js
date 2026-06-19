// src/services/faqService.js

import api from "./api";

const FAQ_ENDPOINT =
    "/faqs";

class FAQService {

    getAllFaqs() {

        return api.get(
            FAQ_ENDPOINT
        );
    }

    createFaq(
        faqData
    ) {

        return api.post(
            FAQ_ENDPOINT,
            faqData
        );
    }

    updateFaq(
        id,
        faqData
    ) {

        return api.put(
            `${FAQ_ENDPOINT}/${id}`,
            faqData
        );
    }

    deleteFaq(
        id
    ) {

        return api.delete(
            `${FAQ_ENDPOINT}/${id}`
        );
    }
}

const faqService =
    new FAQService();

export default faqService;
