import React from "react";

import { Link } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

import authService from "../services/authService";
import { AuthContext } from "../context/AuthContext";

import "../styles/Login.css";

class Login extends React.Component {

    static contextType = AuthContext;

    constructor(props) {

        super(props);

        this.state = {

            email: "",

            password: "",

            loading: false,

            error: ""
        };
    }

    handleChange = (e) => {

        this.setState({

            [e.target.name]:
                e.target.value
        });
    };

    handleLogin = async () => {

        if (
            !this.state.email ||
            !this.state.password
        ) {

            this.setState({

                error:
                    "Email and Password are required."
            });

            return;
        }

        try {

            this.setState({

                loading: true,

                error: ""
            });

            const response =
                await authService.login({

                    email:
                        this.state.email,

                    password:
                        this.state.password
                });

            const userData =
                response.data.data;

            this.context.login({

                token:
                    userData.token,

                userId:
                    userData.userId,

                firstName:
                    userData.firstName,

                email:
                    userData.email,

                role:
                    userData.role,

                profileImage:
                    userData.profileImage
            });

            const intendedUrl =
                sessionStorage.getItem(
                    "redirectAfterLogin"
                );

            if (intendedUrl) {

                sessionStorage.removeItem(
                    "redirectAfterLogin"
                );

                window.location.href =
                    intendedUrl;

            } else {

                window.location.href =
                    userData.role === "ROLE_ADMIN"
                        ? "/admin/dashboard"
                        : "/";
            }

        } catch (error) {

            this.setState({

                loading: false,

                error:

                    error?.response?.data?.message ||

                    "Invalid email or password"
            });
        }
    };

    render() {

        return (

            <div className="login-page">

                <Card
                    className="login-card"
                >

                    <div className="login-header">

                        <img
                            src="/assets/logos/logo-light.png"
                            alt="SamBhi Digital"
                            className="login-logo"
                        />

                        <h2>
                            Welcome Back
                        </h2>

                        <p>
                            Access the SamBhi Digital Platform
                        </p>

                        <p>
                            Sign in to continue
                        </p>

                    </div>

                    <div className="p-fluid">

                        <div className="p-field">

                            <label>
                                Email Address
                            </label>

                            <InputText

                                name="email"

                                value={
                                    this.state.email
                                }

                                onChange={
                                    this.handleChange
                                }

                                placeholder="Enter email"
                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Password
                            </label>

                            <Password

                                name="password"

                                value={
                                    this.state.password
                                }

                                feedback={false}

                                toggleMask

                                onChange={
                                    this.handleChange
                                }

                                placeholder="Enter password"
                            />

                        </div>

                        {
                            this.state.error && (

                                <small
                                    className="p-error"
                                >

                                    {
                                        this.state.error
                                    }

                                </small>
                            )
                        }

                        <div
                            style={{
                                marginTop: "20px"
                            }}
                        >

                            <Button

                                label="Login"

                                icon="pi pi-sign-in"

                                loading={
                                    this.state.loading
                                }

                                onClick={
                                    this.handleLogin
                                }
                            />

                            <div className="login-divider">
                                <span>Secure Access</span>
                            </div>

                        </div>

                        <div
                            className="login-links"
                        >

                            <Link
                                to="/forgot-password"
                            >

                                Forgot Password?

                            </Link>

                        </div>

                        <div
                            className="login-links"
                        >

                            <span>
                                Don't have an account?
                            </span>

                            <Link
                                to="/register"
                            >

                                Create Account

                            </Link>

                        </div>

                        <div
                            className="login-links"
                        >

                            <Link to="/">

                                ← Back To Home

                            </Link>

                        </div>

                    </div>

                </Card>

            </div>
        );
    }
}

export default Login;