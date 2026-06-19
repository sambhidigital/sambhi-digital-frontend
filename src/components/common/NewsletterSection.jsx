import React from "react";

import { Button }
from "primereact/button";

import { InputText }
from "primereact/inputtext";

import newsletterService
from "../../services/newsletterService";

import "../../styles/Newsletter.css";

class NewsletterSection
    extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            email: "",

            loading: false,

            success: "",

            error: ""
        };
    }

    handleSubmit = async () => {

        const {
            email
        } = this.state;

        if (!email) {

            this.setState({

                error:
                    "Please enter email."
            });

            return;
        }

        try {

            this.setState({

                loading: true,

                error: "",

                success: ""
            });

            await newsletterService
                .subscribe({

                    email
                });

            this.setState({

                email: "",

                loading: false,

                success:
                    "Subscribed successfully!"
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Subscription failed."
            });
        }
    };

    render() {

        return (

            <section
                className="newsletter-section"
            >

                <div className="container">

                    <div className="newsletter-box">

                        <h2>

                            Subscribe to Our Technology Newsletter

                        </h2>

                        <p>

                            Get the latest AI,
                            Technology and
                            Digital Transformation
                            insights.

                        </p>

                        <div
                            className="newsletter-form"
                        >

                            <InputText

                                value={
                                    this.state.email
                                }

                                onChange={(e) =>
                                    this.setState({
                                        email:
                                            e.target.value
                                    })
                                }

                                placeholder="Enter your email"
                            />

                            <Button

                                label="Subscribe"

                                icon="pi pi-send"

                                loading={
                                    this.state.loading
                                }

                                onClick={
                                    this.handleSubmit
                                }
                            />

                        </div>

                        {
                            this.state.success &&

                            <p
                                className="newsletter-success"
                            >
                                {
                                    this.state.success
                                }
                            </p>
                        }

                        {
                            this.state.error &&

                            <p
                                className="newsletter-error"
                            >
                                {
                                    this.state.error
                                }
                            </p>
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default NewsletterSection;
