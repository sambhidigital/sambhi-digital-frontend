// src/pages/About.jsx

import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Common Components
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";
import AnimatedText from "../components/common/AnimatedText";
import TeamSection from "../components/about/TeamSection";

// Contact Component
import ContactCTA from "../components/home/ContactCTA";
import "../styles/About.css";

// SEO
import SEO from "../components/common/SEO";

class About extends React.Component {

    render() {

        return (

            <div className="about-page">

                {/* SEO */}
                <SEO

                    title="About Us"

                    description="
    Learn about SamBhi Digital Technology,
    our vision, mission, expertise in AI,
    Cloud Computing, Networking,
    Cyber Security, Enterprise IT,
    and Digital Transformation solutions.
    "

                    keywords="
    About SamBhi Digital,
    AI Company India,
    Cloud Solutions,
    Networking Services,
    Cyber Security,
    Enterprise IT,
    Digital Transformation,
    Technology Company
    "

                    image="/assets/images/about/company-team.jpg"

                />


                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <section className="about-hero-section">

                    <div className="about-overlay"></div>

                    <div className="container about-hero-container">

                        <div className="about-hero-content">

                            <AnimatedText
                                text="About Sambhi Digital Technology"
                                className="about-hero-title"
                            />

                            <p className="about-hero-description">

                                We deliver AI-powered digital infrastructure,
                                enterprise IT solutions, cloud systems,
                                networking architecture, cybersecurity,
                                and intelligent automation for modern businesses.

                            </p>

                        </div>

                    </div>

                </section>

                {/* Company Story */}
                <section className="company-story-section">

                    <div className="container">

                        <div className="about-grid">

                            {/* Left Image */}
                            <div className="about-image">

                                <img
                                    src="/assets/images/about/company-team.jpg"
                                    alt="Company Team"
                                />

                            </div>

                            {/* Right Content */}
                            <div className="about-content">

                                <SectionTitle
                                    title="Our Story"
                                    subtitle="Building Future-Ready Technology Solutions"
                                />

                                <p>

                                    Sambhi Digital Technology was founded with
                                    a vision to empower businesses using
                                    artificial intelligence, enterprise IT,
                                    networking infrastructure, and cloud technologies.

                                </p>

                                <p>

                                    We focus on scalable, secure,
                                    and innovation-driven digital systems
                                    that help organizations modernize
                                    and accelerate growth.

                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* Vision & Mission */}
                <section className="vision-mission-section">

                    <div className="container">

                        <SectionTitle
                            title="Vision & Mission"
                            subtitle="Driven by Innovation and Technology"
                            center={true}
                        />

                        <div className="vision-grid">

                            {/* Vision */}
                            <GlassCard className="vision-card">

                                <div className="vision-icon">
                                    <i className="pi pi-eye"></i>
                                </div>

                                <h3>Our Vision</h3>

                                <p>

                                    To become a trusted leader in AI-driven
                                    enterprise technology and digital transformation.

                                </p>

                            </GlassCard>

                            {/* Mission */}
                            <GlassCard className="vision-card">

                                <div className="vision-icon">
                                    <i className="pi pi-bolt"></i>
                                </div>

                                <h3>Our Mission</h3>

                                <p>

                                    Deliver intelligent, scalable,
                                    and secure digital solutions
                                    for modern businesses and industries.

                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Core Values */}
                <section className="core-values-section">

                    <div className="container">

                        <SectionTitle
                            title="Core Values"
                            subtitle="Principles That Drive Our Innovation"
                            center={true}
                        />

                        <div className="values-grid">

                            <GlassCard className="value-card">

                                <i className="pi pi-shield"></i>

                                <h3>Security</h3>

                                <p>
                                    Enterprise-grade secure infrastructure.
                                </p>

                            </GlassCard>

                            <GlassCard className="value-card">

                                <i className="pi pi-star"></i>

                                <h3>Innovation</h3>

                                <p>
                                    Future-ready AI and automation systems.
                                </p>

                            </GlassCard>

                            <GlassCard className="value-card">

                                <i className="pi pi-globe"></i>

                                <h3>Scalability</h3>

                                <p>
                                    Solutions designed for business growth.
                                </p>

                            </GlassCard>

                            <GlassCard className="value-card">

                                <i className="pi pi-users"></i>

                                <h3>Collaboration</h3>

                                <p>
                                    Strong partnerships and customer success.
                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Technology Expertise */}
                <section className="technology-expertise-section">

                    <div className="container">

                        <SectionTitle
                            title="Technology Expertise"
                            subtitle="Modern Technologies We Work With"
                            center={true}
                        />

                        <div className="expertise-grid">

                            <GlassCard className="expertise-card">
                                React.js
                            </GlassCard>

                            <GlassCard className="expertise-card">
                                Spring Boot
                            </GlassCard>

                            <GlassCard className="expertise-card">
                                PostgreSQL
                            </GlassCard>

                            <GlassCard className="expertise-card">
                                AWS Cloud
                            </GlassCard>

                            <GlassCard className="expertise-card">
                                Docker
                            </GlassCard>

                            <GlassCard className="expertise-card">
                                AI / ML
                            </GlassCard>

                            <GlassCard className="expertise-card">
                                Networking
                            </GlassCard>

                            <GlassCard className="expertise-card">
                                Cyber Security
                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Statistics */}
                <section className="statistics-section">

                    <div className="container">

                        <SectionTitle
                            title="Support Services"
                            subtitle="We serve service like a digital way"
                            center={true}
                        />

                        <div className="statistics-grid">

                            <GlassCard className="stat-card">

                                <h2>24/7</h2>

                                <p>Technical Support</p>

                            </GlassCard>

                            <GlassCard className="stat-card">

                                <h2>100%</h2>

                                <p>Secure Infrastructure</p>

                            </GlassCard>

                            <GlassCard className="stat-card">

                                <h2>AI</h2>

                                <p>Driven Solutions</p>

                            </GlassCard>

                            <GlassCard className="stat-card">

                                <h2>Cloud</h2>

                                <p>Enterprise Deployment</p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Team Section */}

                <TeamSection />

                {/* CTA */}
                <ContactCTA />

                {/* Footer */}
                <Footer />

            </div>
        );
    }
}

export default About;
