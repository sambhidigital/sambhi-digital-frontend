import React from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { Link } from "react-router-dom";

class NotFound extends React.Component {

    render() {

        return (

            <div className="not-found-page">

                <Navbar />

                <section className="not-found-section">

                    <div className="container">

                        <div className="not-found-content">

                            <h1>404</h1>

                            <h2>Page Not Found</h2>

                            <p>

                                The page you are looking for
                                does not exist or has been moved.

                            </p>

                            <Link
                                to="/"
                                className="back-home-btn"
                            >
                                Back To Home
                            </Link>

                        </div>

                    </div>

                </section>

                <Footer />

            </div>
        );
    }
}

export default NotFound;
