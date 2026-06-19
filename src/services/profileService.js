import api from "./api";

/* ==========================================
   PROFILE ENDPOINT
========================================== */

const PROFILE_ENDPOINT =
    "/users/profile";

/* ==========================================
   GET PROFILE
========================================== */

const getProfile =
    () => {

        return api.get(
            PROFILE_ENDPOINT
        );
    };

/* ==========================================
   UPDATE PROFILE
========================================== */

const updateProfile =
    (profileData) => {

        return api.put(

            PROFILE_ENDPOINT,

            profileData
        );
    };

/* ==========================================
   CHANGE PASSWORD
========================================== */

const changePassword =
    (passwordData) => {

        return api.put(

            "/users/change-password",

            passwordData
        );
    };

/* ==========================================
   UPLOAD PROFILE IMAGE
========================================== */

const uploadProfileImage =
    (file) => {

        const formData =
            new FormData();

        formData.append(
            "file",
            file
        );

        return api.post(

            "/users/profile-image",

            formData,

            {
                headers: {

                    "Content-Type":
                        "multipart/form-data"
                }
            }
        );
    };

    const getLoginHistory =
    () => {

        return api.get(
            "/users/login-history"
        );
    };

/* ==========================================
   EXPORT
========================================== */

const profileService = {

    getProfile,

    updateProfile,

    changePassword,

    uploadProfileImage,

    getLoginHistory
};

export default profileService;
