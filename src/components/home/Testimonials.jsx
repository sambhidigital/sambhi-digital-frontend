import React from "react";

import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";

import testimonialService
    from "../../services/testimonialService";

import "../../styles/Testimonials.css";

class Testimonials extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            testimonials: [],

            loading: true
        };
    }

    componentDidMount() {

        this.loadTestimonials();
    }

    loadTestimonials = async () => {

        try {

            const response =
                await testimonialService
                    .getFeaturedTestimonials();

            this.setState({

                testimonials:
                    response.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(
                "Testimonials Error:",
                error
            );

            this.setState({

                loading: false
            });
        }
    };

    render() {

        const {

            testimonials,

            loading

        } = this.state;

        if (loading) {

            return (

                <section className="testimonial-section">

                    <div className="container">

                        <div className="section-header">

                            <h2>
                                Client Testimonials
                            </h2>

                            <p>
                                Loading testimonials...
                            </p>

                        </div>

                    </div>

                </section>
            );
        }

        if (
            testimonials.length === 0
        ) {

            return (

                <section className="testimonial-section">

                    <div className="container">

                        <div className="section-header">

                            <h2>
                                Client Testimonials
                            </h2>

                            <p>
                                No testimonials available.
                            </p>

                        </div>

                    </div>

                </section>
            );
        }

        return (

            <section className="testimonial-section">

                <div className="container">

                    <div className="section-header">

                        <h2>

                            Client Testimonials

                        </h2>

                        <p>

                            Trusted by businesses for intelligent
                            digital transformation solutions.

                        </p>

                    </div>

                    <div className="testimonial-grid">

                        {
                            testimonials.map(
                                (item) => (

                                    <Card

                                        key={item.id}

                                        className="testimonial-card"
                                    >

                                        <div className="testimonial-top">

                                            {
                                                item.imageUrl ?

                                                    <Avatar

                                                        image={
                                                            item.imageUrl
                                                        }

                                                        shape="circle"

                                                        size="xlarge"

                                                        className="testimonial-avatar"
                                                    />

                                                    :

                                                    <Avatar

                                                        label={
                                                            item.name
                                                                ? item.name.charAt(0)
                                                                : "C"
                                                        }

                                                        shape="circle"

                                                        size="xlarge"

                                                        className="testimonial-avatar"
                                                    />
                                            }

                                        </div>

                                        <div className="testimonial-stars">

                                            {
                                                [...Array(
                                                    item.rating || 5
                                                )].map(
                                                    (_, index) => (

                                                        <i

                                                            key={index}

                                                            className="pi pi-star-fill"

                                                        ></i>
                                                    )
                                                )
                                            }

                                        </div>

                                        <p className="testimonial-review">

                                            "{
                                                item.message &&
                                                    item.message.length > 180

                                                    ? item.message.substring(
                                                        0,
                                                        180
                                                    ) + "..."

                                                    : item.message
                                            }"

                                        </p>

                                        <h4>

                                            {item.name}

                                        </h4>

                                        <span>

                                            {item.designation}

                                            {
                                                item.company &&
                                                ` • ${item.company}`
                                            }

                                        </span>

                                    </Card>
                                )
                            )
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default Testimonials;
