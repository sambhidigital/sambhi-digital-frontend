import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { Toast } from "primereact/toast";

import { InputText }
    from "primereact/inputtext";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getApplications,

    deleteApplication

} from "../../services/careerService";

import "../../styles/Admin.css";

class ManageApplications
    extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            applications: [],

            loading: true,

            confirmDeleteVisible: false,

            selectedApplication: null,

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadApplications();
    }

    loadApplications = async () => {

        try {

            const response =
                await getApplications();

            this.setState({

                applications:
                    response.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false
            });
        }
    };

    confirmDelete = (
        application
    ) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedApplication:
                application
        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedApplication: null
        });
    };

    deleteSelectedApplication =
        async () => {

            try {

                await deleteApplication(

                    this.state
                        .selectedApplication
                        .id

                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Deleted",

                    detail:
                        "Application deleted successfully"

                });

                this.hideDeleteDialog();

                this.loadApplications();

            } catch (error) {

                console.error(error);

                this.toast.current.show({

                    severity: "error",

                    summary: "Error",

                    detail:
                        "Delete failed"

                });
            }
        };

    resumeTemplate = (
        rowData
    ) => {

        if (
            !rowData.resumePath
        ) {

            return (
                <span>
                    No Resume
                </span>
            );
        }

        return (

            <Button

                label="View Resume"

                icon="pi pi-file-pdf"

                className="p-button-sm p-button-info"

                onClick={() =>

                    window.open(

                        `http://localhost:8080${rowData.resumePath}`,

                        "_blank"
                    )

                }

            />
        );
    };
    careerTemplate =
        (rowData) => {

            return (

                rowData.career
                    ?.title ||

                "N/A"
            );
        };

    actionTemplate =
        (rowData) => {

            return (

                <div className="action-buttons">

                    <Button

                        icon="pi pi-trash"

                        className="p-button-danger p-button-sm"

                        onClick={() =>
                            this.confirmDelete(
                                rowData
                            )
                        }

                    />
                </div>
            );
        };

    render() {

        const {

            applications,

            loading,

            confirmDeleteVisible

        } = this.state;

        const header = (

            <div
                className="table-search"
            >

                <InputText

                    placeholder="Search..."

                    value={
                        this.state.globalFilter
                    }

                    onChange={(e) =>

                        this.setState({

                            globalFilter:
                                e.target.value

                        })

                    }

                />

            </div>
        );

        return (

            <AdminLayout>

                <Toast
                    ref={this.toast}
                />

                <div className="admin-page">

                    <div className="admin-page-header">

                        <h1>
                            Job Applications
                        </h1>

                    </div>

                    <DataTable

                        value={applications}

                        loading={loading}

                        paginator

                        rows={10}

                        globalFilter={
                            this.state.globalFilter
                        }

                        header={header}

                        responsiveLayout="scroll"

                    >

                        <Column
                            field="id"
                            header="ID"
                        />

                        <Column
                            field="fullName"
                            header="Applicant"
                        />

                        <Column
                            field="email"
                            header="Email"
                        />

                        <Column
                            field="phone"
                            header="Phone"
                        />

                        <Column

                            header="Career"

                            body={
                                this.careerTemplate
                            }

                        />

                        <Column

                            header="Resume"

                            body={
                                this.resumeTemplate
                            }

                        />

                        <Column
                            field="appliedAt"
                            header="Applied Date"
                        />

                        <Column

                            header="Actions"

                            body={
                                this.actionTemplate
                            }

                        />

                    </DataTable>

                    <Dialog

                        header="Delete Application"

                        visible={
                            confirmDeleteVisible
                        }

                        style={{
                            width: "400px"
                        }}

                        onHide={
                            this.hideDeleteDialog
                        }

                    >

                        <p>

                            Are you sure you want
                            to delete this application?

                        </p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "10px"
                            }}
                        >

                            <Button

                                label="No"

                                className="p-button-secondary"

                                onClick={
                                    this.hideDeleteDialog
                                }

                            />

                            <Button

                                label="Yes"

                                className="p-button-danger"

                                onClick={
                                    this.deleteSelectedApplication
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageApplications;