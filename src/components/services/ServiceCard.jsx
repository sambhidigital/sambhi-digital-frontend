import React from "react";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

class ServiceCard extends React.Component {

    render() {

        const {

            icon,

            imageUrl,

            title,

            description,

            slug

        } = this.props;

        return (

            <motion.div

                className="service-card glass-card"

                whileHover={{
                    y: -10,
                    scale: 1.03
                }}

                transition={{
                    duration: 0.3
                }}

            >

                {
                    imageUrl && (

                        <div
                            className="service-image"
                        >

                            <img

                                src={imageUrl}

                                alt={title}

                                className="service-card-image"

                            />

                        </div>
                    )
                }

                <div className="service-icon">

                    <i
                        className={
                            icon ||
                            "pi pi-cog"
                        }
                    ></i>

                </div>

                <h3>

                    {title}

                </h3>

                <p>

                    {description}

                </p>

                <div
                    className="service-card-footer"
                >

                    <Link
                        to={`/services/${slug}`}
                    >

                        <button
                            className="service-details-btn"
                        >

                            Learn More

                        </button>

                    </Link>

                </div>

            </motion.div>
        );
    }
}

export default ServiceCard;
