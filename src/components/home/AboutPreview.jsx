import React from "react";

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

import "../../styles/AboutPreview.css";

class AboutPreview extends React.Component {

    render() {

        return (

            <section className="about-preview-section">

                <div className="container about-preview-container">

                    {/* Left Image */}

                    <div className="about-left">

                        <img
                            src="/assets/images/about/about-preview.png"
                            alt="About"
                        />

                    </div>

                    {/* Right Content */}

                    <div className="about-right">

                        <h2>
                            Smart IT Solutions for Modern Businesses
                        </h2>

                        <p>
                            Sambhi Digital Technology delivers
                            AI-powered enterprise solutions,
                            networking infrastructure,
                            cloud systems, and digital innovation.
                        </p>

                        <Link
                            to="/about"
                        >

                            <Button

                                label="Learn More"

                                icon="pi pi-arrow-right"

                                className="p-button-rounded p-button-info about-btn"

                            />

                        </Link>

                        <div className="stats-grid">

                            <Card className="stat-card">

                                <h3>24/7</h3>

                                <p>Support</p>

                            </Card>

                            <Card className="stat-card">

                                <h3>100%</h3>

                                <p>Secure Systems</p>

                            </Card>

                            <Card className="stat-card">

                                <h3>AI</h3>

                                <p>Driven Solutions</p>

                            </Card>

                        </div>

                    </div>

                </div>

            </section>
        );
    }
}

export default AboutPreview;
