import api from "./api";

class AuthService {

/* ==========================================
   REGISTER
========================================== */

register(userData) {

    return api.post(
        "/auth/register",
        userData
    );
}

/* ==========================================
   LOGIN
========================================== */

login(credentials) {

    return api.post(
        "/auth/login",
        credentials
    );
}

/* ==========================================
   FORGOT PASSWORD
========================================== */

forgotPassword(email) {

    return api.post(

        "/auth/forgot-password",

        null,

        {
            params: {
                email
            }
        }
    );
}

/* ==========================================
   PROFILE
========================================== */

getProfile() {

    return api.get(
        "/users/profile"
    );
}

resetPassword(data) {

    return api.post(

        "/auth/reset-password",

        data
    );
}

/* ==========================================
   TOKEN MANAGEMENT
========================================== */

saveToken(token) {

    localStorage.setItem(
        "jwtToken",
        token
    );
}

getToken() {

    return localStorage.getItem(
        "jwtToken"
    );
}

removeToken() {

    localStorage.removeItem(
        "jwtToken"
    );

    localStorage.removeItem(
        "userId"
    );

    localStorage.removeItem(
        "firstName"
    );

    localStorage.removeItem(
        "email"
    );

    localStorage.removeItem(
        "role"
    );

    localStorage.removeItem(
        "profileImage"
    );
}

/* ==========================================
   AUTH STATUS
========================================== */

isAuthenticated() {

    return !!this.getToken();
}

/* ==========================================
   CURRENT USER
========================================== */

getCurrentUser() {

    return {

        userId:
            localStorage.getItem(
                "userId"
            ),

        firstName:
            localStorage.getItem(
                "firstName"
            ),

        email:
            localStorage.getItem(
                "email"
            ),

        role:
            localStorage.getItem(
                "role"
            ),

        profileImage:
            localStorage.getItem(
                "profileImage"
            )
    };
}

}

const authService =
new AuthService();

export default authService;
