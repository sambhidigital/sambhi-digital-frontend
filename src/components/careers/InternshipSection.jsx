import React from "react";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class InternshipSection extends React.Component {

    render() {

        return (

            <section className="internship-section">

                <div className="container">

                    <motion.div
                        className="internship-wrapper glass-card"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        {/* Left Content */}
                        <div className="internship-content">

                            <h2>
                                Internship & Learning Programs
                            </h2>

                            <p>
                                Gain real-world experience in
                                AI, Cloud Computing, Networking,
                                Full Stack Development, and
                                Enterprise Infrastructure Solutions.
                            </p>

                            <ul className="internship-features">

                                <li>
                                    <i className="pi pi-check-circle"></i>
                                    Industry Mentorship
                                </li>

                                <li>
                                    <i className="pi pi-check-circle"></i>
                                    Live Projects
                                </li>

                                <li>
                                    <i className="pi pi-check-circle"></i>
                                    AI & Cloud Exposure
                                </li>

                                <li>
                                    <i className="pi pi-check-circle"></i>
                                    Career Guidance
                                </li>

                            </ul>

                            <Link
                                to="/careers/apply/internship"
                            >


                                <Button
                                    label="Apply for Internship"
                                    icon="pi pi-send"
                                    className="p-button-rounded p-button-info"
                                />

                            </Link>

                        </div>

                        {/* Right Illustration */}
                        <div className="internship-image">

                            <img
                                src="/assets/images/careers/internship-program.png"
                                alt="Internship Program"
                            />

                        </div>

                    </motion.div>

                </div>

            </section>
        );
    }
}

export default InternshipSection;
