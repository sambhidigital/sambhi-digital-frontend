import React from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
    getProjectById
} from "../services/portfolioService";

import "../styles/Portfolio.css";

class ProjectDetails extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            project: null,

            loading: true,

            error: null
        };
    }

    componentDidMount() {

        const id =
            window.location.pathname
                .split("/")
                .pop();

        this.loadProject(id);
    }

    loadProject = async (id) => {

        try {

            const response =
                await getProjectById(id);

            this.setState({

                project:
                    response.data.data,

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Unable to load project."
            });
        }
    };

    render() {

        const {
            project,
            loading
        } = this.state;

        if (loading) {

            return (

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center"
                    }}
                >

                    <h2>
                        Loading Project...
                    </h2>

                </div>
            );
        }

        if (this.state.error) {

            return (

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center"
                    }}
                >

                    <h2>
                        {this.state.error}
                    </h2>

                </div>
            );
        }

        if (!project) {

            return (
                <h2>
                    Project Not Found
                </h2>
            );
        }

        return (

            <>

                <Navbar />

                <div
                    className="project-details-page"
                >

                    <div className="container">

                        <Link
                            to="/portfolio"
                            className="back-project-btn"
                        >

                            ← Back To Portfolio

                        </Link>

                        <div
                            className="project-details-header"
                        >

                            <span
                                className="project-category"
                            >

                                {project.category}

                            </span>

                            <h1>

                                {project.title}

                            </h1>

                            <p>

                                {project.description}

                            </p>

                        </div>

                        {
                            project.imageUrl && (

                                <img
                                    src={
                                        project.imageUrl
                                    }
                                    alt={
                                        project.title
                                    }
                                    className="project-details-image"
                                />

                            )
                        }

                        <div className="project-info-grid">

                            <div className="project-info-card">

                                <h3>
                                    Client
                                </h3>

                                <p>
                                    {project.clientName || "Confidential Client"}
                                </p>

                            </div>

                            <div className="project-info-card">

                                <h3>
                                    Technologies
                                </h3>

                                <p>
                                    {project.technologies || "Enterprise Technology Stack"}
                                </p>

                            </div>

                        </div>

                        {
                            project.projectUrl && (

                                <div
                                    style={{
                                        textAlign: "center",
                                        marginTop: "30px"
                                    }}
                                >

                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-url-btn"
                                    >

                                        Visit Project

                                    </a>

                                </div>

                            )
                        }

                    </div>

                </div>

                <Footer />

            </>

        );
    }
}

export default ProjectDetails;
