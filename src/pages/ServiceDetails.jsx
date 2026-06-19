// src/pages/ServiceDetails.jsx

import React from "react";

import { useParams }
    from "react-router-dom";

import Navbar
    from "../components/layout/Navbar";

import Footer
    from "../components/layout/Footer";

import ContactCTA
    from "../components/home/ContactCTA";

import SEO
    from "../components/common/SEO";

import serviceService
    from "../services/serviceService";

import "../styles/ServiceDetails.css";

class ServiceDetailsContent
    extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            service: null,

            loading: true,

            error: null
        };
    }

    componentDidMount() {

        this.loadService();
    }

    loadService = async () => {

        try {

            const response =

                await serviceService
                    .getServiceBySlug(
                        this.props.slug
                    );

            this.setState({

                service:
                    response.data.data,

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Service not found."
            });
        }
    };

    render() {

        const {

            service,

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

                    Loading...

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

                    {error}

                </div>
            );
        }

        return (

            <>

                <SEO

                    title={
                        service.seoTitle ||
                        service.title
                    }

                    description={
                        service.seoDescription ||
                        service.shortDescription
                    }

                    image={
                        service.bannerImage
                    }

                />

                <Navbar />

                <section
                    className="service-details-banner"
                >

                    {
                        service.bannerImage && (

                            <img

                                src={
                                    service.bannerImage
                                }

                                alt={
                                    service.title
                                }

                            />
                        )
                    }

                    <div
                        className="service-details-overlay"
                    >

                        <h1>

                            {
                                service.title
                            }

                        </h1>

                        <p>

                            {
                                service.shortDescription
                            }

                        </p>

                    </div>

                </section>

                <section
                    className="service-details-content"
                >

                    <div className="container">

                        <div className="service-overview-card">

                            <h2>
                                Service Overview
                            </h2>

                            <p>
                                {service.description}
                            </p>

                        </div>

                        <div className="service-grid">

                            {
                                service.features && (

                                    <div className="service-info-card">

                                        <h3>
                                            Features
                                        </h3>

                                        <p>
                                            {service.features}
                                        </p>

                                    </div>
                                )
                            }

                            {
                                service.benefits && (

                                    <div className="service-info-card">

                                        <h3>
                                            Benefits
                                        </h3>

                                        <p>
                                            {service.benefits}
                                        </p>

                                    </div>
                                )
                            }

                            {
                                service.technologies && (

                                    <div className="service-info-card">

                                        <h3>
                                            Technologies
                                        </h3>

                                        <p>
                                            {service.technologies}
                                        </p>

                                    </div>
                                )
                            }

                        </div>

                    </div>

                </section>

                <ContactCTA />

                <Footer />

            </>
        );
    }
}

function ServiceDetails() {

    const { slug } =
        useParams();

    return (

        <ServiceDetailsContent
            slug={slug}
        />
    );
}

export default ServiceDetails;
