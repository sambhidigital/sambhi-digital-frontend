import React from "react";

import { Card } from "primereact/card";

import "../../styles/WhyChooseUs.css";

class WhyChooseUs extends React.Component {

    render() {

        const features = [

            {
                title: "Innovation",
                icon: "pi pi-lightbulb"
            },

            {
                title: "Enterprise Security",
                icon: "pi pi-shield"
            },

            {
                title: "Scalable Infrastructure",
                icon: "pi pi-server"
            },

            {
                title: "Reliable Support",
                icon: "pi pi-headphones"
            },

            {
                title: "AI-Driven Architecture",
                icon: "pi pi-cog"
            },

            {
                title: "Future-Ready Technology",
                icon: "pi pi-bolt"
            }
        ];

        return (

            <section className="why-choose-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Why Choose Us</h2>

                        <p>
                            We build secure, scalable,
                            and intelligent technology solutions.
                        </p>

                    </div>

                    <div className="why-grid">

                        {
                            features.map((feature, index) => (

                                <Card
                                    className="why-card"
                                    key={index}
                                >

                                    <div className="why-icon">

                                        <i className={feature.icon}></i>

                                    </div>

                                    <h3>
                                        {feature.title}
                                    </h3>

                                </Card>
                            ))
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default WhyChooseUs;
