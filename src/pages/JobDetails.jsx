import React from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import { getJobById }
    from "../services/careerService";

import CareerForm
    from "../components/careers/CareerForm";

import "../styles/Careers.css";

class JobDetails extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            job: null,

            loading: true,

            error: null
        };
    }

    componentDidMount() {

        const id =
            window.location.pathname
                .split("/")
                .pop();

        this.loadJob(id);
    }

    loadJob = async (id) => {

        try {

            const response =
                await getJobById(id);

            console.log(
                "Selected Job:",
                response.data.data
            );

            this.setState({

                job:
                    response.data.data,

                loading: false
            });
        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Unable to load job details."
            });
        }
    };

    render() {

        const {
            job,
            loading
        } = this.state;

        if (loading) {

            return (

                <>

                    <Navbar />

                    <div
                        className="job-details-page"
                    >

                        <div className="container">

                            <h2
                                style={{
                                    textAlign: "center",
                                    color: "#fff"
                                }}
                            >

                                Loading Job...

                            </h2>

                        </div>

                    </div>

                    <Footer />

                </>

            );
        }

        if (this.state.error) {

            return (

                <>

                    <Navbar />

                    <div
                        className="job-details-page"
                    >

                        <div className="container">

                            <h2
                                style={{
                                    textAlign: "center",
                                    color: "#fff"
                                }}
                            >

                                {this.state.error}

                            </h2>

                        </div>

                    </div>

                    <Footer />

                </>
            );
        }

        if (!job) {

            return (

                <>

                    <Navbar />

                    <div
                        className="job-details-page"
                    >

                        <div className="container">

                            <h2
                                style={{
                                    textAlign: "center",
                                    color: "#fff"
                                }}
                            >

                                Job Not Found

                            </h2>

                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "20px"
                                }}
                            >

                                <Link
                                    to="/careers"
                                    className="back-job-btn"
                                >

                                    Back To Careers

                                </Link>

                            </div>

                        </div>

                    </div>

                    <Footer />

                </>

            );
        }

        return (

            <>

                <Navbar />

                <div
                    className="job-details-page"
                >

                    <div className="container">

                        <Link
                            to="/careers"
                            className="back-job-btn"
                        >

                            <i className="pi pi-arrow-left"></i>

                            Back To Careers

                        </Link>

                        <div
                            className="job-details-header"
                        >

                            <span
                                className="job-type-badge"
                            >

                                {job.jobType}

                            </span>

                            <h1>

                                {job.title}

                            </h1>

                            <p>

                                {job.description}

                            </p>

                        </div>

                        <div
                            className="job-info-grid"
                        >

                            <div
                                className="job-info-card"
                            >

                                <h3>
                                    Location
                                </h3>

                                <p>
                                    {job.location || "Remote / Hybrid"}
                                </p>

                            </div>

                            <div
                                className="job-info-card"
                            >

                                <h3>
                                    Experience
                                </h3>

                                <p>
                                    {job.experience || "As Per Role"}
                                </p>

                            </div>

                        </div>

                        <div className="job-description-card">

                            <h2>
                                Job Description
                            </h2>

                            <p>
                                {job.description || "No description available."}
                            </p>

                        </div>

                        <div className="apply-job-section">

                            <h2>
                                Apply For This Position
                            </h2>

                            <p>
                                Submit your application and join
                                the SamBhi Digital Technology team.
                            </p>

                        </div>

                        <CareerForm
                            careerId={job.id}
                            position={job.title}
                        />

                    </div>

                </div>

                <Footer />

            </>
        );
    }
}

export default JobDetails;
