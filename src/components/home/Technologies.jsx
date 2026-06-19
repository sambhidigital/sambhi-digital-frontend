import React from "react";
import { motion } from "framer-motion";
import "../../styles/Technologies.css";

class Technologies extends React.Component {

    render() {

        const technologies = [

            {
                name: "React",
                icon: "pi pi-desktop"
            },

            {
                name: "Spring Boot",
                icon: "pi pi-cog"
            },

            {
                name: "PostgreSQL",
                icon: "pi pi-database"
            },

            {
                name: "Docker",
                icon: "pi pi-box"
            },

            {
                name: "AWS",
                icon: "pi pi-cloud"
            },

            {
                name: "AI / ML",
                icon: "pi pi-bolt"
            },

            {
                name: "Networking",
                icon: "pi pi-sitemap"
            },

            {
                name: "Cloud",
                icon: "pi pi-cloud-upload"
            }
        ];

        return (

            <section className="technologies-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Trusted Technologies</h2>

                        <p>
                            Modern technologies powering digital transformation.
                        </p>

                    </div>

                    <div className="technology-grid">

                        {
                            technologies.map((tech, index) => (

                                <motion.div
                                    className="technology-card"
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.08
                                    }}
                                >

                                    <div className="technology-icon">

                                        <i className={tech.icon}></i>

                                    </div>

                                    <span>

                                        {tech.name}

                                    </span>

                                </motion.div>
                            ))
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default Technologies;