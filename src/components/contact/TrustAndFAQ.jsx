import React from "react";

import { Accordion }
    from "primereact/accordion";

import { AccordionTab }
    from "primereact/accordion";

class TrustAndFAQ extends React.Component {

    render() {

        return (

            <section
                className="trust-faq-section"
            >

                <div className="container">

                    {/* Trust Section */}

                    <div
                        className="trust-section"
                    >

                        <div
                            className="section-header"
                        >

                            <h2>
                                Why Businesses Trust SamBHi Digital Technology
                            </h2>

                            <p>
                                Delivering reliable AI,
                                Cloud, Networking,
                                Cyber Security,
                                and Digital Transformation
                                solutions.
                            </p>

                        </div>

                        <div
                            className="trust-grid"
                        >

                            <div className="trust-item glass-card">
                                ✓ Transparent Pricing
                            </div>

                            <div className="trust-item glass-card">
                                ✓ Enterprise-Grade Security
                            </div>

                            <div className="trust-item glass-card">
                                ✓ NDA & Confidentiality Support
                            </div>

                            <div className="trust-item glass-card">
                                ✓ AI & Cloud Expertise
                            </div>

                            <div className="trust-item glass-card">
                                ✓ Agile Project Delivery
                            </div>

                            <div className="trust-item glass-card">
                                ✓ Dedicated Technical Support
                            </div>

                            <div className="trust-item glass-card">
                                ✓ Scalable Solutions
                            </div>

                            <div className="trust-item glass-card">
                                ✓ Long-Term Technology Partnership
                            </div>

                        </div>

                    </div>

                    {/* FAQ */}

                    <div
                        className="faq-section"
                    >

                        <div
                            className="section-header"
                        >

                            <h2>
                                Frequently Asked Questions
                            </h2>

                        </div>

                        <Accordion>

                            <AccordionTab
                                header="What services does SamBHi Digital Technology provide?"
                            >

                                <p>
                                    We provide Artificial Intelligence,
                                    Cloud Infrastructure,
                                    Enterprise Networking,
                                    Cyber Security,
                                    Website Development,
                                    IT Consultancy,
                                    and Digital Transformation services.
                                </p>

                            </AccordionTab>

                            <AccordionTab
                                header="How quickly can I expect a response?"
                            >

                                <p>
                                    Our team typically responds
                                    within 24–48 business hours.
                                </p>

                            </AccordionTab>

                            <AccordionTab
                                header="Do you offer remote and international services?"
                            >

                                <p>
                                    Yes. We support clients
                                    across India and globally.
                                </p>

                            </AccordionTab>

                            <AccordionTab
                                header="Can you handle enterprise-scale projects?"
                            >

                                <p>
                                    Yes. We work with startups,
                                    MSMEs, educational institutions,
                                    and large enterprises.
                                </p>

                            </AccordionTab>

                            <AccordionTab
                                header="Do you provide AI consulting?"
                            >

                                <p>
                                    Yes. We provide AI strategy,
                                    automation, machine learning,
                                    and enterprise AI integration.
                                </p>

                            </AccordionTab>

                        </Accordion>

                    </div>

                    {/* Refund Policy */}

                    <div
                        className="policy-section"
                    >

                        <div
                            className="glass-card"
                        >

                            <h2>
                                Refund Policy
                            </h2>

                            <ul>

                                <li>
                                    Consultation services are non-refundable after delivery.
                                </li>

                                <li>
                                    Completed project milestones are non-refundable.
                                </li>

                                <li>
                                    Future unpaid milestones may be cancelled by mutual agreement.
                                </li>

                                <li>
                                    Subscription services can be cancelled before the next billing cycle.
                                </li>

                                <li>
                                    Exceptional refund requests are reviewed individually.
                                </li>

                            </ul>

                        </div>

                    </div>

                    {/* Terms & Conditions */}

                    <div
                        className="policy-section"
                    >

                        <div
                            className="glass-card"
                        >

                            <h2>
                                Terms & Conditions
                            </h2>

                            <ul>

                                <li>
                                    Project work begins after agreement approval and payment confirmation.
                                </li>

                                <li>
                                    Clients must provide accurate requirements and timely feedback.
                                </li>

                                <li>
                                    Intellectual property transfers after full payment.
                                </li>

                                <li>
                                    Confidential information remains protected.
                                </li>

                                <li>
                                    SamBHi Digital Technology shall not be liable for indirect or consequential damages.
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

        );
    }
}

export default TrustAndFAQ;
