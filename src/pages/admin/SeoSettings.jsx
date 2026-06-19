import React from "react";

import AdminLayout
    from "../../components/admin/AdminLayout";

import { Button }
    from "primereact/button";

import { InputText }
    from "primereact/inputtext";

import { InputTextarea }
    from "primereact/inputtextarea";

import { Toast }
    from "primereact/toast";

import {

    getSeoSettings,

    updateSeoSettings

}
from "../../services/seoService";

import "../../styles/Admin.css";

class SeoSettings
    extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            seo: {

                siteTitle: "",

                siteDescription: "",

                siteKeywords: "",

                canonicalUrl: "",

                ogImage: "",

                twitterHandle: "",

                googleVerification: "",

                robotsPolicy: ""
            }
        };
    }

    componentDidMount() {

        this.loadSettings();
    }

    loadSettings = async () => {

        try {

            const response =

                await getSeoSettings();

            this.setState({

                seo:
                    response.data.data || {}
            });

        } catch (error) {

            console.error(error);
        }
    };

    handleChange = (
        field,
        value
    ) => {

        this.setState({

            seo: {

                ...this.state.seo,

                [field]: value
            }
        });
    };

    saveSettings = async () => {

        try {

            await updateSeoSettings(
                this.state.seo
            );

            this.toast.current.show({

                severity: "success",

                summary: "Success",

                detail:
                    "SEO settings updated"

            });

        } catch (error) {

            console.error(error);

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail:
                    "Update failed"

            });
        }
    };

    render() {

        const {
            seo
        } = this.state;

        return (

            <AdminLayout>

                <Toast
                    ref={this.toast}
                />

                <div className="admin-page">

                    <div className="admin-page-header">

                        <h1>

                            SEO Manager

                        </h1>

                    </div>

                    <div className="admin-form">

                        <div className="p-field">

                            <label>

                                Site Title

                            </label>

                            <InputText

                                value={
                                    seo.siteTitle || ""
                                }

                                onChange={(e) =>

                                    this.handleChange(
                                        "siteTitle",
                                        e.target.value
                                    )

                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>

                                Site Description

                            </label>

                            <InputTextarea

                                rows={4}

                                value={
                                    seo.siteDescription || ""
                                }

                                onChange={(e) =>

                                    this.handleChange(
                                        "siteDescription",
                                        e.target.value
                                    )

                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>

                                Keywords

                            </label>

                            <InputText

                                value={
                                    seo.siteKeywords || ""
                                }

                                onChange={(e) =>

                                    this.handleChange(
                                        "siteKeywords",
                                        e.target.value
                                    )

                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>

                                Canonical URL

                            </label>

                            <InputText

                                value={
                                    seo.canonicalUrl || ""
                                }

                                onChange={(e) =>

                                    this.handleChange(
                                        "canonicalUrl",
                                        e.target.value
                                    )

                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>

                                Open Graph Image

                            </label>

                            <InputText

                                value={
                                    seo.ogImage || ""
                                }

                                onChange={(e) =>

                                    this.handleChange(
                                        "ogImage",
                                        e.target.value
                                    )

                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>

                                Twitter Handle

                            </label>

                            <InputText

                                value={
                                    seo.twitterHandle || ""
                                }

                                onChange={(e) =>

                                    this.handleChange(
                                        "twitterHandle",
                                        e.target.value
                                    )

                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>

                                Google Verification

                            </label>

                            <InputText

                                value={
                                    seo.googleVerification || ""
                                }

                                onChange={(e) =>

                                    this.handleChange(
                                        "googleVerification",
                                        e.target.value
                                    )

                                }

                            />

                        </div>

                        <div className="p-field">

                            <label>

                                Robots Policy

                            </label>

                            <InputTextarea

                                rows={3}

                                value={
                                    seo.robotsPolicy || ""
                                }

                                onChange={(e) =>

                                    this.handleChange(
                                        "robotsPolicy",
                                        e.target.value
                                    )

                                }

                            />

                        </div>

                        <Button

                            label="Save SEO Settings"

                            icon="pi pi-save"

                            onClick={
                                this.saveSettings
                            }

                        />

                    </div>

                </div>

            </AdminLayout>
        );
    }
}

export default SeoSettings;
