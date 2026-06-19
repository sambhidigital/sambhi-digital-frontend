import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "../styles/CaseStudyDetails.css";

class CaseStudyDetails extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            caseStudy: null,

            loading: true
        };
    }

    componentDidMount() {

        const id =
            window.location.pathname
                .split("/")
                .pop();

        const CASE_STUDIES = {

            1: {

                projectName:
                    "AI Business Dashboard",

                industry:
                    "Enterprise",

                description:
                    "Developed an AI-powered business intelligence dashboard for real-time analytics, KPI monitoring and executive reporting.",

                technologies: [
                    "React",
                    "Spring Boot",
                    "PostgreSQL",
                    "Docker"
                ],

                outcome:
                    "Improved decision-making efficiency and reduced manual reporting effort by 40%.",

                image:
                    "/assets/images/portfolio/dashboard-project.png"
            },

            2: {

                projectName:
                    "Cloud Infrastructure Deployment",

                industry:
                    "Cloud",

                description:
                    "Designed and deployed a secure, scalable cloud infrastructure for enterprise applications using AWS and containerized workloads.",

                technologies: [
                    "AWS",
                    "Docker",
                    "Kubernetes"
                ],

                outcome:
                    "Achieved 99.9% availability, improved deployment speed by 70%, and reduced infrastructure management overhead.",

                image:
                    "/assets/images/portfolio/cloud-project.png"
            }
        };

        this.setState({

            caseStudy:
                CASE_STUDIES[id],

            loading: false
        });
    }

    render() {

        const {
            caseStudy,
            loading
        } = this.state;

        if (loading) {

            return (
                <h2>
                    Loading...
                </h2>
            );
        }

        if (!caseStudy) {

            return (
                <h2>
                    Case Study Not Found
                </h2>
            );
        }

        return (

            <>

                <Navbar />

                <div
                    className="case-study-details-page"
                >

                    <div className="container">

                        <Link
                            to="/solutions"
                            className="back-case-study-btn"
                        >

                            <i className="pi pi-arrow-left"></i>

                            <span>
                                Back To Solutions
                            </span>

                        </Link>

                        <div
                            className="case-study-details-header"
                        >

                            <span
                                className="case-study-industry"
                            >
                                {
                                    caseStudy.industry
                                }
                            </span>

                            <h1>
                                {
                                    caseStudy.projectName
                                }
                            </h1>

                            <p>
                                Real-world enterprise
                                technology implementation
                                delivering measurable
                                business value.
                            </p>

                        </div>

                        <img
                            src={
                                caseStudy.image
                            }
                            alt={
                                caseStudy.projectName
                            }
                            className="case-study-details-image"
                        />

                        <div
                            className="case-study-info-grid"
                        >

                            <div
                                className="case-study-info-card"
                            >

                                <h3>
                                    Industry
                                </h3>

                                <p>
                                    {
                                        caseStudy.industry
                                    }
                                </p>

                            </div>

                            <div
                                className="case-study-info-card"
                            >

                                <h3>
                                    Outcome
                                </h3>

                                <p>
                                    {
                                        caseStudy.outcome
                                    }
                                </p>

                            </div>

                        </div>

                        <div
                            className="case-study-content-card"
                        >

                            <h2>
                                Project Overview
                            </h2>

                            <p>
                                {
                                    caseStudy.description
                                }
                            </p>

                        </div>

                        <div
                            className="case-study-content-card"
                        >

                            <h2>
                                Technologies Used
                            </h2>

                            <div
                                className="tech-stack"
                            >

                                {
                                    caseStudy.technologies
                                        .map(
                                            (
                                                tech,
                                                index
                                            ) => (

                                                <span
                                                    key={index}
                                                    className="tech-tag"
                                                >
                                                    {tech}
                                                </span>

                                            )
                                        )
                                }

                            </div>

                        </div>

                    </div>

                </div>

                <Footer />

            </>
        );
    }
}

export default CaseStudyDetails;
