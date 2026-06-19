// src/pages/Solutions.jsx

import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Common Components
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";

// Solution Components
import SolutionCard from "../components/solutions/SolutionCard";
import IndustryCard from "../components/solutions/IndustryCard";
import CaseStudyCard from "../components/solutions/CaseStudyCard";

// CTA
import ContactCTA from "../components/home/ContactCTA";
import "../styles/Solutions.css";
import solutionService from "../services/solutionService";

// SEO
import SEO from "../components/common/SEO";

class Solutions extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            solutions: [],

            loading: true,

            error: null
        };
    }

    async componentDidMount() {

        try {

            const response =
                await solutionService
                    .getAllSolutions();

            this.setState({

                solutions:
                    response.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Unable to load solutions."
            });
        }
    }

    render() {

        if (this.state.loading) {

            return (

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center"
                    }}
                >

                    <h3>
                        Loading Solutions...
                    </h3>

                </div>
            );
        }

        if (this.state.error) {

            return (

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center"
                    }}
                >

                    <h3>
                        {this.state.error}
                    </h3>

                </div>
            );
        }


        // Industries
        const industries = [
            {
                title: "MSME Solutions",
                image: "/assets/images/industries/msme.png",
                description:
                    "Affordable AI and IT solutions tailored for MSMEs."
            },
            {
                title: "Healthcare Technology",
                image: "/assets/images/industries/healthcare.png",
                description:
                    "Secure healthcare IT systems and digital infrastructure."
            },
            {
                title: "Education Solutions",
                image: "/assets/images/industries/education.png",
                description:
                    "Modern e-learning and educational technology platforms."
            },
            {
                title: "Government Infrastructure",
                image: "/assets/images/industries/government.png",
                description:
                    "Reliable digital infrastructure and automation systems."
            }
        ];

        const caseStudies = [
            {
                id: 1,
                projectName: "AI Business Dashboard",
                industry: "Enterprise",
                description:
                    "Developed an AI-powered business intelligence dashboard for real-time analytics, KPI monitoring, and executive reporting.",
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
            {
                id: 2,
                projectName: "Cloud Infrastructure Deployment",
                industry: "Cloud",
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
        ];

        return (

            <div className="solutions-page">

                {/* SEO */}
                <SEO

                    title="Industry Solutions"

                    description="
                        SamBhi Digital Technology delivers AI Automation,
                        Cloud Infrastructure,
                        Enterprise Networking,
                        Cyber Security,
                        Digital Transformation,
                        and Industry-Specific Technology Solutions
                        for MSMEs, Healthcare, Education, Government,
                        and Enterprise Organizations.
                        "

                    keywords="
                        Industry Solutions,
                        AI Automation,
                        Cloud Infrastructure,
                        Enterprise Networking,
                        Cyber Security,
                        Digital Transformation,
                        MSME Solutions,
                        Healthcare Technology,
                        Education Technology,
                        Government IT Solutions,
                        Enterprise IT
                        "

                    image="/assets/images/industries/msme.png"

                />

                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <section className="solutions-hero-section">

                    <div className="solutions-overlay"></div>

                    <div className="container solutions-hero-container">

                        <div className="solutions-hero-content">

                            <h1>
                                Intelligent Industry Solutions
                            </h1>

                            <p>

                                AI-powered enterprise systems,
                                networking infrastructure,
                                cloud architecture,
                                and digital transformation solutions
                                for modern industries.

                            </p>

                        </div>

                    </div>

                </section>

                {/* Solutions Overview */}
                <section className="solutions-overview-section">

                    <div className="container">

                        <SectionTitle
                            title="Our Core Solutions"
                            subtitle="
                            Future-ready enterprise technology solutions.
                            "
                            center={true}
                        />

                        <div className="solutions-grid">

                            {
                                this.state.solutions.map(
                                    (solution) => (

                                        <SolutionCard
                                            key={solution.id}
                                            id={solution.id}
                                            title={solution.title}
                                            industry={solution.industry}
                                            description={solution.description}
                                            imageUrl={solution.imageUrl}
                                        />

                                    ))
                            }

                        </div>

                    </div>

                </section>

                {/* Industry Solutions */}
                <section className="industry-solutions-section">

                    <div className="container">

                        <SectionTitle
                            title="Industry-Based Solutions"
                            subtitle="
                            Customized digital transformation
                            for multiple industries.
                            "
                            center={true}
                        />

                        <div className="industry-solutions-grid">

                            {
                                industries.map((industry, index) => (

                                    <IndustryCard
                                        key={index}
                                        title={industry.title}
                                        image={industry.image}
                                        description={industry.description}
                                    />

                                ))
                            }

                        </div>

                    </div>

                </section>

                {/* Why Choose Our Solutions */}
                <section className="why-solutions-section">

                    <div className="container">

                        <SectionTitle
                            title="Why Our Solutions Stand Out"
                            subtitle="
                            Enterprise-ready secure digital systems.
                            "
                            center={true}
                        />

                        <div className="why-solutions-grid">

                            <GlassCard className="why-solution-card">

                                <i className="pi pi-shield"></i>

                                <h3>Secure Architecture</h3>

                                <p>
                                    Security-first enterprise infrastructure
                                    and deployment strategy.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-solution-card">

                                <i className="pi pi-chart-line"></i>

                                <h3>Scalable Systems</h3>

                                <p>
                                    Infrastructure designed
                                    for long-term business growth.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-solution-card">

                                <i className="pi pi-bolt"></i>

                                <h3>AI Automation</h3>

                                <p>
                                    Intelligent AI integration
                                    and workflow automation.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-solution-card">

                                <i className="pi pi-globe"></i>

                                <h3>Cloud Ready</h3>

                                <p>
                                    Modern cloud-native
                                    infrastructure deployment.
                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Case Studies */}
                <section className="case-study-section">

                    <div className="container">

                        <SectionTitle
                            title="Case Studies"
                            subtitle="
                            Real-world enterprise technology implementations.
                            "
                            center={true}
                        />

                        <div className="case-study-grid">

                            {
                                caseStudies.map((study, index) => (

                                    <CaseStudyCard
                                        key={study.id}
                                        id={study.id}
                                        projectName={study.projectName}
                                        industry={study.industry}
                                        description={study.description}
                                        technologies={study.technologies}
                                        outcome={study.outcome}
                                        image={study.image}
                                    />

                                ))
                            }

                        </div>

                    </div>

                </section>

                {/* Technology Stack */}
                <section className="solution-tech-section">

                    <div className="container">

                        <SectionTitle
                            title="Technologies We Use"
                            subtitle="
                            Enterprise-grade modern technologies.
                            "
                            center={true}
                        />

                        <div className="solution-tech-grid">

                            <GlassCard className="tech-card">
                                React.js
                            </GlassCard>

                            <GlassCard className="tech-card">
                                Spring Boot
                            </GlassCard>

                            <GlassCard className="tech-card">
                                PostgreSQL
                            </GlassCard>

                            <GlassCard className="tech-card">
                                AWS Cloud
                            </GlassCard>

                            <GlassCard className="tech-card">
                                Docker
                            </GlassCard>

                            <GlassCard className="tech-card">
                                Kubernetes
                            </GlassCard>

                            <GlassCard className="tech-card">
                                AI / ML
                            </GlassCard>

                            <GlassCard className="tech-card">
                                DevOps
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

export default Solutions;
