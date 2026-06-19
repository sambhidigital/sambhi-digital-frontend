import React from "react";

import { Card } from "primereact/card";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import authService from "../services/authService";

import "../styles/ResetPassword.css";

class ResetPassword extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            password: "",

            confirmPassword: "",

            loading: false
        };
    }

    getToken = () => {

        const params =
            new URLSearchParams(
                window.location.search
            );

        return params.get(
            "token"
        );
    };

    handleResetPassword = async () => {

        const {

            password,

            confirmPassword

        } = this.state;

        if (
            !password ||
            !confirmPassword
        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Warning",

                detail:
                    "All fields are required",

                life: 3000
            });

            return;
        }

        if (
            password !==
            confirmPassword
        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Warning",

                detail:
                    "Passwords do not match",

                life: 3000
            });

            return;
        }

        try {

            this.setState({
                loading: true
            });

            await authService
                .resetPassword({

                    token:
                        this.getToken(),

                    password
                });

            this.toast.current.show({

                severity: "success",

                summary: "Success",

                detail:
                    "Password reset successfully",

                life: 3000
            });

            setTimeout(() => {

                window.location.href =
                    "/login";

            }, 2000);

        } catch (error) {

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail:

                    error?.response?.data?.message ||

                    "Password reset failed",

                life: 3000
            });

            this.setState({
                loading: false
            });
        }
    };

    render() {

        return (

            <div className="reset-password-page">

                <Toast
                    ref={this.toast}
                />

                <Card
                    className="reset-password-card"
                >

                    <div className="reset-header">

                        <img
                            src="/assets/logos/logo-light.png"
                            alt="SamBhi"
                            className="reset-logo"
                        />

                        <h2>
                            Reset Password
                        </h2>

                        <p>
                            Enter your new password
                        </p>

                    </div>

                    <div className="p-fluid">

                        <div className="p-field">

                            <label>
                                New Password
                            </label>

                            <Password

                                toggleMask

                                value={
                                    this.state.password
                                }

                                onChange={(e) =>

                                    this.setState({

                                        password:
                                            e.target.value
                                    })
                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Confirm Password
                            </label>

                            <Password

                                toggleMask

                                feedback={false}

                                value={
                                    this.state.confirmPassword
                                }

                                onChange={(e) =>

                                    this.setState({

                                        confirmPassword:
                                            e.target.value
                                    })
                                }

                            />

                        </div>

                        <Button

                            label="Reset Password"

                            icon="pi pi-lock"

                            loading={
                                this.state.loading
                            }

                            onClick={
                                this.handleResetPassword
                            }

                        />

                    </div>

                </Card>

            </div>
        );
    }
}

export default ResetPassword;
