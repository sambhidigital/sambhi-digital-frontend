import React from "react";

import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Link } from "react-router-dom";

import serviceService
    from "../../services/serviceService";

import "../../styles/ServicesPreview.css";

class ServicesPreview extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            services: [],

            loading: true
        };
    }

    componentDidMount() {

        this.loadServices();
    }

    loadServices = async () => {

        try {

            const response =
                await serviceService
                    .getFeaturedServices();

            let services =
                response.data.data || [];

            services.sort(

                (a, b) =>

                    (a.displayOrder || 0) -

                    (b.displayOrder || 0)
            );

            this.setState({

                services,

                loading: false
            });

        } catch (error) {

            console.error(
                "Services Error:",
                error
            );

            this.setState({

                loading: false
            });
        }
    };

    render() {

        const {

            services,

            loading

        } = this.state;

        if (loading) {

            return (

                <section className="services-section">

                    <div className="container">

                        <div className="section-header">

                            <h2>
                                Our Services
                            </h2>

                            <p>
                                Loading services...
                            </p>

                        </div>

                    </div>

                </section>
            );
        }

        if (
            services.length === 0
        ) {

            return null;
        }

        return (

            <section className="services-section">

                <div className="container">

                    <div className="section-header">

                        <h2>

                            Our Services

                        </h2>

                        <p>

                            Intelligent IT and AI solutions
                            for modern businesses.

                        </p>

                    </div>

                    <div className="services-grid">

                        {
                            services.map(
                                (service) => (

                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="service-card-link"
                                    >

                                        <Card

                                            key={
                                                service.id
                                            }

                                            className="service-card"
                                        >

                                            <div className="service-icon">

                                                <i
                                                    className={
                                                        service.icon ||
                                                        "pi pi-cog"
                                                    }
                                                ></i>

                                            </div>

                                            <h3>

                                                {
                                                    service.title
                                                }

                                            </h3>

                                            <p>

                                                {
                                                    service.shortDescription
                                                }

                                            </p>

                                        </Card>
                                    </Link>
                                )
                            )
                        }

                    </div>

                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "40px"
                        }}
                    >

                        <Link
                            to="/services"
                        >

                            <Button

                                label="View All Services"

                                icon="pi pi-arrow-right"

                            />

                        </Link>

                    </div>

                </div>

            </section>
        );
    }
}

export default ServicesPreview;
