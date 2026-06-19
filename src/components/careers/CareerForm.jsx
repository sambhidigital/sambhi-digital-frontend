import React from "react";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import {
    applyForJob, uploadResume
} from "../../services/careerService";

import { Dialog } from "primereact/dialog";

class CareerForm extends React.Component {


    constructor(props) {

        super(props);

        this.state = {

            name: "",

            email: "",

            phone: "",

            position:
                props.position || "",

            message: "",

            resume: null,

            resumePath: "",

            loading: false,

            success: false,

            successDialog: false
        };
    }

    handleSubmit = async () => {

        try {

            this.setState({

                loading: true
            });

            // Position Validation
            if (!this.state.position) {

                alert(
                    "Please select a position."
                );

                this.setState({

                    loading: false
                });

                return;
            }

            /* Validation */

            if (!this.state.name.trim()) {

                alert(
                    "Please enter your full name."
                );

                return;
            }

            if (!this.state.email.trim()) {

                alert(
                    "Please enter your email address."
                );

                return;
            }

            if (
                !/\S+@\S+\.\S+/.test(
                    this.state.email
                )
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;
            }

            if (
                !/^[6-9]\d{9}$/.test(
                    this.state.phone
                )
            ) {

                alert(
                    "Please enter a valid 10 digit mobile number."
                );

                return;
            }

            if (!this.state.resume) {

                alert(
                    "Please upload your resume."
                );

                return;
            }

            const careerMap = {

                "Frontend Developer": 1,
                "Backend Developer": 2,
                "Internship Program": 3,
                "Networking Engineer": 4,
                "Cloud Engineer": 5,
                "UI/UX Designer": 6,
            };

            const selectedCareerId =

                this.props.careerId ||

                careerMap[this.state.position];

            if (!selectedCareerId) {

                alert(
                    "Please select a valid position."
                );

                this.setState({

                    loading: false
                });

                return;
            }

            const uploadResponse =
                await uploadResume(
                    this.state.resume
                );

            const resumePath =

                uploadResponse.data.data.fileUrl;

            const applicationData = {

                careerId:
                    selectedCareerId,

                fullName:
                    this.state.name,

                email:
                    this.state.email,

                phone:
                    this.state.phone,

                resumePath:
                    resumePath,

                coverLetter:
                    this.state.message
            };

            const response =
                await applyForJob(
                    applicationData
                );

            console.log(
                "Application Response:",
                response
            );

            this.setState({

                loading: false,

                success: true,

                successDialog: true,

                name: "",

                email: "",

                phone: "",

                position:
                    this.props.position || "",

                message: "",

                resume: null,

                resumePath: ""
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false
            });

            alert(
                "Application submission failed."
            );
        }
    };

    handleChange = (e, field) => {

        this.setState({
            [field]: e.target.value
        });
    };

    componentDidUpdate(prevProps) {

        if (

            prevProps.position !==
            this.props.position

        ) {

            this.setState({

                position:
                    this.props.position
            });
        }
    }

    componentDidMount() {

        const params =
            new URLSearchParams(
                window.location.search
            );

        const type =
            params.get("type");

        if (type === "internship") {

            this.setState({

                position:
                    "Internship Program"
            });
        }
    }

