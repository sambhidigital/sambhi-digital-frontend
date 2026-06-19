import React from "react";

import { Navigate }
    from "react-router-dom";

import { AuthContext }
    from "../context/AuthContext";

class AdminRoute
    extends React.Component {

    static contextType =
        AuthContext;

    render() {

        const {

            isAuthenticated,

            role

        } = this.context;
        

        if (
            !isAuthenticated
        ) {

            sessionStorage.setItem(

                "redirectAfterLogin",

                window.location.pathname

            );

            return (

                <Navigate

                    to="/login"

                    replace

                />
            );
        }

        if (
            role !==
            "ROLE_ADMIN"
        ) {

            return (

                <Navigate

                    to="/"

                    replace

                />
            );
        }

        return (
            this.props.children
        );
    }
}

export default AdminRoute;
