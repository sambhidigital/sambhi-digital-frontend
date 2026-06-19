import api from "./api";

const USER_ENDPOINT =
    "/users";

export const getAllUsers =
    () => {

        return api.get(
            USER_ENDPOINT
        );
    };

export const getUserById =
    (id) => {

        return api.get(
            `${USER_ENDPOINT}/${id}`
        );
    };

export const deleteUser =
    (id) => {

        return api.delete(
            `${USER_ENDPOINT}/${id}`
        );
    };

export const getProfile =
    () => {

        return api.get(
            `${USER_ENDPOINT}/profile`
        );
    };

export const enableUser = (id) => {

    return api.put(
        `/users/${id}/enable`
    );
};

export const disableUser = (id) => {

    return api.put(
        `/users/${id}/disable`
    );
};

export const lockUser = (id) => {

    return api.put(
        `/users/${id}/lock`
    );
};

export const unlockUser = (id) => {

    return api.put(
        `/users/${id}/unlock`
    );
};

export const changeUserRole = (

    id,

    role

) => {

    return api.put(

        `/users/${id}/role`,

        {
            role
        }
    );
};

