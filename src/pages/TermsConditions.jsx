import React from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

class TermsConditions extends React.Component {

    render() {

        return (

            <div className="terms-page">

                <Navbar />

                <section className="terms-section">

                    <div className="container">

                        <h1>Terms & Conditions</h1>

                        <p>

                            By accessing Sambhi Digital Technology services,
                            you agree to comply with our terms and conditions.

                        </p>

                        <h2>Service Usage</h2>

                        <p>

                            Our services must not be used
                            for illegal or unauthorized activities.

                        </p>

                        <h2>Intellectual Property</h2>

                        <p>

                            All designs, code,
                            branding, and content remain
                            the property of Sambhi Digital Technology.

                        </p>

                        <h2>Limitation of Liability</h2>

                        <p>

                            We are not responsible for indirect damages
                            resulting from service usage.

                        </p>

                    </div>

                </section>

                <Footer />

            </div>
        );
    }
}

export default TermsConditions;
