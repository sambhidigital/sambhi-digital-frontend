// src/services/serviceService.js

import api from "./api";

const SERVICE_ENDPOINT =
    "/services";

class ServiceService {

    getAllServices() {

        return api.get(
            SERVICE_ENDPOINT
        );
    }

    getFeaturedServices() {

        return api.get(
            `${SERVICE_ENDPOINT}/featured`
        );
    }

    getServiceById(
        id
    ) {

        return api.get(
            `${SERVICE_ENDPOINT}/${id}`
        );
    }

    getServiceBySlug(
        slug
    ) {

        return api.get(
            `${SERVICE_ENDPOINT}/slug/${slug}`
        );
    }

    createService(serviceData) {

        return api.post(
            SERVICE_ENDPOINT,
            serviceData
        );
    }

    updateService(
        id,
        serviceData
    ) {

        return api.put(
            `${SERVICE_ENDPOINT}/${id}`,
            serviceData
        );
    }

    deleteService(id) {

        return api.delete(
            `${SERVICE_ENDPOINT}/${id}`
        );
    }
}

const serviceService =
    new ServiceService();



export default serviceService;
