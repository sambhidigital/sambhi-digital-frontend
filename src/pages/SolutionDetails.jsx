import React from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import solutionService
    from "../services/solutionService";

import "../styles/SolutionDetails.css";

class SolutionDetails extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            solution: null,

            loading: true,

            error: null
        };
    }

    componentDidMount() {

        const id =
            window.location.pathname
                .split("/")
                .pop();

        this.loadSolution(id);
    }

    loadSolution = async (id) => {

        try {

            const response =
                await solutionService
                    .getSolutionById(id);

            this.setState({

                solution:
                    response.data.data,

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Unable to load solution details."
            });
        }
    };

    render() {

        const {
            solution,
            loading
        } = this.state;

        if (loading) {

            return (
                <h2>
                    Loading...
                </h2>
            );
        }

        if (!solution) {

            return (
                <h2>
                    Solution not found
                </h2>
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

        return (

            <>

                <Navbar />

                <div
                    className="solution-details-page"
                >

                    <div className="container">

                        <Link
                            to="/solutions"
                            className="back-solution-btn"
                        >

                            <i
                                className="pi pi-arrow-left"
                            ></i>

                            <span>
                                Back To Solutions
                            </span>

                        </Link>

                        <div
                            className="solution-details-header"
                        >

                            <span
                                className="solution-industry-badge"
                            >
                                {solution.industry}
                            </span>

                            <h1
                                className="solution-details-title"
                            >
                                {solution.title}
                            </h1>

                            <div
                                className="solution-meta-info"
                            >

                                <span>

                                    <i
                                        className="pi pi-calendar"
                                    ></i>

                                    {
                                        solution.createdAt
                                            ? new Date(
                                                solution.createdAt
                                            ).toLocaleDateString()
                                            : ""
                                    }

                                </span>

                            </div>

                            <p
                                className="solution-summary"
                            >

                                {solution.description}

                            </p>

                        </div>

                        {
                            solution.imageUrl && (

                                <img
                                    src={
                                        solution.imageUrl
                                    }
                                    alt={
                                        solution.title
                                    }
                                    className="solution-details-image"
                                />

                            )
                        }

                        <div
                            className="solution-info-grid"
                        >

                            <div
                                className="solution-info-card"
                            >

                                <h3>
                                    Industry
                                </h3>

                                <p>
                                    {
                                        solution.industry
                                    }
                                </p>

                            </div>

                            <div
                                className="solution-info-card"
                            >

                                <h3>
                                    Solution Type
                                </h3>

                                <p>
                                    Enterprise Technology
                                </p>

                            </div>

                        </div>

                        <div
                            className="solution-content-card"
                        >

                            <h2>
                                Solution Overview
                            </h2>

                            <p>
                                {
                                    solution.description
                                }
                            </p>

                        </div>

                        <div
                            className="solution-info-grid"
                        >

                            <div
                                className="solution-info-card"
                            >

                                <h3>
                                    Scalability
                                </h3>

                                <p>
                                    Built for future growth.
                                </p>

                            </div>

                            <div
                                className="solution-info-card"
                            >

                                <h3>
                                    Security
                                </h3>

                                <p>
                                    Enterprise-grade protection.
                                </p>

                            </div>

                            <div
                                className="solution-info-card"
                            >

                                <h3>
                                    Performance
                                </h3>

                                <p>
                                    High availability and reliability.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <Footer />

            </>

        );
    }
}

export default SolutionDetails;
