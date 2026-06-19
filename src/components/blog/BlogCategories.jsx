import React from "react";
import { Chip } from "primereact/chip";

class BlogCategories extends React.Component {

    render() {

        const categories = [
            "Artificial Intelligence",
            "Cloud Computing",
            "Cyber Security",
            "Networking",
            "Automation",
            "DevOps",
            "Enterprise IT",
            "Web Development",
            "Digital Transformation"
        ];

        return (

            <section className="blog-categories-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Blog Categories</h2>

                        <p>
                            Explore insights across AI,
                            networking, cloud, and enterprise technologies.
                        </p>

                    </div>

                    <div className="blog-categories-grid">

                        {
                            categories.map((category, index) => (

                                <Chip
                                    key={index}
                                    label={category}
                                    className="blog-category-chip"
                                />

                            ))
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default BlogCategories;
