import React from "react";

import { Button } from "primereact/button";

import { motion } from "framer-motion";

import { withRouter } from "../common/withRouter";

import "../../styles/HeroSection.css";

class HeroSection extends React.Component {

    handleGetStarted = () => {

        this.props.navigate(
            "/services"
        );
    };

    handleBookConsultation = () => {

        this.props.navigate(
            "/contact"
        );
    };

    render() {

        return (

            <section className="hero-section">

                <div className="hero-overlay"></div>

                <div className="container hero-container">

                    {/* Left Content */}

                    <motion.div

                        className="hero-content"

                        initial={{
                            opacity: 0,
                            x: -80
                        }}

                        animate={{
                            opacity: 1,
                            x: 0
                        }}

                        transition={{
                            duration: 1
                        }}
                    >

                        <h1 className="hero-title">

                            Transforming Businesses with

                            <span>
                                {" "}
                                AI & Digital Infrastructure
                            </span>

                        </h1>

                        <p className="hero-description">

                            AI Automation,

                            Networking Infrastructure,

                            Cloud Solutions,

                            Enterprise IT Services,

                            and Smart Technology Systems.

                        </p>

                        <div className="hero-buttons">

                            <Button

                                label="Get Started"

                                icon="pi pi-arrow-right"

                                className="p-button-rounded p-button-info"

                                onClick={
                                    this.handleGetStarted
                                }
                            />

                            <Button

                                label="Book Consultation"

                                icon="pi pi-calendar"

                                className="p-button-outlined p-button-rounded"

                                onClick={
                                    this.handleBookConsultation
                                }
                            />

                        </div>

                    </motion.div>

                    {/* Right Visual */}

                    <motion.div

                        className="hero-image"

                        initial={{
                            opacity: 0,
                            x: 80
                        }}

                        animate={{
                            opacity: 1,
                            x: 0
                        }}

                        transition={{
                            duration: 1
                        }}
                    >

                        <img
                            src="/assets/images/hero/ai-hero.png"
                            alt="AI Powered Digital Transformation"
                            className="hero-main-image"
                        />

                    </motion.div>

                </div>

            </section>
        );
    }
}

export default withRouter(
    HeroSection
);