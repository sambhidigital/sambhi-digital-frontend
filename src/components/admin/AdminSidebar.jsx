import React from "react";

import { Link }
    from "react-router-dom";

import "../../styles/Admin.css";

class AdminSidebar
    extends React.Component {

    render() {

        const role =
            localStorage.getItem(
                "role"
            );

        return (

            <div className="admin-sidebar">

                <div className="admin-logo">

                    <h2>
                        SamBhi Admin
                    </h2>

                </div>

                <ul>

                    <li>
                        <Link to="/admin/dashboard">
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/audit-logs">
                            Audit Logs
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/notifications">
                            Notifications
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/services">
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/solutions">
                            Solutions
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/portfolio">
                            Portfolio
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/blogs">
                            Blogs
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/careers">
                            Careers
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/applications">
                            Applications
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/team">
                            Team
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/testimonials">
                            Testimonials
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/faqs">
                            FAQs
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/newsletter">
                            Newsletter
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/contacts">
                            Contacts
                        </Link>
                    </li>

                    <li>
                        <Link to="/admin/files">
                            File Manager
                        </Link>
                    </li>

                    {
                        role === "ROLE_ADMIN" && (

                            <li>
                                <Link to="/admin/users">
                                    Users
                                </Link>
                            </li>
                        )
                    }

                    {
                        role === "ROLE_ADMIN" && (

                            <li>
                                <Link to="/admin/roles">
                                    Roles
                                </Link>
                            </li>
                        )
                    }

                    {
                        role === "ROLE_ADMIN" && (

                            <li>
                                <Link to="/admin/settings">
                                    Settings
                                </Link>
                            </li>
                        )
                    }

                    {
                        role === "ROLE_ADMIN" && (

                            <li>

                                <Link to="/admin/seo">

                                    SEO Manager

                                </Link>

                            </li>
                        )
                    }

                </ul>

            </div>
        );
    }
}

export default AdminSidebar;
