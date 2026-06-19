import React from "react";

import { Button } from "primereact/button";

import "../../styles/ContactCTA.css";

class ContactCTA extends React.Component {

    handleCall = () => {

        window.location.href =
            "tel:+919506733369";
    };

    handleWhatsApp = () => {

        window.open(
            "https://wa.me/919506733369",
            "_blank"
        );
    };

    render() {

        return (

            <section className="contact-cta-section">

                <div className="container">

                    <div className="contact-cta-box">

                        <div className="cta-glow"></div>

                        <h2>
                            Let's Build Your Digital Future
                        </h2>

                        <p>
                            Contact us today for AI solutions,
                            networking infrastructure,
                            and enterprise IT transformation.
                        </p>

                        <div className="cta-buttons">

                            <Button
                                label="Call Now"
                                icon="pi pi-phone"
                                className="p-button-rounded contact-btn"
                                onClick={this.handleCall}
                            />

                            <Button
                                label="WhatsApp"
                                icon="pi pi-whatsapp"
                                className="p-button-rounded whatsapp-btn"
                                onClick={this.handleWhatsApp}
                            />

                        </div>

                    </div>

                </div>

            </section>
        );
    }
}

export default ContactCTA;
