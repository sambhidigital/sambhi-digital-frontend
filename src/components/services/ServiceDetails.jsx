import React from "react";

class ServiceDetails
    extends React.Component {

    render() {

        const {
            service
        } = this.props;

        if (!service) {

            return null;
        }

        return (

            <section
                className="service-details-section"
            >

                <div className="container">

                    <div
                        className="service-details-header"
                    >

                        <h1>
                            {service.title}
                        </h1>

                        <p>
                            {
                                service.shortDescription
                            }
                        </p>

                    </div>

                    <div
                        className="service-details-content"
                    >

                        <p>
                            {
                                service.description
                            }
                        </p>

                    </div>

                </div>

            </section>
        );
    }
}

export default ServiceDetails;
