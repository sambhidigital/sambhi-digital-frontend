// src/pages/Services.jsx

import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Common Components
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";

// Service Components
import ServiceHero from "../components/services/ServiceHero";
// import ServiceCard from "../components/services/ServiceCard";
import ServiceBenefits from "../components/services/ServiceBenefits";
import ServiceWorkflow from "../components/services/ServiceWorkflow";
import FAQAccordion from "../components/services/FAQAccordion";
import serviceService from "../services/serviceService";
import faqService
    from "../services/faqService";
import ServiceGrid
    from "../components/services/ServiceGrid";

// CTA
import ContactCTA from "../components/home/ContactCTA";
import "../styles/Services.css";

// SEO 
import SEO from "../components/common/SEO";

class Services extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            services: [],

            faqs: [],

            loading: true,

            error: null
        };
    }

    async componentDidMount() {

        try {

            const [
                servicesResponse,
                faqsResponse
            ] = await Promise.all([

                serviceService.getAllServices(),

                faqService.getAllFaqs()
            ]);

            this.setState({

                services:
                    servicesResponse.data.data || [],

                faqs:
                    faqsResponse.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Unable to load services."
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
                        Loading Services...
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

        // Benefits
        const benefits = [
            {
                title: "Scalable Infrastructure",
                description:
                    "Enterprise-ready scalable digital systems."
            },
            {
                title: "Secure Architecture",
                description:
                    "Security-first infrastructure and deployment."
            },
            {
                title: "AI Integration",
                description:
                    "Smart AI-powered business automation."
            },
            {
                title: "24/7 Support",
                description:
                    "Reliable technical support and maintenance."
            }
        ];

        // Workflow
        const workflowSteps = [
            {
                title: "Requirement Analysis",
                description:
                    "Understanding business requirements and objectives."
            },
            {
                title: "Planning & Architecture",
                description:
                    "Designing secure and scalable system architecture."
            },
            {
                title: "Development & Deployment",
                description:
                    "Building and deploying enterprise-grade solutions."
            },
            {
                title: "Support & Optimization",
                description:
                    "Continuous monitoring and performance optimization."
            }
        ];

        return (

            <div className="services-page">

                {/* SEO */}
                <SEO

                    title="Services"

                    description="
    SamBhi Digital Technology provides AI Automation,
    Networking Infrastructure,
    Cloud Solutions,
    Website Development,
    Cyber Security,
    DevOps,
    and Enterprise IT Consultancy Services.
    "

                    keywords="
    AI Automation,
    Networking Infrastructure,
    Cloud Solutions,
    Website Development,
    Cyber Security,
    DevOps,
    Enterprise IT,
    IT Consultancy,
    Digital Transformation,
    AI Services India
    "

                    image="/assets/images/services/service-hero.png"

                />


                {/* Navbar */}
                <Navbar />

                {/* Hero */}
                <ServiceHero
                    title="Enterprise IT & AI Services"
                    subtitle="
                    Intelligent digital infrastructure,
                    AI automation, cloud systems,
                    networking architecture,
                    and secure enterprise solutions.
                    "
                    image="/assets/images/services/service-hero.png"
                />

                {/* Services Overview */}
                <section className="services-overview-section">

                    <div className="container">

                        <SectionTitle
                            title="Our Core Services"
                            subtitle="
                            Advanced technology solutions
                            designed for modern businesses.
                            "
                            center={true}
                        />

                        <ServiceGrid
                            services={
                                this.state.services
                            }
                        />

                    </div>

                </section>

                {/* Service Benefits */}
                <ServiceBenefits
                    benefits={benefits}
                />

                {/* Why Our Services */}
                <section className="why-services-section">

                    <div className="container">

                        <SectionTitle
                            title="Why Businesses Choose Us"
                            subtitle="
                            Innovation-driven enterprise technology services.
                            "
                            center={true}
                        />

                        <div className="why-services-grid">

                            <GlassCard className="why-service-card">

                                <i className="pi pi-shield"></i>

                                <h3>Enterprise Security</h3>

                                <p>
                                    Secure digital infrastructure
                                    with advanced protection systems.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-service-card">

                                <i className="pi pi-cloud"></i>

                                <h3>Cloud Ready</h3>

                                <p>
                                    Modern cloud-native architecture
                                    and scalable deployment.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-service-card">

                                <i className="pi pi-bolt"></i>

                                <h3>AI Powered</h3>

                                <p>
                                    Intelligent automation
                                    and AI-driven transformation.
                                </p>

                            </GlassCard>

                            <GlassCard className="why-service-card">

                                <i className="pi pi-sync"></i>

                                <h3>Continuous Support</h3>

                                <p>
                                    Ongoing optimization
                                    and enterprise support services.
                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Workflow */}
                <ServiceWorkflow
                    workflowSteps={workflowSteps}
                />

                {/* Technology Stack */}
                <section className="services-tech-section">

                    <div className="container">

                        <SectionTitle
                            title="Technologies We Use"
                            subtitle="
                            Modern enterprise-grade technologies.
                            "
                            center={true}
                        />

                        <div className="services-tech-grid">

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

                {/* FAQ */}
                <FAQAccordion
                    faqs={
                        this.state.faqs
                    }
                />

                {/* CTA */}
                <ContactCTA />

                {/* Footer */}
                <Footer />

            </div>
        );
    }
}

export default Services;
