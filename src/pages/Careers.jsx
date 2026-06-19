// src/pages/Careers.jsx

import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Common Components
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";

// Career Components
import JobCard from "../components/careers/JobCard";
import CareerForm from "../components/careers/CareerForm";
import InternshipSection from "../components/careers/InternshipSection";

// CTA
import ContactCTA from "../components/home/ContactCTA";

// CSS
import "../styles/Careers.css";

// SEO
import SEO from "../components/common/SEO";

import {
    getAllJobs
}
    from "../services/careerService";

class Careers extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            jobs: [],

            loading: true,

            error: null
        };
    }

    componentDidMount() {

        this.loadJobs();
    }

    loadJobs = async () => {

        try {

            const response =
                await getAllJobs();

            console.log(
                "Jobs Response:",
                response
            );

            this.setState({

                jobs:
                    response.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Failed to load jobs"
            });
        }
    };

    render() {

        const {

            jobs,

            loading,

            error

        } = this.state;

        if (loading) {

            return (

                <>

                    <Navbar />

                    <div
                        className="loading-page"
                    >

                        <h2>

                            Loading Jobs...

                        </h2>

                    </div>

                    <Footer />

                </>

            );

        }

        return (

            <div className="careers-page">

                {/* Error Message */}
                {
                    error && (

                        <div
                            className="error-message"
                        >

                            {error}

                        </div>

                    )
                }


                {/* SEO */}
                <SEO

                    title="Careers"

                    description="
                        Join SamBhi Digital Technology and build your career in
                        Artificial Intelligence,
                        Cloud Computing,
                        Spring Boot Development,
                        React Development,
                        Enterprise Networking,
                        Cyber Security,
                        DevOps,
                        and Digital Transformation.
                        "

                    keywords="
                        Careers,
                        IT Jobs,
                        AI Engineer Jobs,
                        React Developer Jobs,
                        Spring Boot Developer Jobs,
                        Cloud Engineer Jobs,
                        Networking Engineer Jobs,
                        Technology Careers,
                        Internship Opportunities,
                        SamBhi Digital Careers
                        "

                    image="/assets/images/careers/careers-hero.jpg"

                />

                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <section className="careers-hero-section">

                    <div className="careers-overlay"></div>

                    <div className="container careers-hero-container">

                        <div className="careers-hero-content">

                            <h1>
                                Build Your Career With Us
                            </h1>

                            <p>

                                Join our team of AI innovators,
                                cloud engineers,
                                networking specialists,
                                and enterprise technology experts.

                            </p>

                        </div>

                    </div>

                </section>

                {/* Why Join Us */}
                <section className="why-join-section">

                    <div className="container">

                        <SectionTitle
                            title="Why Join Sambhi Digital"
                            subtitle="
                            Learn, innovate, and grow with future-ready technologies.
                            "
                            center={true}
                        />

                        <div className="why-join-grid">

                            <GlassCard className="why-join-card">

                                <i className="pi pi-bolt"></i>

                                <h3>AI Innovation</h3>

                                <p>
                                    Work on intelligent AI-powered
                                    enterprise solutions.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-join-card">

                                <i className="pi pi-cloud"></i>

                                <h3>Cloud Technologies</h3>

                                <p>
                                    Gain experience with cloud-native
                                    infrastructure and deployment.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-join-card">

                                <i className="pi pi-users"></i>

                                <h3>Collaborative Culture</h3>

                                <p>
                                    Work with innovative teams
                                    and modern enterprise workflows.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-join-card">

                                <i className="pi pi-chart-line"></i>

                                <h3>Career Growth</h3>

                                <p>
                                    Continuous learning
                                    and professional development opportunities.
                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Job Openings */}
                <section className="job-openings-section">

                    <div className="container">

                        <SectionTitle
                            title="Current Openings"
                            subtitle="
                            Explore exciting technology career opportunities.
                            "
                            center={true}
                        />

                        <h3>
                            Total Jobs: {jobs.length}
                        </h3>

                        <div className="jobs-grid">

                            {
                                jobs.map((job) => (

                                    <JobCard
                                        key={job.id}
                                        id={job.id}
                                        title={job.title}
                                        location={job.location}
                                        type={job.jobType}
                                        experience={job.experience}
                                        description={job.description}
                                    />

                                ))
                            }

                        </div>

                    </div>

                </section>

                {/* Internship Section */}
                <InternshipSection />

                {/* Hiring Process */}
                <section className="hiring-process-section">

                    <div className="container">

                        <SectionTitle
                            title="Our Hiring Process"
                            subtitle="
                            Transparent and structured recruitment workflow.
                            "
                            center={true}
                        />

                        <div className="hiring-process-grid">

                            <GlassCard className="hiring-step-card">

                                <div className="step-number">
                                    1
                                </div>

                                <h3>Application Review</h3>

                                <p>
                                    Resume and profile evaluation.
                                </p>

                            </GlassCard>

                            <GlassCard className="hiring-step-card">

                                <div className="step-number">
                                    2
                                </div>

                                <h3>Technical Assessment</h3>

                                <p>
                                    Skill evaluation and technical interview.
                                </p>

                            </GlassCard>

                            <GlassCard className="hiring-step-card">

                                <div className="step-number">
                                    3
                                </div>

                                <h3>Final Discussion</h3>

                                <p>
                                    HR and project discussion process.
                                </p>

                            </GlassCard>

                            <GlassCard className="hiring-step-card">

                                <div className="step-number">
                                    4
                                </div>

                                <h3>Offer & Onboarding</h3>

                                <p>
                                    Welcome to the Sambhi Digital team.
                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Career Form */}
                <CareerForm />

                {/* CTA */}
                <ContactCTA />

                {/* Footer */}
                <Footer />

            </div>
        );
    }
}

export default Careers;
