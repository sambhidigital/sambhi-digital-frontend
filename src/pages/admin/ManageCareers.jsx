import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

import { InputSwitch } from "primereact/inputswitch";

import { Toast } from "primereact/toast";

import "../../styles/Admin.css";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getAllJobs,

    createJob,

    updateJob,

    deleteJob

} from "../../services/careerService";

class ManageCareers extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            careers: [],

            loading: true,

            dialogVisible: false,

            confirmDeleteVisible: false,

            editMode: false,

            selectedCareer: null,

            career: {

                id: null,

                title: "",

                location: "",

                jobType: "",

                experience: "",

                description: "",

                active: true
            },

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadCareers();
    }

    loadCareers = async () => {

        try {

            const response =
                await getAllJobs();

            this.setState({

                careers:
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

    openNewDialog = () => {

        this.setState({

            dialogVisible: true,

            editMode: false,

            career: {

                id: null,

                title: "",

                location: "",

                jobType: "",

                experience: "",

                description: "",

                active: true
            }
        });
    };

    openEditDialog = (career) => {

        this.setState({

            dialogVisible: true,

            editMode: true,

            career: {
                ...career
            }
        });
    };

    hideDialog = () => {

        this.setState({

            dialogVisible: false
        });
    };

    handleChange = (
        field,
        value
    ) => {

        this.setState({

            career: {

                ...this.state.career,

                [field]: value
            }
        });
    };

    saveCareer = async () => {

        const {

            career,

            editMode

        } = this.state;

        if (

            !career.title ||

            !career.location ||

            !career.jobType ||

            !career.experience ||

            !career.description

        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Validation",

                detail:
                    "Please fill all required fields"

            });

            return;
        }

        try {

            if (editMode) {

                await updateJob(

                    career.id,

                    career

                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Updated",

                    detail:
                        "Career updated successfully"

                });

            } else {

                await createJob(
                    career
                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Created",

                    detail:
                        "Career created successfully"

                });
            }

            this.hideDialog();

            this.loadCareers();

        } catch (error) {

            console.error(error);

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail:
                    "Operation failed"

            });
        }
    };

    confirmDelete = (career) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedCareer: career

        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedCareer: null

        });
    };

    deleteCareer = async () => {

        try {

            await deleteJob(

                this.state
                    .selectedCareer.id

            );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "Career deleted successfully"

            });

            this.hideDeleteDialog();

            this.loadCareers();

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

    actionTemplate = (rowData) => {

        return (

            <>
                <Button

                    icon="pi pi-pencil"

                    className="p-button-warning p-button-sm"

                    onClick={() =>
                        this.openEditDialog(
                            rowData
                        )
                    }

                />

                <Button

                    icon="pi pi-trash"

                    className="p-button-danger p-button-sm"

                    style={{
                        marginLeft: "8px"
                    }}

                    onClick={() =>
                        this.confirmDelete(
                            rowData
                        )
                    }

                />
            </>
        );
    };

    render() {

        const {

            careers,

            loading,

            dialogVisible,

            confirmDeleteVisible,

            career,

            editMode

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
                            Manage Careers
                        </h1>

                        <Button

                            label="Add Job"

                            icon="pi pi-plus"

                            onClick={
                                this.openNewDialog
                            }

                        />

                    </div>

                    <DataTable

                        value={careers}

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
                            field="title"
                            header="Job Title"
                        />

                        <Column
                            field="location"
                            header="Location"
                        />

                        <Column
                            field="jobType"
                            header="Job Type"
                        />

                        <Column
                            field="experience"
                            header="Experience"
                        />

                        <Column
                            field="active"
                            header="Active"
                        />

                        <Column

                            header="Actions"

                            body={
                                this.actionTemplate
                            }

                        />

                    </DataTable>

                    <Dialog

                        header={
                            editMode
                                ? "Edit Career"
                                : "Add Career"
                        }

                        visible={
                            dialogVisible
                        }

                        style={{
                            width: "800px"
                        }}

                        onHide={
                            this.hideDialog
                        }

                    >

                        <div className="p-fluid">

                            <div className="p-field">

                                <label>
                                    Job Title
                                </label>

                                <InputText

                                    value={
                                        career.title
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "title",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Location
                                </label>

                                <InputText

                                    value={
                                        career.location
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "location",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Job Type
                                </label>

                                <InputText

                                    value={
                                        career.jobType
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "jobType",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Experience
                                </label>

                                <InputText

                                    value={
                                        career.experience
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "experience",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Description
                                </label>

                                <InputTextarea

                                    rows={8}

                                    value={
                                        career.description
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "description",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div
                                style={{
                                    marginTop: "20px"
                                }}
                            >

                                <label>
                                    Active
                                </label>

                                <br />

                                <InputSwitch

                                    checked={
                                        career.active
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "active",
                                            e.value
                                        )
                                    }

                                />

                            </div>

                            <div
                                style={{
                                    marginTop: "25px"
                                }}
                            >

                                <Button

                                    label="Save"

                                    icon="pi pi-check"

                                    onClick={
                                        this.saveCareer
                                    }

                                />

                            </div>

                        </div>

                    </Dialog>

                    <Dialog

                        header="Delete Career"

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
                            to delete this job?

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
                                    this.deleteCareer
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageCareers;