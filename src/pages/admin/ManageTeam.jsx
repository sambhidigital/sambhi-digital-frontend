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

import teamService
    from "../../services/teamService";

class ManageTeam extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            teamMembers: [],

            loading: true,

            dialogVisible: false,

            confirmDeleteVisible: false,

            editMode: false,

            selectedMember: null,

            member: {

                id: null,

                fullName: "",

                designation: "",

                bio: "",

                imageUrl: "",

                linkedinUrl: "",

                githubUrl: "",

                email: "",

                featured: true,

                displayOrder: 0
            },

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadTeamMembers();
    }

    loadTeamMembers = async () => {

        try {

            const response =
                await teamService
                    .getAllTeamMembers();

            this.setState({

                teamMembers:
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

            member: {

                id: null,

                fullName: "",

                designation: "",

                bio: "",

                imageUrl: "",

                linkedinUrl: "",

                githubUrl: "",

                email: "",

                featured: true,

                displayOrder: 0
            }
        });
    };

    openEditDialog = (member) => {

        this.setState({

            dialogVisible: true,

            editMode: true,

            member: {
                ...member
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

            member: {

                ...this.state.member,

                [field]: value
            }
        });
    };

    saveMember = async () => {

        const {

            member,

            editMode

        } = this.state;

        if (

            !member.fullName ||

            !member.designation

        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Validation",

                detail:
                    "Full Name and Designation are required"

            });

            return;
        }

        try {

            if (editMode) {

                await teamService
                    .updateTeamMember(

                        member.id,

                        member

                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Updated",

                    detail:
                        "Team member updated successfully"

                });

            } else {

                await teamService
                    .createTeamMember(

                        member

                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Created",

                    detail:
                        "Team member created successfully"

                });
            }

            this.hideDialog();

            this.loadTeamMembers();

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

    confirmDelete = (member) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedMember: member

        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedMember: null

        });
    };

    deleteMember = async () => {

        try {

            await teamService
                .deleteTeamMember(

                    this.state.selectedMember.id

                );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "Team member deleted successfully"

            });

            this.hideDeleteDialog();

            this.loadTeamMembers();

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

            teamMembers,

            loading,

            dialogVisible,

            confirmDeleteVisible,

            member,

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
                            Manage Team
                        </h1>

                        <Button

                            label="Add Team Member"

                            icon="pi pi-plus"

                            onClick={
                                this.openNewDialog
                            }

                        />

                    </div>

                    <DataTable

                        value={teamMembers}

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
                            header="Full Name"
                        />

                        <Column
                            field="designation"
                            header="Designation"
                        />

                        <Column
                            field="email"
                            header="Email"
                        />

                        <Column
                            field="featured"
                            header="Featured"
                        />

                        <Column
                            field="displayOrder"
                            header="Order"
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
                                ? "Edit Team Member"
                                : "Add Team Member"
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
                                    Full Name
                                </label>

                                <InputText

                                    value={
                                        member.fullName
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "fullName",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Designation
                                </label>

                                <InputText

                                    value={
                                        member.designation
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "designation",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Email
                                </label>

                                <InputText

                                    value={
                                        member.email
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "email",
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
                                        member.imageUrl
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "imageUrl",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    LinkedIn URL
                                </label>

                                <InputText

                                    value={
                                        member.linkedinUrl
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "linkedinUrl",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    GitHub URL
                                </label>

                                <InputText

                                    value={
                                        member.githubUrl
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "githubUrl",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Bio
                                </label>

                                <InputTextarea

                                    rows={5}

                                    value={
                                        member.bio
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "bio",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Display Order
                                </label>

                                <InputText

                                    value={
                                        member.displayOrder
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "displayOrder",
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
                                        member.featured
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
                                        this.saveMember
                                    }

                                />

                            </div>

                        </div>

                    </Dialog>

                    <Dialog

                        header="Delete Team Member"

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
                            to delete this team member?

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
                                    this.deleteMember
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageTeam;
