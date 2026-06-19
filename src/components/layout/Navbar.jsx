import React from "react";

import { Link } from "react-router-dom";

// import authService from "../../services/authService";

import {
    AuthContext
}
from "../../context/AuthContext";

class Navbar extends React.Component {

    static contextType =
        AuthContext;

    constructor(props) {

        super(props);

        this.state = {

            mobileMenuOpen: false,

            scrolled: false
        };
    }

    componentDidMount() {

        window.addEventListener(
            "scroll",
            this.handleScroll
        );
    }

    componentWillUnmount() {

        window.removeEventListener(
            "scroll",
            this.handleScroll
        );
    }

    handleScroll = () => {

        this.setState({

            scrolled:
                window.scrollY > 50
        });
    };

    toggleMobileMenu = () => {

        this.setState({

            mobileMenuOpen:
                !this.state.mobileMenuOpen
        });
    };

    handleLogout = () => {

        this.context.logout();

        window.location.href = "/";
    };

    render() {

        const {

            isAuthenticated,

            role

        } = this.context;

        return (

            <nav

                className={

                    this.state.scrolled

                        ? "navbar navbar-scrolled"

                        : "navbar"
                }

            >

                <div className="container navbar-container">

                    {/* LOGO */}

                    <div className="navbar-logo">

                        <Link

                            to="/"

                            className="navbar-brand"

                        >

                            <img

                                src="/assets/logos/logo-light.png"

                                alt="SamBhi Digital Technology"

                            />

                            <div className="navbar-brand-text">

                                <span className="brand-name">

                                    SamBhi Digital

                                </span>

                                <span className="brand-subtitle">

                                    Technology

                                </span>

                            </div>

                        </Link>

                    </div>

                    {/* DESKTOP MENU */}

                    <ul className="navbar-menu">

                        <li><Link to="/">Home</Link></li>

                        <li><Link to="/about">About</Link></li>

                        <li><Link to="/services">Services</Link></li>

                        <li><Link to="/solutions">Solutions</Link></li>

                        <li><Link to="/portfolio">Portfolio</Link></li>

                        <li><Link to="/careers">Careers</Link></li>

                        <li><Link to="/blog">Blog</Link></li>

                        <li><Link to="/contact">Contact</Link></li>

                        {
                            isAuthenticated

                            ?

                            <>

                                {
                                    role ===
                                    "ROLE_ADMIN" && (

                                        <li>

                                            <Link
                                                to="/admin/dashboard"
                                            >

                                                Dashboard

                                            </Link>

                                        </li>
                                    )
                                }

                                <li>

                                    <Link
                                        to="/profile"
                                    >

                                        My Profile

                                    </Link>

                                </li>

                                <li>

                                    <button

                                        className="logout-nav-btn"

                                        onClick={
                                            this.handleLogout
                                        }
                                    >

                                        Logout

                                    </button>

                                </li>

                            </>

                            :

                            <>

                                <li>

                                    <Link
                                        to="/login"
                                        className="login-nav-btn"
                                    >

                                        Login

                                    </Link>

                                </li>

                                <li>

                                    <Link
                                        to="/register"
                                        className="login-nav-btn"
                                    >

                                        Register

                                    </Link>

                                </li>

                            </>
                        }

                    </ul>

                    {/* MOBILE BUTTON */}

                    <button

                        className="mobile-toggle"

                        onClick={
                            this.toggleMobileMenu
                        }
                    >

                        <i className="pi pi-bars"></i>

                    </button>

                </div>

                {
                    this.state.mobileMenuOpen && (

                        <div
                            className="mobile-menu mobile-menu-active"
                        >

                            <div className="mobile-menu-header">

                                <button

                                    className="mobile-close-btn"

                                    onClick={
                                        this.toggleMobileMenu
                                    }
                                >

                                    <i className="pi pi-times"></i>

                                </button>

                            </div>

                            <ul className="mobile-menu-links">

                                <li><Link to="/">Home</Link></li>

                                <li><Link to="/about">About</Link></li>

                                <li><Link to="/services">Services</Link></li>

                                <li><Link to="/solutions">Solutions</Link></li>

                                <li><Link to="/portfolio">Portfolio</Link></li>

                                <li><Link to="/careers">Careers</Link></li>

                                <li><Link to="/blog">Blog</Link></li>

                                <li><Link to="/contact">Contact</Link></li>

                                {
                                    isAuthenticated

                                    ?

                                    <>

                                        {
                                            role ===
                                            "ROLE_ADMIN" && (

                                                <li>

                                                    <Link
                                                        to="/admin/dashboard"
                                                    >

                                                        Dashboard

                                                    </Link>

                                                </li>
                                            )
                                        }

                                        <li>

                                            <Link
                                                to="/profile"
                                            >

                                                My Profile

                                            </Link>

                                        </li>

                                        <li>

                                            <button
                                                onClick={
                                                    this.handleLogout
                                                }
                                            >

                                                Logout

                                            </button>

                                        </li>

                                    </>

                                    :

                                    <>

                                        <li>

                                            <Link
                                                to="/login"
                                            >

                                                Login

                                            </Link>

                                        </li>

                                        <li>

                                            <Link
                                                to="/register"
                                            >

                                                Register

                                            </Link>

                                        </li>

                                    </>
                                }

                            </ul>

                        </div>
                    )
                }

            </nav>
        );
    }
}

export default Navbar;
