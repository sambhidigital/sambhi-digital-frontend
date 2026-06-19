import React from "react";

import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import {
    sendContactMessage
} from "../../services/contactService";

class ContactForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",

            loading: false,

            successDialog: false
        };
    }

    handleSubmit = async () => {

        try {

            this.setState({

                loading: true
            });

            if (!this.state.name) {

                alert(
                    "Please enter your name."
                );

                return;
            }

            if (!this.state.email) {

                alert(
                    "Please enter your email."
                );

                return;
            }

            if (!/^[6-9]\d{9}$/.test(this.state.phone)) {

                alert(
                    "Please enter a valid 10 digit mobile number."
                );

                return;
            }

            if (!this.state.service) {

                alert(
                    "Please select a service."
                );

                return;
            }

            const contactData = {

                name:
                    this.state.name,

                email:
                    this.state.email,

                phone:
                    this.state.phone,

                subject:
                    this.state.service,

                message:
                    this.state.message
            };

            const response =
                await sendContactMessage(
                    contactData
                );

            console.log(
                "Contact Response:",
                response
            );

            this.setState({

                loading: false,

                successDialog: true,

                name: "",

                email: "",

                phone: "",

                service: "",

                message: ""
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false
            });

            alert(
                "Message submission failed."
            );
        }
    };

    handleChange = (e, field) => {

        this.setState({
            [field]: e.target.value
        });
    };

    render() {

        const services = [
            { label: "AI Solutions", value: "AI Solutions" },
            { label: "Networking", value: "Networking" },
            { label: "Cloud Infrastructure", value: "Cloud Infrastructure" },
            { label: "Website Development", value: "Website Development" },
            { label: "Cyber Security", value: "Cyber Security" },
            { label: "IT Consultancy", value: "IT Consultancy" }
        ];

        return (

            <section className="contact-form-section">

                <div className="container">

                    <div className="contact-form-wrapper glass-card">

                        <div className="section-header">

                            <h2>Contact Us</h2>

                            <p>
                                Let's discuss your AI,
                                IT infrastructure,
                                and digital transformation needs.
                            </p>

                        </div>

                        <div className="contact-form-grid">

                            {/* Full Name */}
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
                                    placeholder="Enter your email address"
                                />

                            </div>

                            {/* Phone */}
                            <div className="field">

                                <label>Phone Number</label>

                                <InputText
                                    value={this.state.phone}
                                    onChange={(e) =>
                                        this.handleChange(e, "phone")
                                    }
                                    placeholder="Enter your phone number"
                                />

                            </div>

                            {/* Service */}
                            <div className="field">

                                <label>Select Service</label>

                                <Dropdown
                                    value={this.state.service}
                                    options={services}
                                    onChange={(e) =>
                                        this.setState({
                                            service: e.value
                                        })
                                    }
                                    placeholder="Choose a service"
                                />

                            </div>

                            {/* Message */}
                            <div className="field full-width">

                                <label>Message</label>

                                <InputTextarea
                                    rows={6}
                                    value={this.state.message}
                                    onChange={(e) =>
                                        this.handleChange(e, "message")
                                    }
                                    placeholder="Describe your requirements"
                                />

                            </div>

                            {/* Submit */}
                            <div className="field full-width">

                                <Button
                                    label={
                                        this.state.loading
                                            ? "Sending..."
                                            : "Send Message"
                                    }
                                    icon="pi pi-send"
                                    loading={
                                        this.state.loading
                                    }
                                    onClick={
                                        this.handleSubmit
                                    }
                                    className="p-button-rounded p-button-info"
                                />

                                <Dialog

                                    header="Message Sent"

                                    visible={
                                        this.state.successDialog
                                    }

                                    modal

                                    style={{
                                        width: "500px"
                                    }}

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

                                            Message Sent Successfully

                                        </h2>

                                        <p>

                                            Thank you for contacting
                                            SamBhi Digital Technology.

                                            Our team will review your
                                            message and contact you
                                            shortly.

                                        </p>

                                        <div
                                            className="success-actions"
                                        >

                                            <Button

                                                label="Back To Home"

                                                icon="pi pi-home"

                                                className="
                p-button-outlined
                "

                                                onClick={() =>
                                                    window.location.href = "/"
                                                }
                                            />

                                            <Button

                                                label="Send Another Message"

                                                icon="pi pi-envelope"

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

export default ContactForm;
