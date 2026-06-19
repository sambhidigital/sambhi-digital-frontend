import api from "./api";

const ROLE_ENDPOINT =
    "/roles";

export const getAllRoles =
    () => {

        return api.get(
            ROLE_ENDPOINT
        );
    };

export const getRoleById =
    (id) => {

        return api.get(
            `${ROLE_ENDPOINT}/${id}`
        );
    };

export const createRole =
    (roleData) => {

        return api.post(
            ROLE_ENDPOINT,
            roleData
        );
    };

export const updateRole =
    (
        id,
        roleData
    ) => {

        return api.put(
            `${ROLE_ENDPOINT}/${id}`,
            roleData
        );
    };

export const deleteRole =
    (id) => {

        return api.delete(
            `${ROLE_ENDPOINT}/${id}`
        );
    };
    