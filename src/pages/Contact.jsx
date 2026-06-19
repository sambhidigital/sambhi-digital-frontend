import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Components
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/contact/GoogleMap";
import CalendlyEmbed from "../components/contact/CalendlyEmbed";
import TrustAndFAQ from "../components/contact/TrustAndFAQ";

// Common Components
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";

// Contact Component
import ContactCTA from "../components/home/ContactCTA";

//CSS
import "../styles/Contact.css";

// SEO
import SEO from "../components/common/SEO";

class Contact extends React.Component {

    render() {

        return (

            <div className="contact-page">

                {/* SEO */}
                <SEO

                    title="Contact Us"

                    description="
                        Contact SamBhi Digital Technology for AI Solutions,
                        Cloud Infrastructure,
                        Enterprise Networking,
                        Cyber Security,
                        Website Development,
                        IT Consultancy,
                        and Digital Transformation Services.
                        "

                    keywords="
                        Contact SamBhi Digital,
                        AI Solutions,
                        Cloud Infrastructure,
                        Enterprise Networking,
                        Cyber Security,
                        Website Development,
                        IT Consultancy,
                        Digital Transformation,
                        Technology Consultation,
                        Enterprise IT Services
                        "

                    image="/assets/images/contact/contact-hero.jpg"

                />

                {/* Navbar */}
                <Navbar />

                {/* Hero */}
                <section className="contact-hero-section">

                    <div className="container">

                        <div className="contact-hero-content">

                            <h1>Contact Us</h1>

                            <p>
                                Let's discuss your AI,
                                cloud, networking,
                                and enterprise technology requirements.
                            </p>

                        </div>

                    </div>

                </section>

                {/* Contact Info */}
                <section className="contact-info-section">

                    <div className="container">

                        <SectionTitle
                            title="Get In Touch"
                            subtitle="Connect with our technology experts."
                            center={true}
                        />

                        <div className="contact-info-grid">

                            <GlassCard className="contact-info-card">

                                <i className="pi pi-envelope"></i>

                                <h3>Email</h3>

                                <a href="mailto:info@sambhidigital.com">
                                    info@sambhidigital.com
                                </a>

                            </GlassCard>

                            <GlassCard className="contact-info-card">

                                <i className="pi pi-phone"></i>

                                <h3>Phone</h3>

                                <a href="tel:+919506733369">
                                    +91 9506733369
                                </a>

                            </GlassCard>

                            <GlassCard className="contact-info-card">

                                <i className="pi pi-map-marker"></i>

                                <h3>Location</h3>

                                <p>
                                    India
                                </p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Contact CTA */}
                <section className="contact-cta-section">

                    <div className="container">

                        <GlassCard className="contact-cta-card">

                            <h2>
                                Ready to Transform Your Business?
                            </h2>

                            <p>
                                Discuss your AI, Cloud Infrastructure,
                                Networking, Cyber Security,
                                Website Development, and
                                Enterprise IT requirements with our experts.
                            </p>

                        </GlassCard>

                    </div>

                </section>

                {/* Contact Form */}
                <section
                    id="contact-form"
                    className="contact-form-wrapper"
                >
                    <ContactForm />
                </section>

                {/* Trust & FAQ */}
                <TrustAndFAQ />

                {/* Google Map */}
                <GoogleMap />

                {/* Calendly Booking */}
                <section
                    id="consultation-booking"
                    className="consultation-booking-wrapper"
                >
                    <CalendlyEmbed />
                </section>

                {/* CTA */}
                <ContactCTA />

                {/* Footer */}
                <Footer />

            </div>
        );
    }
}

export default Contact;
