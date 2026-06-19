import React from "react";

import { Button } from "primereact/button";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

class PortfolioCard extends React.Component {

    render() {

        const {

            id,

            title,

            category,

            description,

            image

        } = this.props;

        return (

            <motion.div

                className="portfolio-card glass-card"

                whileHover={{
                    y: -10,
                    scale: 1.02
                }}

                transition={{
                    duration: 0.3
                }}

            >

                {
                    image && (

                        <div
                            className="portfolio-image"
                        >

                            <img

                                src={image}

                                alt={title}

                            />

                        </div>
                    )
                }

                <div
                    className="portfolio-content"
                >

                    {
                        category && (

                            <span
                                className="portfolio-category"
                            >

                                {category}

                            </span>
                        )
                    }

                    <h3>

                        {title}

                    </h3>

                    <p>

                        {
                            description &&
                            description.length > 120

                                ? description.substring(
                                    0,
                                    120
                                ) + "..."

                                : description
                        }

                    </p>

                    <Link
                        to={`/portfolio/${id}`}
                    >

                        <Button

                            label="View Project"

                            icon="pi pi-arrow-right"

                            className="p-button-rounded p-button-info"

                        />

                    </Link>

                </div>

            </motion.div>
        );
    }
}

export default PortfolioCard;
