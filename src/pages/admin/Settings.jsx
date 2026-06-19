import React from "react";

import { Card } from "primereact/card";

import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

import { Button } from "primereact/button";

import { Toast } from "primereact/toast";

import "../../styles/Admin.css";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getSettings,

    updateSettings

} from "../../services/settingsService";

class Settings
    extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            siteName: "",

            email: "",

            phone: "",

            address: "",

            logoUrl: "",

            facebook: "",

            instagram: "",

            linkedin: "",

            seoTitle: "",

            seoDescription: "",

            loading: true,

            saving: false
        };
    }

    componentDidMount() {

        this.loadSettings();
    }

    loadSettings = async () => {

        try {

            const response =
                await getSettings();

            const data =
                response.data.data;

            if (data) {

                this.setState({

                    siteName:
                        data.siteName || "",

                    email:
                        data.email || "",

                    phone:
                        data.phone || "",

                    address:
                        data.address || "",

                    logoUrl:
                        data.logoUrl || "",

                    facebook:
                        data.facebook || "",

                    instagram:
                        data.instagram || "",

                    linkedin:
                        data.linkedin || "",

                    seoTitle:
                        data.seoTitle || "",

                    seoDescription:
                        data.seoDescription || "",

                    loading: false
                });
            }

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false
            });
        }
    };

    handleChange =
        (e) => {

            this.setState({

                [e.target.name]:
                    e.target.value
            });
        };

    saveSettings = async () => {

        this.setState({
            saving: true
        });

        try {

            const {

                siteName,
                email,
                phone,
                address,
                logoUrl,
                facebook,
                instagram,
                linkedin,
                seoTitle,
                seoDescription

            } = this.state;

            await updateSettings({

                siteName,
                email,
                phone,
                address,
                logoUrl,
                facebook,
                instagram,
                linkedin,
                seoTitle,
                seoDescription
            });

            this.toast.current.show({

                severity: "success",

                summary: "Success",

                detail:
                    "Settings updated successfully",

                life: 3000
            });

        } catch (error) {

            console.error(error);

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail:
                    "Update failed",

                life: 3000
            });

        } finally {

            this.setState({
                saving: false
            });
        }
    };

    render() {

        return (

            <AdminLayout>

                <Toast
                    ref={this.toast}
                />

                <div className="admin-page">

                    <div className="admin-page-header">

                        <h1>

                            Site Settings

                        </h1>

                    </div>

                    <Card>

                        <div className="settings-grid">

                            <div className="field">

                                <label>

                                    Site Name

                                </label>

                                <InputText

                                    name="siteName"

                                    value={
                                        this.state.siteName
                                    }

                                    onChange={
                                        this.handleChange
                                    }

                                />

                            </div>

                            <div className="field">

                                <label>

                                    Email

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

                            <div className="field">

                                <label>

                                    Phone

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

                            <div className="field">

                                <label>

                                    Address

                                </label>

                                <InputTextarea

                                    rows={3}

                                    name="address"

                                    value={
                                        this.state.address
                                    }

                                    onChange={
                                        this.handleChange
                                    }

                                />

                            </div>

                            <div className="field">

                                <label>

                                    Logo URL

                                </label>

                                <InputText

                                    name="logoUrl"

                                    value={
                                        this.state.logoUrl
                                    }

                                    onChange={
                                        this.handleChange
                                    }

                                />
                                {
                                    this.state.logoUrl && (

                                        <div
                                            style={{
                                                marginTop: "15px"
                                            }}
                                        >

                                            <img

                                                src={
                                                    this.state.logoUrl
                                                }

                                                alt="Logo"

                                                style={{

                                                    maxWidth: "200px",

                                                    maxHeight: "80px",

                                                    objectFit: "contain",

                                                    borderRadius: "8px"
                                                }}
                                            />

                                        </div>
                                    )
                                }

                            </div>

                            <div className="field">

                                <label>

                                    Facebook

                                </label>

                                <InputText

                                    name="facebook"

                                    value={
                                        this.state.facebook
                                    }

                                    onChange={
                                        this.handleChange
                                    }

                                />

                            </div>

                            <div className="field">

                                <label>

                                    Instagram

                                </label>

                                <InputText

                                    name="instagram"

                                    value={
                                        this.state.instagram
                                    }

                                    onChange={
                                        this.handleChange
                                    }

                                />

                            </div>

                            <div className="field">

                                <label>

                                    LinkedIn

                                </label>

                                <InputText

                                    name="linkedin"

                                    value={
                                        this.state.linkedin
                                    }

                                    onChange={
                                        this.handleChange
                                    }

                                />

                            </div>

                            <div className="field">

                                <label>

                                    SEO Title

                                </label>

                                <InputText

                                    name="seoTitle"

                                    value={
                                        this.state.seoTitle
                                    }

                                    onChange={
                                        this.handleChange
                                    }

                                />

                            </div>

                            <div className="field">

                                <label>

                                    SEO Description

                                </label>

                                <InputTextarea

                                    rows={5}

                                    name="seoDescription"

                                    value={
                                        this.state.seoDescription
                                    }

                                    onChange={
                                        this.handleChange
                                    }

                                />

                            </div>

                        </div>

                        <div
                            className="settings-actions"
                        >

                            <Button

                                label="Save Settings"

                                icon="pi pi-save"

                                loading={
                                    this.state.saving
                                }

                                onClick={
                                    this.saveSettings
                                }

                            />

                        </div>

                    </Card>

                </div>

            </AdminLayout>
        );
    }
}

export default Settings;