    render() {

        const positions = [

            {
                label: "Frontend Developer",
                value: "Frontend Developer"
            },

            {
                label: "Backend Developer",
                value: "Backend Developer"
            },

            {
                label: "AI Engineer",
                value: "AI Engineer"
            },

            {
                label: "Networking Engineer",
                value: "Networking Engineer"
            },

            {
                label: "Cloud Engineer",
                value: "Cloud Engineer"
            },

            {
                label: "UI/UX Designer",
                value: "UI/UX Designer"
            },

            {
                label: "Internship Program",
                value: "Internship Program"
            }
        ];

        return (

            <section className="career-form-section">

                <div className="container">

                    <div className="career-form-wrapper glass-card">

                        <div className="section-header">

                            <h2>Apply for Career Opportunities</h2>

                            <p>
                                Join our AI and enterprise technology team.
                            </p>

                        </div>

                        <div className="career-form-grid">

                            {/* Name */}
                            <div className="field">

                                <label>Full Name</label>

                                <InputText
                                    value={this.state.name}
                                    onChange={(e) =>
                                        this.handleChange(e, "name")
                                    }
                                    placeholder="Enter your full name"
                                />

                            </div>

                            {/* Email */}
                            <div className="field">

                                <label>Email Address</label>

                                <InputText
                                    value={this.state.email}
                                    onChange={(e) =>
                                        this.handleChange(e, "email")
                                    }
                                    placeholder="Enter your email"
                                />

                            </div>

                            {/* Phone */}
                            <div className="field">

                                <label>Phone Number</label>

                                <InputText
                                    value={this.state.phone}
                                    keyfilter="int"
                                    maxLength={10}
                                    onChange={(e) => {

                                        const value =
                                            e.target.value
                                                .replace(/\D/g, "")
                                                .slice(0, 10);

                                        this.setState({

                                            phone: value
                                        });
                                    }}
                                    placeholder="Enter 10 digit mobile number"
                                />

                            </div>

                            {/* Position */}
                            <div className="field">

                                <label>Position</label>

                                <Dropdown
                                    value={this.state.position}
                                    options={positions}
                                    optionLabel="label"
                                    optionValue="value"
                                    onChange={(e) =>
                                        this.setState({
                                            position: e.value
                                        })
                                    }
                                    disabled={!!this.props.position}
                                    placeholder="Select Position"
                                />

                                {
                                    this.props.position && (

                                        <small
                                            className="selected-job-info"
                                        >

                                            Applying for:
                                            {" "}
                                            {this.props.position}

                                        </small>

                                    )
                                }

                            </div>

                            {/* Resume Upload */}

                            <div className="field full-width">

                                <label>

                                    Resume (PDF/DOC/DOCX)

                                </label>

                                <input

                                    type="file"

                                    accept=".pdf,.doc,.docx"

                                    onChange={(e) =>

                                        this.setState({

                                            resume:
                                                e.target.files[0]
                                        })

                                    }

                                />

                                {
                                    this.state.resume && (

                                        <small>

                                            Selected:
                                            {" "}
                                            {this.state.resume.name}

                                        </small>

                                    )
                                }

                            </div>

                            {/* Message */}
                            <div className="field full-width">

                                <label>Message</label>

                                <InputTextarea
                                    rows={5}
                                    value={this.state.message}
                                    onChange={(e) =>
                                        this.handleChange(e, "message")
                                    }
                                    placeholder="Tell us about yourself"
                                />

                            </div>

                            {/* Submit */}
                            <div className="field full-width">

                                <Button
                                    label="Submit Application"
                                    icon="pi pi-check"
                                    loading={
                                        this.state.loading
                                    }
                                    onClick={
                                        this.handleSubmit
                                    }
                                    className="p-button-rounded p-button-info"
                                />

                                <Dialog

                                    header="Application Submitted"

                                    visible={
                                        this.state.successDialog
                                    }

                                    style={{
                                        width: "500px"
                                    }}

                                    modal

                                    onHide={() =>
                                        this.setState({
                                            successDialog: false
                                        })
                                    }
                                >

                                    <div
                                        className="career-success-dialog"
                                    >

                                        <div
                                            className="success-icon"
                                        >

                                            🎉

                                        </div>

                                        <h2>

                                            Thank You For Applying

                                        </h2>

                                        <p>

                                            Thank you for your interest
                                            in SamBhi Digital Technology.

                                            Our recruitment team will
                                            review your application and
                                            contact you shortly.

                                        </p>

                                        <div
                                            className="success-actions"
                                        >

                                            <Button

                                                label="Back To Careers"

                                                icon="pi pi-arrow-left"

                                                className="
                p-button-outlined
                "

                                                onClick={() =>
                                                    this.props.history
                                                        ?
                                                        this.props.history.push(
                                                            "/careers"
                                                        )
                                                        :
                                                        window.location.href =
                                                        "/careers"
                                                }
                                            />

                                            <Button

                                                label="Apply Another Job"

                                                icon="pi pi-briefcase"

                                                className="
                p-button-info
                "

                                                onClick={() =>
                                                    this.setState({
                                                        successDialog: false
                                                    })
                                                }
                                            />

                                        </div>

                                    </div>

                                </Dialog>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        );
    }
}

export default CareerForm;
