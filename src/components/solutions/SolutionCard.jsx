import React from "react";

import { motion } from "framer-motion";

import { Tag } from "primereact/tag";
import { Button } from "primereact/button";

import { Link } from "react-router-dom";

class SolutionCard extends React.Component {

    render() {

        const {

            id,

            title,

            industry,

            description,

            imageUrl

        } = this.props;

        return (

            <motion.div

                className="solution-card glass-card"

                whileHover={{
                    y: -10,
                    scale: 1.02
                }}

                transition={{
                    duration: 0.3
                }}

            >

                {
                    imageUrl && (

                        <div className="solution-image">

                            <img

                                src={imageUrl}

                                alt={title}

                            />

                        </div>
                    )
                }

                <div className="solution-content">

                    {
                        industry && (

                            <Tag

                                value={industry}

                                severity="info"

                            />

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

                        to={`/solution-details/${id}`}

                        className="service-btn-link"

                    >

                        <Button

                            label="View Details"

                            icon="pi pi-arrow-right"

                            iconPos="right"

                            className="p-button-outlined p-button-rounded"

                        />

                    </Link>

                </div>

            </motion.div>
        );
    }
}

export default SolutionCard;
