import React from "react";

import { Link } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

import authService from "../services/authService";
import { AuthContext } from "../context/AuthContext";

import "../styles/Login.css";

class Register extends React.Component {

    static contextType = AuthContext;

    constructor(props) {

        super(props);

        this.state = {

            firstName: "",

            lastName: "",

            email: "",

            phone: "",

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

    handleRegister = async () => {

        const {

            firstName,

            lastName,

            email,

            phone,

            password

        } = this.state;

        if (

            !firstName ||

            !email ||

            !phone ||

            !password

        ) {

            this.setState({

                error:
                    "Please fill all required fields."
            });

            return;
        }

        try {

            this.setState({

                loading: true,

                error: ""
            });

            const response =
                await authService.register({

                    firstName,

                    lastName,

                    email,

                    phone,

                    password
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
                    userData.role
            });

            window.location.href = "/";

        } catch (error) {

            this.setState({

                loading: false,

                error:

                    error?.response?.data?.message ||

                    "Registration failed."
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

                        <h2>
                            Create Account
                        </h2>

                        <p>
                            Join SamBhi Digital Technology
                        </p>

                    </div>

                    <div className="p-fluid">

                        <div className="p-field">

                            <label>
                                First Name *
                            </label>

                            <InputText

                                name="firstName"

                                value={
                                    this.state.firstName
                                }

                                onChange={
                                    this.handleChange
                                }
                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Last Name
                            </label>

                            <InputText

                                name="lastName"

                                value={
                                    this.state.lastName
                                }

                                onChange={
                                    this.handleChange
                                }
                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Email *
                            </label>

                            <InputText

                                name="email"

                                value={
                                    this.state.email
                                }

                                onChange={
                                    this.handleChange
                                }
                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Phone *
                            </label>

                            <InputText

                                name="phone"

                                value={
                                    this.state.phone
                                }

                                onChange={
                                    this.handleChange
                                }
                            />

                        </div>

                        <div className="p-field">

                            <label>
                                Password *
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

                                label="Register"

                                icon="pi pi-user-plus"

                                loading={
                                    this.state.loading
                                }

                                onClick={
                                    this.handleRegister
                                }
                            />

                        </div>

                        <div
                            className="login-links"
                        >

                            <span>
                                Already have an account?
                            </span>

                            <Link
                                to="/login"
                            >

                                Login

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

export default Register;
