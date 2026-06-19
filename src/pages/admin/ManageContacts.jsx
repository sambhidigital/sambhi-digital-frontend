import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { Toast } from "primereact/toast";

import "../../styles/Admin.css";

import { InputText }
    from "primereact/inputtext";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getAllMessages,

    deleteMessage

} from "../../services/contactService";

class ManageContacts
    extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            contacts: [],

            loading: true,

            selectedContact: null,

            viewDialog: false,

            deleteDialog: false,

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadContacts();
    }

    loadContacts = async () => {

        try {

            const response =
                await getAllMessages();

            console.log(
                "CONTACT API RESPONSE",
                response.data
            );

            console.log(
                "CONTACT DATA",
                response.data.data
            );

            this.setState({

                contacts:
                    response.data || [],

                loading: false
            });

        } catch (error) {

            console.error(error);
        }
    };

    openViewDialog = (
        contact
    ) => {

        this.setState({

            selectedContact:
                contact,

            viewDialog: true
        });
    };

    confirmDelete = (
        contact
    ) => {

        this.setState({

            selectedContact:
                contact,

            deleteDialog: true
        });
    };

    deleteMessage = async () => {

        try {

            await deleteMessage(
                this.state
                    .selectedContact.id
            );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "Message deleted successfully"
            });

            this.setState({

                deleteDialog: false
            });

            this.loadContacts();

        } catch (error) {

            console.error(error);
        }
    };

    actionTemplate = (
        rowData
    ) => {

        return (

            <>

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

            contacts,

            loading,

            selectedContact,

            viewDialog,

            deleteDialog

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

                <h2>
                    Contact Messages
                </h2>

                <DataTable

                    value={contacts}

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
                        field="name"
                        header="Name"
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
                        field="subject"
                        header="Subject"
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

                    header="Contact Message"

                    visible={
                        viewDialog
                    }

                    style={{
                        width: "700px"
                    }}

                    onHide={() =>
                        this.setState({
                            viewDialog: false
                        })
                    }

                >

                    {

                        selectedContact && (

                            <div>

                                <h3>
                                    {
                                        selectedContact.subject
                                    }
                                </h3>

                                <p>

                                    <b>Name:</b>

                                    {" "}

                                    {
                                        selectedContact.name
                                    }

                                </p>

                                <p>

                                    <b>Email:</b>

                                    {" "}

                                    {
                                        selectedContact.email
                                    }

                                </p>

                                <p>

                                    <b>Phone:</b>

                                    {" "}

                                    {
                                        selectedContact.phone
                                    }

                                </p>

                                <hr />

                                <p>

                                    {
                                        selectedContact.message
                                    }

                                </p>

                            </div>
                        )
                    }

                </Dialog>

                <Dialog

                    header="Delete Message"

                    visible={
                        deleteDialog
                    }

                    style={{
                        width: "400px"
                    }}

                    onHide={() =>
                        this.setState({
                            deleteDialog: false
                        })
                    }

                >

                    <p>

                        Delete this message?

                    </p>

                    <Button

                        label="Delete"

                        className="p-button-danger"

                        onClick={
                            this.deleteMessage
                        }

                    />

                </Dialog>

            </AdminLayout>
        );
    }
}

export default ManageContacts;
