import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Button } from "primereact/button";

import { Toast } from "primereact/toast";

import { Tag } from "primereact/tag";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getAllNotifications,

    markAsRead

} from "../../services/notificationService";

import "../../styles/Admin.css";

class Notifications
    extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            notifications: [],

            loading: true
        };
    }

    componentDidMount() {

        this.loadNotifications();
    }

    loadNotifications = async () => {

        try {

            const response =

                await getAllNotifications();

            this.setState({

                notifications:
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

    handleMarkAsRead =
        async (notification) => {

            try {

                await markAsRead(
                    notification.id
                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Success",

                    detail:
                        "Notification marked as read",

                    life: 3000
                });

                this.loadNotifications();

            } catch (error) {

                console.error(error);

                this.toast.current.show({

                    severity: "error",

                    summary: "Error",

                    detail:
                        "Operation failed",

                    life: 3000
                });
            }
        };

    statusTemplate =
        (rowData) => {

            return rowData.isRead

                ?

                <Tag
                    value="READ"
                    severity="success"
                />

                :

                <Tag
                    value="UNREAD"
                    severity="danger"
                />;
        };

    actionTemplate =
        (rowData) => {

            if (
                rowData.isRead
            ) {

                return (

                    <span>

                        Completed

                    </span>
                );
            }

            return (

                <Button

                    label="Mark Read"

                    icon="pi pi-check"

                    className="p-button-success p-button-sm"

                    onClick={() =>

                        this.handleMarkAsRead(
                            rowData
                        )

                    }

                />
            );
        };

    render() {

        const {

            notifications,

            loading

        } = this.state;

        return (

            <AdminLayout>

                <Toast
                    ref={this.toast}
                />

                <div className="admin-page">

                    <div className="admin-page-header">

                        <h1>

                            Notifications

                        </h1>

                    </div>

                    <DataTable

                        value={
                            notifications
                        }

                        loading={
                            loading
                        }

                        paginator

                        rows={10}

                        responsiveLayout="scroll"

                    >

                        <Column

                            field="title"

                            header="Title"

                        />

                        <Column

                            field="message"

                            header="Message"

                        />

                        <Column

                            field="type"

                            header="Type"

                        />

                        <Column

                            field="createdAt"

                            header="Date"

                        />

                        <Column

                            header="Status"

                            body={
                                this.statusTemplate
                            }

                        />

                        <Column

                            header="Action"

                            body={
                                this.actionTemplate
                            }

                        />

                    </DataTable>

                </div>

            </AdminLayout>
        );
    }
}

export default Notifications;
