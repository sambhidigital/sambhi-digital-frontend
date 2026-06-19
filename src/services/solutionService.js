// src/services/solutionService.js

import api from "./api";

const SOLUTION_ENDPOINT =
    "/solutions";

class SolutionService {

    getAllSolutions() {

        return api.get(
            SOLUTION_ENDPOINT
        );
    }

    getFeaturedSolutions() {

        return api.get(
            `${SOLUTION_ENDPOINT}/featured`
        );
    }

    getSolutionById(id) {

        return api.get(
            `${SOLUTION_ENDPOINT}/${id}`
        );
    }

    createSolution(solutionData) {

        return api.post(
            "/solutions",
            solutionData
        );
    }

    updateSolution(
        id,
        solutionData
    ) {

        return api.put(
            `/solutions/${id}`,
            solutionData
        );
    }

    deleteSolution(id) {

        return api.delete(
            `/solutions/${id}`
        );
    }
}

const solutionService =
    new SolutionService();

export default solutionService;
