import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

import { InputSwitch } from "primereact/inputswitch";

import "../../styles/Admin.css";

import { Toast } from "primereact/toast";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getPortfolioProjects,

    addPortfolioProject,

    updatePortfolioProject,

    deletePortfolioProject

} from "../../services/portfolioService";

class ManagePortfolio extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            projects: [],

            loading: true,

            dialogVisible: false,

            confirmDeleteVisible: false,

            editMode: false,

            selectedProject: null,

            project: {

                id: null,

                title: "",

                category: "",

                clientName: "",

                description: "",

                technologies: "",

                projectUrl: "",

                imageUrl: "",

                featured: false
            },

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadProjects();
    }

    loadProjects = async () => {

        try {

            const response =
                await getPortfolioProjects();

            this.setState({

                projects:
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

            project: {

                id: null,

                title: "",

                category: "",

                clientName: "",

                description: "",

                technologies: "",

                projectUrl: "",

                imageUrl: "",

                featured: false
            }
        });
    };

    openEditDialog = (project) => {

        this.setState({

            dialogVisible: true,

            editMode: true,

            project: {
                ...project
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

            project: {

                ...this.state.project,

                [field]: value
            }
        });
    };

    saveProject = async () => {

        const {

            project,

            editMode

        } = this.state;

        if (
            !project.title ||
            !project.category ||
            !project.clientName
        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Validation",

                detail:
                    "Title, Category and Client Name are required"
            });

            return;
        }

        try {

            if (editMode) {

                await updatePortfolioProject(
                    project.id,
                    project
                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Updated",

                    detail:
                        "Project updated successfully"
                });

            } else {

                await addPortfolioProject(
                    project
                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Created",

                    detail:
                        "Project created successfully"
                });
            }

            this.hideDialog();

            this.loadProjects();

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

    confirmDelete = (project) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedProject: project
        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedProject: null
        });
    };

    deleteProject = async () => {

        try {

            await deletePortfolioProject(
                this.state.selectedProject.id
            );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "Project deleted successfully"
            });

            this.hideDeleteDialog();

            this.loadProjects();

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


            <div className="action-buttons">
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
            </div>

        );
    };

    render() {

        const {

            projects,

            loading,

            dialogVisible,

            confirmDeleteVisible,

            project,

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
                            Manage Portfolio
                        </h1>

                        <Button

                            label="Add Project"

                            icon="pi pi-plus"

                            onClick={
                                this.openNewDialog
                            }

                        />

                    </div>

                    <DataTable

                        value={projects}

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
                            header="Title"
                        />

                        <Column
                            field="category"
                            header="Category"
                        />

                        <Column
                            field="clientName"
                            header="Client"
                        />

                        <Column
                            field="featured"
                            header="Featured"
                        />

                        <Column
                            field="createdAt"
                            header="Created"
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
                                ? "Edit Project"
                                : "Add Project"
                        }

                        visible={
                            dialogVisible
                        }

                        style={{
                            width: "700px"
                        }}

                        onHide={
                            this.hideDialog
                        }

                    >

                        <div className="p-fluid">

                            <div className="p-field">

                                <label>
                                    Title
                                </label>

                                <InputText

                                    value={
                                        project.title
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
                                    Category
                                </label>

                                <InputText

                                    value={
                                        project.category
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "category",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Client Name
                                </label>

                                <InputText

                                    value={
                                        project.clientName
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "clientName",
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

                                    rows={5}

                                    value={
                                        project.description
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "description",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Technologies
                                </label>

                                <InputTextarea

                                    rows={3}

                                    value={
                                        project.technologies
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "technologies",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Project URL
                                </label>

                                <InputText

                                    value={
                                        project.projectUrl
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "projectUrl",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Image URL
                                </label>

                                <InputText

                                    value={
                                        project.imageUrl
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "imageUrl",
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
                                    Featured
                                </label>

                                <br />

                                <InputSwitch

                                    checked={
                                        project.featured
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "featured",
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
                                        this.saveProject
                                    }

                                />

                            </div>

                        </div>

                    </Dialog>

                    <Dialog

                        header="Delete Project"

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
                            to delete this project?

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
                                        this.deleteProject
                                    }

                                />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManagePortfolio;
