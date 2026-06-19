// src/context/AuthContext.js

import React from "react";

import authService from "../services/authService";

export const AuthContext =
    React.createContext();

class AuthProvider
extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            isAuthenticated:
                authService.isAuthenticated(),

            token:
                localStorage.getItem(
                    "jwtToken"
                ),

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

    login = (userData) => {

        authService.saveToken(
            userData.token
        );

        localStorage.setItem(
            "userId",
            userData.userId
        );

        localStorage.setItem(
            "firstName",
            userData.firstName
        );

        localStorage.setItem(
            "email",
            userData.email
        );

        localStorage.setItem(
            "role",
            userData.role
        );

        localStorage.setItem(
            "profileImage",
            userData.profileImage || ""
        );

        this.setState({

            isAuthenticated: true,

            token:
                userData.token,

            userId:
                userData.userId,

            firstName:
                userData.firstName,

            email:
                userData.email,

            role:
                userData.role,

            profileImage:
                userData.profileImage || null
        });
    };

    logout = () => {

        authService.removeToken();

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

        this.setState({

            isAuthenticated: false,

            token: null,

            userId: null,

            firstName: null,

            email: null,

            role: null,

            profileImage: null
        });
    };

    render() {

        return (

            <AuthContext.Provider

                value={{

                    ...this.state,

                    login:
                        this.login,

                    logout:
                        this.logout
                }}

            >

                {this.props.children}

            </AuthContext.Provider>
        );
    }
}

export default AuthProvider;
