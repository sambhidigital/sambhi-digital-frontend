import api from "./api";

const TESTIMONIAL_ENDPOINT =
    "/testimonials";

class TestimonialService {

    getAllTestimonials() {

        return api.get(
            TESTIMONIAL_ENDPOINT
        );
    }

    getFeaturedTestimonials() {

        return api.get(
            `${TESTIMONIAL_ENDPOINT}/featured`
        );
    }

    createTestimonial(
        testimonialData
    ) {

        return api.post(
            TESTIMONIAL_ENDPOINT,
            testimonialData
        );
    }

    updateTestimonial(
        id,
        testimonialData
    ) {

        return api.put(
            `${TESTIMONIAL_ENDPOINT}/${id}`,
            testimonialData
        );
    }

    deleteTestimonial(
        id
    ) {

        return api.delete(
            `${TESTIMONIAL_ENDPOINT}/${id}`
        );
    }
}

const testimonialService =
    new TestimonialService();

export default testimonialService;
