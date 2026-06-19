import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    render() {

        return (


                <footer className="footer">

                    <div className="container">

                        <div className="footer-grid">

                            {/* Company Info */}
                            <div className="footer-column">

                                <div className="footer-brand">

                                    <img
                                        src="/assets/logos/logo-light.png"
                                        alt="SamBhi Digital Technology"
                                    />

                                    <div>

                                        <h2 className="footer-logo">
                                            SamBhi Digital
                                        </h2>

                                        <span className="footer-tagline">
                                            Technology
                                        </span>

                                    </div>

                                </div>

                                <p>
                                    AI-Powered Digital Infrastructure &
                                    Enterprise IT Solutions.
                                </p>

                            </div>

                            {/* Quick Links */}
                            <div className="footer-column">

                                <h3>Quick Links</h3>

                                <ul>

                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>

                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>

                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>

                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>

                                </ul>

                            </div>

                            {/* Services */}
                            <div className="footer-column">

                                <h3>Services</h3>

                                <ul>

                                    <li>AI Solutions</li>
                                    <li>Networking</li>
                                    <li>Cloud Infrastructure</li>
                                    <li>Website Development</li>
                                    <li>Cyber Security</li>

                                </ul>

                            </div>

                            {/* Contact */}
                            <div className="footer-column">

                                <h3>Contact</h3>

                                <p>Email: info@sambhidigital.com</p>
                                <p>Phone: +91 9506733369</p>
                                <p>India</p>

                            </div>

                        </div>

                        {/* Footer Bottom */}
                        <div className="footer-bottom">

                            <p>
                                © 2026 Sambhi Digital Technology.
                                All Rights Reserved.
                            </p>

                        </div>

                    </div>

                </footer>

        );
    }
}

export default Footer;
