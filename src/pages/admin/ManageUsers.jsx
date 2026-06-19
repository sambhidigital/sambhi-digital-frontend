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

    getAllUsers,

    deleteUser,

    enableUser,

    disableUser,

    lockUser,

    unlockUser,

    changeUserRole

} from "../../services/userService";

class ManageUsers
    extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            users: [],

            loading: true,

            globalFilter: "",

            selectedUser: null,

            viewDialog: false,

            deleteDialog: false
        };
    }

    toggleUserStatus = async (

        user,

        enabled

    ) => {

        try {

            if (enabled) {

                await enableUser(
                    user.id
                );

            } else {

                await disableUser(
                    user.id
                );
            }

            this.loadUsers();

        } catch (error) {

            console.error(error);
        }
    };

    toggleLock = async (

        user,

        locked

    ) => {

        try {

            if (locked) {

                await lockUser(
                    user.id
                );

            } else {

                await unlockUser(
                    user.id
                );
            }

            this.loadUsers();

        } catch (error) {

            console.error(error);
        }
    };

    changeRole = async (

        user,

        role

    ) => {

        try {

            await changeUserRole(

                user.id,

                role
            );

            this.loadUsers();

        } catch (error) {

            console.error(error);
        }
    };

    componentDidMount() {

        this.loadUsers();
    }

    loadUsers = async () => {

        try {

            const response =
                await getAllUsers();

            this.setState({

                users:
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

    openViewDialog =
        (user) => {

            this.setState({

                selectedUser:
                    user,

                viewDialog: true
            });
        };

    confirmDelete =
        (user) => {

            this.setState({

                selectedUser:
                    user,

                deleteDialog: true
            });
        };

    hideDialogs =
        () => {

            this.setState({

                viewDialog: false,

                deleteDialog: false,

                selectedUser: null
            });
        };

    deleteSelectedUser =
        async () => {

            try {

                await deleteUser(

                    this.state
                        .selectedUser
                        .id

                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Deleted",

                    detail:
                        "User deleted successfully"

                });

                this.hideDialogs();

                this.loadUsers();

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

    statusTemplate =
        (rowData) => {

            return (

                <span>

                    {

                        rowData.enabled

                            ? "Active"

                            : "Disabled"

                    }

                </span>
            );
        };

    roleTemplate =
        (rowData) => {

            return (

                rowData.role ||
                "N/A"
            );
        };

    actionTemplate = (

        rowData

    ) => {

        return (

            <div
                style={{
                    display: "flex",
                    gap: "5px",
                    flexWrap: "wrap"
                }}
            >

                <Button

                    icon="pi pi-eye"

                    className="p-button-info p-button-sm"

                    onClick={() =>

                        this.openViewDialog(
                            rowData
                        )

                    }

                />

                <Button

                    icon={
                        rowData.enabled

                            ? "pi pi-times"

                            : "pi pi-check"
                    }

                    className="p-button-warning p-button-sm"

                    onClick={() =>

                        this.toggleUserStatus(

                            rowData,

                            !rowData.enabled
                        )

                    }

                />

                <Button

                    icon={
                        rowData.accountLocked

                            ? "pi pi-lock-open"

                            : "pi pi-lock"
                    }

                    className="p-button-secondary p-button-sm"

                    onClick={() =>

                        this.toggleLock(

                            rowData,

                            !rowData.accountLocked
                        )

                    }

                />

                <Button

                    icon="pi pi-user-edit"

                    className="p-button-success p-button-sm"

                    onClick={() =>

                        this.changeRole(

                            rowData,

                            rowData.role ===
                                "ROLE_ADMIN"

                                ? "ROLE_USER"

                                : "ROLE_ADMIN"
                        )

                    }

                />

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

            users,

            loading,

            selectedUser,

            viewDialog,

            deleteDialog

        } = this.state;

        const header = (

            <div
                className="table-search"
            >

                <InputText

                    placeholder="Search users..."

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

                            Manage Users

                        </h1>

                    </div>

                    <DataTable

                        value={users}

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
                            field="firstName"
                            header="First Name"
                        />

                        <Column
                            field="lastName"
                            header="Last Name"
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

                            header="Role"

                            body={
                                this.roleTemplate
                            }

                        />

                        <Column

                            header="Status"

                            body={
                                this.statusTemplate
                            }

                        />

                        <Column

                            header="Actions"

                            body={
                                this.actionTemplate
                            }

                        />

                    </DataTable>

                    <Dialog

                        header="User Details"

                        visible={
                            viewDialog
                        }

                        style={{
                            width: "500px"
                        }}

                        onHide={
                            this.hideDialogs
                        }

                    >

                        {

                            selectedUser && (

                                <div>

                                    <p>

                                        <b>ID:</b>

                                        {" "}

                                        {
                                            selectedUser.id
                                        }

                                    </p>

                                    <p>

                                        <b>Name:</b>

                                        {" "}

                                        {
                                            selectedUser.firstName
                                        }

                                        {" "}

                                        {
                                            selectedUser.lastName
                                        }

                                    </p>

                                    <p>

                                        <b>Email:</b>

                                        {" "}

                                        {
                                            selectedUser.email
                                        }

                                    </p>

                                    <p>

                                        <b>Phone:</b>

                                        {" "}

                                        {
                                            selectedUser.phone
                                        }

                                    </p>

                                    <p>

                                        <b>Role:</b>

                                        {" "}

                                        {
                                            selectedUser.role
                                        }

                                    </p>

                                    <p>

                                        <b>Enabled:</b>

                                        {" "}

                                        {
                                            selectedUser.enabled
                                                ? "Yes"
                                                : "No"
                                        }

                                    </p>

                                    <p>

                                        <b>Locked:</b>

                                        {" "}

                                        {
                                            selectedUser.accountLocked
                                                ? "Yes"
                                                : "No"
                                        }

                                    </p>

                                </div>
                            )
                        }

                    </Dialog>

                    <Dialog

                        header="Delete User"

                        visible={
                            deleteDialog
                        }

                        style={{
                            width: "400px"
                        }}

                        onHide={
                            this.hideDialogs
                        }

                    >

                        <p>

                            Are you sure you want
                            to delete this user?

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
                                    this.deleteSelectedUser
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageUsers;