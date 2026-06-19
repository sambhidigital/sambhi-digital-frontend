import React from "react";

import { AuthContext }
from "../../context/AuthContext";

import "../../styles/Admin.css";

class AdminTopbar extends React.Component {

    static contextType =
        AuthContext;

    render() {

        const {

            firstName,

            logout

        } = this.context;

        return (

            <div className="admin-topbar">

                <h3>

                    Admin Dashboard

                </h3>

                <div>

                    <span>

                        Welcome,

                        {" "}

                        {firstName}

                    </span>

                    <button

                        className="logout-btn"

                        onClick={logout}

                    >

                        Logout

                    </button>

                </div>

            </div>
        );
    }
}

export default AdminTopbar;
