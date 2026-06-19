import React from "react";

class ServiceBenefits extends React.Component {

    render() {

        const { benefits } = this.props;

        return (

            <section className="service-benefits-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Service Benefits</h2>

                        <p>
                            Powerful enterprise-grade advantages
                            for your business transformation.
                        </p>

                    </div>

                    <div className="benefits-grid">

                        {
                            benefits &&
                            benefits.map((benefit, index) => (

                                <div
                                    className="benefit-card glass-card"
                                    key={index}
                                >

                                    <i className="pi pi-check-circle"></i>

                                    <h3>{benefit.title}</h3>

                                    <p>{benefit.description}</p>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default ServiceBenefits;
