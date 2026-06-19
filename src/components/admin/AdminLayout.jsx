import React from "react";

import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

import "../../styles/Admin.css";

class AdminLayout extends React.Component {

    render() {

        return (

            <div className="admin-container">

                <AdminSidebar />

                <div className="admin-main">

                    <AdminTopbar />

                    <div className="admin-content">

                        {this.props.children}

                    </div>

                </div>

            </div>
        );
    }
}

export default AdminLayout;
