import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { Toast } from "primereact/toast";

import { InputText } from "primereact/inputtext";

import "../../styles/Admin.css";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getAllRoles,

    createRole,

    updateRole,

    deleteRole

}
    from "../../services/roleService";

class ManageRoles
    extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.emptyRole = {

            id: null,

            roleName: "",

            description: ""
        };

        this.state = {

            roles: [],

            role:
                this.emptyRole,

            loading: true,

            roleDialog: false,

            deleteDialog: false,

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadRoles();
    }

    loadRoles = async () => {

        try {

            const response =
                await getAllRoles();

            this.setState({

                roles:
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

    openNew = () => {

        this.setState({

            role:
                this.emptyRole,

            roleDialog: true
        });
    };

    editRole =
        (role) => {

            this.setState({

                role:
                    { ...role },

                roleDialog: true
            });
        };

    hideDialogs =
        () => {

            this.setState({

                roleDialog: false,

                deleteDialog: false
            });
        };

    handleInputChange =
        (e, name) => {

            const value =
                e.target.value;

            let role = {

                ...this.state.role
            };

            role[name] =
                value;

            this.setState({
                role
            });
        };

    saveRole =
        async () => {

            try {

                const {
                    role
                } = this.state;

                if (
                    role.id
                ) {

                    await updateRole(

                        role.id,

                        role

                    );

                    this.toast.current.show({

                        severity: "success",

                        summary: "Updated",

                        detail:
                            "Role updated successfully"

                    });

                } else {

                    await createRole(
                        role
                    );

                    this.toast.current.show({

                        severity: "success",

                        summary: "Created",

                        detail:
                            "Role created successfully"

                    });
                }

                this.hideDialogs();

                this.loadRoles();

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

    confirmDelete =
        (role) => {

            this.setState({

                role,

                deleteDialog: true
            });
        };

    deleteSelectedRole =
        async () => {

            try {

                await deleteRole(

                    this.state.role.id

                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Deleted",

                    detail:
                        "Role deleted successfully"

                });

                this.hideDialogs();

                this.loadRoles();

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

    actionTemplate =
        (rowData) => {

            return (

                <>

                    <Button

                        icon="pi pi-pencil"

                        className="p-button-warning p-button-sm"

                        onClick={() =>
                            this.editRole(
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

            roles,

            role,

            loading,

            roleDialog,

            deleteDialog

        } = this.state;

        const header = (

            <div
                className="table-search"
            >

                <InputText

                    placeholder="Search roles..."

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

                            Manage Roles

                        </h1>

                        <Button

                            label="Add Role"

                            icon="pi pi-plus"

                            onClick={
                                this.openNew
                            }

                        />

                    </div>

                    <DataTable

                        value={roles}

                        loading={loading}

                        paginator

                        rows={10}

                        header={header}

                        globalFilter={
                            this.state.globalFilter
                        }

                        responsiveLayout="scroll"

                    >

                        <Column

                            field="id"

                            header="ID"

                        />

                        <Column

                            field="roleName"

                            header="Role Name"

                        />

                        <Column

                            field="description"

                            header="Description"

                        />

                        <Column

                            header="Actions"

                            body={
                                this.actionTemplate
                            }

                        />

                    </DataTable>

                    <Dialog

                        visible={
                            roleDialog
                        }

                        style={{
                            width: "500px"
                        }}

                        header={
                            role.id
                                ? "Edit Role"
                                : "New Role"
                        }

                        modal

                        onHide={
                            this.hideDialogs
                        }

                    >

                        <div className="field">

                            <label>

                                Role Name

                            </label>

                            <InputText

                                value={
                                    role.roleName
                                }

                                onChange={(e) =>

                                    this.handleInputChange(
                                        e,
                                        "roleName"
                                    )

                                }

                            />

                        </div>

                        <div className="field">

                            <label>

                                Description

                            </label>

                            <InputText

                                value={
                                    role.description
                                }

                                onChange={(e) =>

                                    this.handleInputChange(
                                        e,
                                        "description"
                                    )

                                }

                            />

                        </div>

                        <div
                            style={{
                                marginTop: "20px"
                            }}
                        >

                            <Button

                                label="Save"

                                icon="pi pi-check"

                                onClick={
                                    this.saveRole
                                }

                            />

                        </div>

                    </Dialog>

                    <Dialog

                        visible={
                            deleteDialog
                        }

                        style={{
                            width: "400px"
                        }}

                        header="Delete Role"

                        modal

                        onHide={
                            this.hideDialogs
                        }

                    >

                        <p>

                            Are you sure you want
                            to delete this role?

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
                                    this.hideDialogs
                                }

                            />

                            <Button

                                label="Yes"

                                className="p-button-danger"

                                onClick={
                                    this.deleteSelectedRole
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageRoles;