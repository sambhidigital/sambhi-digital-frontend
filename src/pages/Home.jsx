// src/pages/Home.jsx

import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// SEO
import SEO from "../components/common/SEO";

// Home Sections
import HeroSection from "../components/home/HeroSection";
import Technologies from "../components/home/Technologies";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import IndustrySolutions from "../components/home/IndustrySolutions";
import PortfolioHighlights from "../components/home/PortfolioHighlights";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";
import NewsletterSection from "../components/common/NewsletterSection";
import FAQSection from "../components/home/FAQSection";

class Home extends React.Component {

    render() {

        return (

            <div className="home-page">

                {/* SEO */}
                <SEO

                    title="Home"

                    description="
                    SamBhi Digital Technology provides AI Solutions,
                    Cloud Infrastructure,
                    Networking,
                    Cyber Security,
                    Website Development,
                    and Enterprise IT Services.
                    "

                    keywords="
                    AI Solutions,
                    Artificial Intelligence,
                    Cloud Computing,
                    Networking,
                    Cyber Security,
                    Website Development,
                    Enterprise IT,
                    Digital Transformation
                    "

                    image="/assets/logos/logo-light.png"

                />

                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <HeroSection />

                {/* Technologies */}
                <Technologies />

                {/* Services Preview */}
                <ServicesPreview />

                {/* About Preview */}
                <AboutPreview />

                {/* Why Choose Us */}
                <WhyChooseUs />

                {/* Industry Solutions */}
                <IndustrySolutions />

                {/* Portfolio Highlights */}
                <PortfolioHighlights />

                {/* Testimonials */}
                <Testimonials />

                {/* FAQ */}
                <FAQSection />

                {/* NewsLetterSection */}
                <NewsletterSection />

                {/* Contact CTA */}
                <ContactCTA />

                {/* Footer */}
                <Footer />

            </div>
        );
    }
}

export default Home;
