import React from "react";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class BlogCard extends React.Component {

    render() {

        const {
            id,
            title,
            category,
            image,
            description,
            author,
            date
        } = this.props;

        return (

            <motion.div
                className="blog-card glass-card"
                whileHover={{
                    y: -8,
                    scale: 1.02
                }}
                transition={{
                    duration: 0.3
                }}
            >

                {/* Blog Image */}
                <div className="blog-image">

                    <img
                        src={
                            image ||
                            "/assets/images/blog/default-blog.jpg"
                        }
                        alt={title}
                    />

                </div>

                {/* Blog Content */}
                <div className="blog-content">

                    <div className="blog-meta">

                        <Tag
                            value={
                                category ||
                                "Technology"
                            }
                            severity="info"
                        />

                        <span className="blog-date">

                            {
                                date
                                    ? new Date(date)
                                        .toLocaleDateString()
                                    : "Recently Published"
                            }

                        </span>

                    </div>

                    <h3>{title}</h3>

                    <p>

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

                    {/* Author */}
                    <div className="blog-author">

                        <i className="pi pi-user"></i>

                        <span>
                            {author || "SamBhi Team"}
                        </span>

                    </div>

                    {/* Action */}
                    <Link
                        to={`/blog/${id}`}
                    >

                        <Button
                            label="Read More"
                            icon="pi pi-arrow-right"
                            className="p-button-text p-button-info"
                        />

                    </Link>

                </div>

            </motion.div>
        );
    }
}

export default BlogCard;
