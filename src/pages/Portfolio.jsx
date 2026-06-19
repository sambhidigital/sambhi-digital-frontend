// src/pages/Portfolio.jsx

import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Common Components
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";

// Portfolio Components
import PortfolioCard from "../components/portfolio/PortfolioCard";
import ProjectGallery from "../components/portfolio/ProjectGallery";
import TechnologyStack from "../components/portfolio/TechnologyStack";

// CTA
import ContactCTA from "../components/home/ContactCTA";

import {
    getPortfolioProjects
} from "../services/portfolioService";
// CSS
import "../styles/Portfolio.css";

// SEO
import SEO from "../components/common/SEO";

class Portfolio extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            projects: [],

            loading: true,

            error: null
        };
    }

    componentDidMount() {

        this.loadProjects();
    }

    loadProjects = async () => {

        try {

            const response =
                await getPortfolioProjects();

            console.log(
                "Portfolio Response:",
                response
            );

            this.setState({

                projects:
                    response.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Unable to load projects"
            });
        }
    };

    render() {

        const {

            projects,

            loading,

            error

        } = this.state;

        if (loading) {

            return (

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center"
                    }}
                >

                    <h2>
                        Loading Portfolio...
                    </h2>

                </div>
            );
        }

        if (error) {

            return (

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center"
                    }}
                >

                    <h2>
                        {error}
                    </h2>

                </div>
            );
        }

        // Gallery Projects
        const galleryProjects = [
            {
                title: "AI Dashboard",
                image:
                    "/assets/images/portfolio/dashboard-project.png"
            },
            {
                title: "Networking Setup",
                image:
                    "/assets/images/portfolio/networking-project.png"
            },
            {
                title: "Cloud Deployment",
                image:
                    "/assets/images/portfolio/cloud-project.png"
            },
            {
                title: "Automation System",
                image:
                    "/assets/images/portfolio/automation-project.png"
            }
        ];

        // Technologies
        const technologies = [
            {
                name: "React.js",
                icon:
                    "/assets/images/technologies/react.png",
                description:
                    "Modern frontend development framework."
            },
            {
                name: "Spring Boot",
                icon:
                    "/assets/images/technologies/springboot.png",
                description:
                    "Enterprise-grade Java backend framework."
            },
            {
                name: "PostgreSQL",
                icon:
                    "/assets/images/technologies/postgresql.png",
                description:
                    "Reliable scalable relational database."
            },
            {
                name: "AWS Cloud",
                icon:
                    "/assets/images/technologies/aws.png",
                description:
                    "Enterprise cloud infrastructure deployment."
            },
            {
                name: "Docker",
                icon:
                    "/assets/images/technologies/docker.png",
                description:
                    "Containerized deployment architecture."
            },
            {
                name: "Artificial Intelligence",
                icon:
                    "/assets/images/technologies/ai.png",
                description:
                    "AI-driven automation and enterprise systems."
            }
        ];

        return (

            <div className="portfolio-page">

                {/* SEO */}
                <SEO

                    title="Portfolio"

                    description="
                        Explore SamBhi Digital Technology's portfolio of
                        AI Analytics Dashboards,
                        Cloud Infrastructure Deployments,
                        Enterprise Networking Solutions,
                        Business Automation Platforms,
                        and Digital Transformation Projects.
                        "

                    keywords="
                        Portfolio,
                        AI Projects,
                        Cloud Projects,
                        Enterprise Networking,
                        Business Automation,
                        Digital Transformation,
                        React Projects,
                        Spring Boot Projects,
                        Enterprise Solutions,
                        Technology Portfolio
                        "

                    image="/assets/images/portfolio/dashboard-project.png"

                />

                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <section className="portfolio-hero-section">

                    <div className="portfolio-overlay"></div>

                    <div className="container portfolio-hero-container">

                        <div className="portfolio-hero-content">

                            <h1>
                                Our Portfolio & Projects
                            </h1>

                            <p>

                                Explore our enterprise AI systems,
                                cloud infrastructure,
                                networking architecture,
                                and intelligent digital transformation projects.

                            </p>

                        </div>

                    </div>

                </section>

                {/* Portfolio Overview */}
                <section className="portfolio-overview-section">

                    <div className="container">

                        <SectionTitle
                            title="Featured Projects"
                            subtitle="
                            Enterprise-grade technology implementations.
                            "
                            center={true}
                        />

                        <div className="portfolio-grid">

                            {
                                projects.map((project, index) => (

                                    <PortfolioCard

                                        key={project.id}

                                        id={project.id}

                                        title={project.title}

                                        category={project.category}

                                        description={
                                            project.description
                                        }

                                        image={
                                            project.imageUrl
                                        }
                                    />

                                ))
                            }

                        </div>

                    </div>

                </section>

                {/* Project Statistics */}
                <section className="portfolio-statistics-section">

                    <div className="container">

                        <div className="portfolio-stats-grid">

                            <GlassCard className="portfolio-stat-card">

                                <h2>50+</h2>

                                <p>Enterprise Projects</p>

                            </GlassCard>

                            <GlassCard className="portfolio-stat-card">

                                <h2>AI</h2>

                                <p>Automation Systems</p>

                            </GlassCard>

                            <GlassCard className="portfolio-stat-card">

                                <h2>24/7</h2>

                                <p>Infrastructure Support</p>

                            </GlassCard>

                            <GlassCard className="portfolio-stat-card">

                                <h2>100%</h2>

                                <p>Secure Deployments</p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Project Gallery */}
                <ProjectGallery
                    projects={galleryProjects}
                />

                {/* Industry Expertise */}
                <section className="industry-expertise-section">

                    <div className="container">

                        <SectionTitle
                            title="Industry Expertise"
                            subtitle="
                            Digital transformation across multiple industries.
                            "
                            center={true}
                        />

                        <div className="industry-expertise-grid">

                            <GlassCard className="industry-expertise-card">

                                <i className="pi pi-building"></i>

                                <h3>MSMEs</h3>

                                <p>
                                    Scalable AI and enterprise solutions
                                    for growing businesses.
                                </p>

                            </GlassCard>

                            <GlassCard className="industry-expertise-card">

                                <i className="pi pi-heart"></i>

                                <h3>Healthcare</h3>

                                <p>
                                    Secure healthcare IT infrastructure
                                    and automation systems.
                                </p>

                            </GlassCard>

                            <GlassCard className="industry-expertise-card">

                                <i className="pi pi-book"></i>

                                <h3>Education</h3>

                                <p>
                                    Smart digital learning
                                    and cloud-based education systems.
                                </p>

                            </GlassCard>

                            <GlassCard className="industry-expertise-card">

                                <i className="pi pi-globe"></i>

                                <h3>Enterprise</h3>

                                <p>
                                    Enterprise networking,
                                    cloud systems,
                                    and AI transformation.
                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Technology Stack */}
                <TechnologyStack
                    technologies={technologies}
                />

                {/* Client Success */}
                <section className="client-success-section">

                    <div className="container">

                        <SectionTitle
                            title="Client Success"
                            subtitle="
                            Delivering innovation and enterprise transformation.
                            "
                            center={true}
                        />

                        <div className="client-success-grid">

                            <GlassCard className="client-success-card">

                                <i className="pi pi-chart-line"></i>

                                <h3>Operational Efficiency</h3>

                                <p>
                                    Improved workflow automation
                                    and enterprise productivity.
                                </p>

                            </GlassCard>

                            <GlassCard className="client-success-card">

                                <i className="pi pi-cloud"></i>

                                <h3>Cloud Modernization</h3>

                                <p>
                                    Secure scalable cloud-native infrastructure.
                                </p>

                            </GlassCard>

                            <GlassCard className="client-success-card">

                                <i className="pi pi-shield"></i>

                                <h3>Enterprise Security</h3>

                                <p>
                                    Advanced security-first deployment systems.
                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* CTA */}
                <ContactCTA />

                {/* Footer */}
                <Footer />

            </div>
        );
    }
}

export default Portfolio;
