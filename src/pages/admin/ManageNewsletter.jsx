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

import newsletterService
    from "../../services/newsletterService";

class ManageNewsletter extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            subscribers: [],

            loading: true,

            confirmDeleteVisible: false,

            selectedSubscriber: null,

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadSubscribers();
    }

    loadSubscribers = async () => {

        try {

            const response =
                await newsletterService
                    .getAllSubscribers();

            this.setState({

                subscribers:
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

    confirmDelete = (subscriber) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedSubscriber: subscriber
        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedSubscriber: null
        });
    };

    deleteSubscriber = async () => {

        try {

            await newsletterService
                .deleteSubscriber(

                    this.state
                        .selectedSubscriber.id

                );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "Subscriber removed successfully"

            });

            this.hideDeleteDialog();

            this.loadSubscribers();

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

            <Button

                icon="pi pi-trash"

                className="p-button-danger p-button-sm"

                onClick={() =>
                    this.confirmDelete(
                        rowData
                    )
                }

            />

        );
    };

    render() {

        const {

            subscribers,

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
                            Newsletter Subscribers
                        </h1>

                    </div>

                    <DataTable

                        value={subscribers}

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
                            field="email"
                            header="Email"
                        />

                        <Column
                            field="active"
                            header="Active"
                        />

                        <Column
                            field="subscribedAt"
                            header="Subscribed At"
                        />

                        <Column

                            header="Actions"

                            body={
                                this.actionTemplate
                            }

                        />

                    </DataTable>

                    <Dialog

                        header="Delete Subscriber"

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
                            to remove this subscriber?

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
                                    this.deleteSubscriber
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageNewsletter;