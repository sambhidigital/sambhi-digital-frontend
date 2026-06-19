import React from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

class PrivacyPolicy extends React.Component {

    render() {

        return (

            <div className="privacy-policy-page">

                <Navbar />

                <section className="policy-section">

                    <div className="container">

                        <h1>Privacy Policy</h1>

                        <p>

                            Sambhi Digital Technology respects
                            your privacy and protects your personal information.

                        </p>

                        <h2>Information Collection</h2>

                        <p>

                            We may collect personal details such as
                            name, email, phone number,
                            and project requirements.

                        </p>

                        <h2>Data Usage</h2>

                        <p>

                            Your information is used only
                            for communication,
                            service delivery,
                            and support purposes.

                        </p>

                        <h2>Security</h2>

                        <p>

                            We implement secure systems
                            to protect customer data and infrastructure.

                        </p>

                    </div>

                </section>

                <Footer />

            </div>
        );
    }
}

export default PrivacyPolicy;
