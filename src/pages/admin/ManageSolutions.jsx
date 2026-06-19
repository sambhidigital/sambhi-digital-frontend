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

import solutionService
    from "../../services/solutionService";

class ManageSolutions extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            solutions: [],

            loading: true,

            dialogVisible: false,

            confirmDeleteVisible: false,

            editMode: false,

            selectedSolution: null,

            solution: {

                id: null,

                title: "",

                industry: "",

                description: "",

                imageUrl: "",

                featured: false
            },

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadSolutions();
    }

    loadSolutions = async () => {

        try {

            const response =
                await solutionService
                    .getAllSolutions();

            this.setState({

                solutions:
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

            solution: {

                id: null,

                title: "",

                industry: "",

                description: "",

                imageUrl: "",

                featured: false
            }
        });
    };

    openEditDialog = (solution) => {

        this.setState({

            dialogVisible: true,

            editMode: true,

            solution: {
                ...solution
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

            solution: {

                ...this.state.solution,

                [field]: value
            }
        });
    };

    saveSolution = async () => {

        const {

            solution,

            editMode

        } = this.state;

        if (
            !solution.title ||
            !solution.description
        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Validation",

                detail:
                    "Title and Description are required"
            });

            return;
        }

        try {

            if (editMode) {

                await solutionService
                    .updateSolution(
                        solution.id,
                        solution
                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Updated",

                    detail:
                        "Solution updated successfully"
                });

            } else {

                await solutionService
                    .createSolution(
                        solution
                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Created",

                    detail:
                        "Solution created successfully"
                });
            }

            this.hideDialog();

            this.loadSolutions();

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

    confirmDelete = (solution) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedSolution: solution
        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedSolution: null
        });
    };

    deleteSolution = async () => {

        try {

            await solutionService
                .deleteSolution(

                    this.state
                        .selectedSolution
                        .id

                );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "Solution deleted successfully"
            });

            this.hideDeleteDialog();

            this.loadSolutions();

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

            solutions,

            loading,

            dialogVisible,

            confirmDeleteVisible,

            solution,

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
                            Manage Solutions
                        </h1>

                        <Button

                            label="Add Solution"

                            icon="pi pi-plus"

                            onClick={
                                this.openNewDialog
                            }

                        />

                    </div>

                    <DataTable

                        value={solutions}

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
                            field="industry"
                            header="Industry"
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
                                ? "Edit Solution"
                                : "Add Solution"
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
                                        solution.title
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
                                    Industry
                                </label>

                                <InputText

                                    value={
                                        solution.industry
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "industry",
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
                                        solution.description
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
                                    Image URL
                                </label>

                                <InputText

                                    value={
                                        solution.imageUrl
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
                                        solution.featured
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
                                        this.saveSolution
                                    }

                                />

                            </div>

                        </div>

                    </Dialog>

                    <Dialog

                        header="Delete Solution"

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

                            Are you sure
                            you want to delete
                            this solution?

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
                                    this.deleteSolution
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageSolutions;
