import React from "react";

class GoogleMap extends React.Component {

    render() {

        return (

            <section className="google-map-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Our Location</h2>

                        <p>
                            Visit our office for consultation
                            and enterprise technology discussions.
                        </p>

                    </div>

                    <div className="google-map-wrapper glass-card">

                        <iframe
                            title="Google Map"
                            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.9870724147155!2d84.30568780938285!3d25.845740949430024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992898a0d5105dd%3A0x6d026b2d6629b76b!2sSahatwar%2C%20Uttar%20Pradesh%20277211!5e1!3m2!1sen!2sin!4v1780555770179!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{
                                border: 0,
                                borderRadius: "20px"
                            }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                    </div>

                </div>

            </section>
        );
    }
}

export default GoogleMap;
