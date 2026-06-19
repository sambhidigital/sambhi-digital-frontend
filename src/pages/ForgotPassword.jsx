import React from "react";

import { Link } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

import authService
    from "../services/authService";

import { Toast }
    from "primereact/toast";

import "../styles/ForgotPassword.css";

class ForgotPassword extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            email: ""
        };
    }

    handleForgotPassword = async () => {

        try {

            await authService
                .forgotPassword(
                    this.state.email
                );

            this.toast.current.show({

                severity: "success",

                summary: "Success",

                detail:
                    "Reset password request submitted.",

                life: 3000
            });

        } catch (error) {

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail:

                    error?.response?.data?.message ||

                    "Unable to process request.",

                life: 3000
            });
        }
    };

    render() {

        return (

            <div className="forgot-page">

                <Toast
                    ref={this.toast}
                />

                <Card
                    className="forgot-card"
                >

                    <div className="forgot-header">

                        <img
                            src="/assets/logos/logo-light.png"
                            alt="SamBhi Digital"
                            className="forgot-logo"
                        />

                        <h2>
                            Forgot Password
                        </h2>

                        <p>
                            Enter your registered email address
                            to receive a secure password
                            reset link.
                        </p>

                        <div className="security-badge">

                            <i className="pi pi-shield" />

                            Secure Password Recovery

                        </div>

                    </div>

                    <div className="p-fluid">

                        <div className="p-field">

                            <label>
                                Email Address
                            </label>

                            <InputText
                                value={this.state.email}
                                onChange={(e) =>
                                    this.setState({
                                        email: e.target.value
                                    })
                                }
                            />

                        </div>

                        <Button

                            className="forgot-submit-btn"

                            label="Send Reset Link"

                            icon="pi pi-envelope"

                            onClick={
                                this.handleForgotPassword
                            }

                        />

                    </div>

                    <div className="forgot-links">

                        <Link to="/login">

                            ← Back To Login

                        </Link>

                    </div>


                </Card>

            </div>
        );
    }


}

export default ForgotPassword;
