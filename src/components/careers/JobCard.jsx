import React from "react";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class JobCard extends React.Component {

    render() {

        const {
            id,
            title,
            location,
            type,
            experience,
            description
        } = this.props;

        return (

            <motion.div
                className="job-card glass-card"
                whileHover={{
                    y: -8,
                    scale: 1.02
                }}
                transition={{
                    duration: 0.3
                }}
            >

                {/* Job Header */}
                <div className="job-header">

                    <h3>{title}</h3>

                    <Tag
                        value={type}
                        severity="info"
                    />

                </div>

                {/* Job Info */}
                <div className="job-details">

                    <p>
                        <i className="pi pi-map-marker"></i>
                        {location}
                    </p>

                    <p>
                        <i className="pi pi-briefcase"></i>
                        {experience}
                    </p>

                </div>

                {/* Description */}
                <p className="job-description">

                    {
                        description &&
                            description.length > 140

                            ? description.substring(
                                0,
                                140
                            ) + "..."

                            : description
                    }

                </p>

                {/* Action */}
                <Link
                    to={`/careers/${id}`}
                >

                    <Button
                        label="Apply Now"
                        icon="pi pi-send"
                        className="p-button-rounded p-button-info"
                    />

                </Link>

            </motion.div>
        );
    }
}

export default JobCard;
