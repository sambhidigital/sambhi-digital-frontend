import React from "react";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class ServiceHero extends React.Component {

    render() {

        const {
            title,
            subtitle,
            image
        } = this.props;

        return (

            <section className="service-hero-section">

                <div className="service-hero-overlay"></div>

                <div className="container service-hero-container">

                    {/* Left Content */}
                    <motion.div
                        className="service-hero-content"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <h1>{title}</h1>

                        <p>{subtitle}</p>

                        <div className="service-hero-buttons">

                            <Link
                                to="/contact#consultation-booking"
                                className="service-btn-link"
                            >

                                <Button
                                    label="Get Consultation"
                                    icon="pi pi-calendar"
                                    className="p-button-info p-button-rounded"
                                />

                            </Link>

                            <Link
                                to="/contact#contact-form"
                                className="service-btn-link"
                            >

                                <Button
                                    label="Contact Us"
                                    icon="pi pi-phone"
                                    className="p-button-outlined p-button-rounded"
                                />

                            </Link>

                        </div>

                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="service-hero-image"
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <img
                            src={image}
                            alt={title}
                        />

                    </motion.div>

                </div>

            </section>
        );
    }
}

export default ServiceHero;
