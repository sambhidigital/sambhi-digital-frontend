import React from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { Button } from "primereact/button";

class ThankYou extends React.Component {

    render() {

        return (

            <div className="thank-you-page">

                <Navbar />

                <section className="thank-you-section">

                    <div className="container">

                        <div className="thank-you-card">

                            <i className="pi pi-check-circle"></i>

                            <h1>Thank You!</h1>

                            <p>

                                Your request has been submitted successfully.
                                Our team will contact you shortly.

                            </p>

                            <Button
                                label="Back To Home"
                                icon="pi pi-home"
                                className="p-button-rounded p-button-info"
                            />

                        </div>

                    </div>

                </section>

                <Footer />

            </div>
        );
    }
}

export default ThankYou;
