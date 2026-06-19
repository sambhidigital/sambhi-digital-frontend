import React from "react";

import ServiceCard
    from "./ServiceCard";

class ServiceGrid extends React.Component {

    render() {

        const {
            services
        } = this.props;

        return (

            <div className="services-grid">

                {
                    services &&
                    services.map(
                        (service) => (

                            <ServiceCard

                                key={
                                    service.id
                                }

                                id={
                                    service.id
                                }

                                slug={
                                    service.slug
                                }

                                icon={
                                    service.icon
                                }

                                imageUrl={
                                    service.imageUrl
                                }

                                title={
                                    service.title
                                }

                                description={
                                    service.shortDescription
                                }
                            />
                        )
                    )
                }

            </div>
        );
    }
}

export default ServiceGrid;
