import React from "react";

import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Link } from "react-router-dom";

import {
    getFeaturedProjects
} from "../../services/portfolioService";

import "../../styles/PortfolioHighlights.css";

class PortfolioHighlights extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            projects: [],

            loading: true
        };
    }

    componentDidMount() {

        this.loadProjects();
    }

    loadProjects = async () => {

        try {

            const response =
                await getFeaturedProjects();

            this.setState({

                projects:
                    response.data || [],

                loading: false
            });

        } catch (error) {

            console.error(
                "Portfolio Error:",
                error
            );

            this.setState({

                loading: false
            });
        }
    };

    render() {

        const {

            projects,

            loading

        } = this.state;

        if (loading) {

            return null;
        }

        if (
            projects.length === 0
        ) {

            return null;
        }

        return (

            <section className="portfolio-section">

                <div className="container">

                    <div className="section-header">

                        <h2>

                            Portfolio Highlights

                        </h2>

                        <p>

                            Showcasing intelligent digital
                            solutions and enterprise
                            infrastructure projects.

                        </p>

                    </div>

                    <div className="portfolio-grid">

                        {
                            projects.map(
                                (project) => (

                                    <Card
                                        key={project.id}
                                        className="portfolio-card"
                                    >

                                        {
                                            project.imageUrl && (

                                                <img
                                                    src={
                                                        project.imageUrl
                                                    }
                                                    alt={
                                                        project.title
                                                    }
                                                    className="portfolio-image"
                                                />

                                            )
                                        }

                                        <h3>

                                            {
                                                project.title
                                            }

                                        </h3>

                                        <p>

                                            {
                                                project.description
                                            }

                                        </p>

                                        <Link
                                            to={`/portfolio/${project.id}`}
                                        >

                                            <Button

                                                label="View Project"

                                                icon="pi pi-arrow-right"

                                                className="p-button-rounded p-button-info portfolio-btn"

                                            />

                                        </Link>

                                    </Card>
                                )
                            )
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default PortfolioHighlights;
