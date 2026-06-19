import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { InputText } from "primereact/inputtext";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { Toast } from "primereact/toast";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getAllAuditLogs

} from "../../services/auditLogService";

import "../../styles/Admin.css";

class ManageAuditLogs
    extends React.Component {

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            logs: [],

            loading: true,

            globalFilter: "",

            selectedLog: null,

            viewDialog: false
        };
    }

    formatDate = (rowData) => {

        return rowData.createdAt

            ? new Date(
                rowData.createdAt
            ).toLocaleString()

            : "-";
    };

    actionBadge = (rowData) => {

        let className = "audit-badge";

        if (
            rowData.action.includes("CREATE")
        ) {

            className += " success";
        }

        else if (
            rowData.action.includes("UPDATE")
        ) {

            className += " warning";
        }

        else if (
            rowData.action.includes("DELETE")
        ) {

            className += " danger";
        }

        return (

            <span
                className={className}
            >

                {rowData.action}

            </span>
        );
    };

    componentDidMount() {

        this.loadLogs();
    }

    loadLogs = async () => {

        try {

            const response =
                await getAllAuditLogs();

            this.setState({

                logs:
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
        (log) => {

            this.setState({

                selectedLog:
                    log,

                viewDialog: true
            });
        };

    hideDialog =
        () => {

            this.setState({

                viewDialog: false,

                selectedLog: null
            });
        };

    actionTemplate =
        (rowData) => {

            return (

                <div className="action-buttons">

                    <Button

                        icon="pi pi-eye"

                        className="p-button-info p-button-sm"

                        onClick={() =>

                            this.openViewDialog(
                                rowData
                            )

                        }

                    />
                </div>
            );
        };

    render() {

        const {

            logs,

            loading,

            selectedLog,

            viewDialog

        } = this.state;

        const header = (

            <div
                className="table-search"
            >

                <InputText

                    placeholder="Search logs..."

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

                            Audit Logs

                        </h1>

                    </div>

                    <DataTable

                        value={logs}

                        loading={loading}

                        paginator

                        rows={10}

                        responsiveLayout="scroll"

                        header={header}

                        globalFilter={
                            this.state.globalFilter
                        }

                    >

                        <Column

                            field="id"

                            header="ID"

                        />

                        <Column
                            header="Action"
                            body={this.actionBadge}
                        />

                        <Column
                            field="module"
                            header="Module"
                        />

                        <Column
                            field="recordName"
                            header="Record"
                        />

                        <Column
                            field="userEmail"
                            header="User Email"
                        />

                        <Column
                            header="Date"
                            body={this.formatDate}
                        />

                        <Column

                            header="View"

                            body={
                                this.actionTemplate
                            }

                        />

                    </DataTable>

                    <Dialog

                        header="Audit Log Details"

                        visible={
                            viewDialog
                        }

                        style={{
                            width: "500px"
                        }}

                        onHide={
                            this.hideDialog
                        }

                    >

                        {

                            selectedLog && (

                                <div>

                                    <p>

                                        <b>ID:</b>

                                        {" "}

                                        {
                                            selectedLog.id
                                        }

                                    </p>

                                    <p>

                                        <b>Action:</b>

                                        {" "}

                                        {
                                            selectedLog.action
                                        }

                                    </p>

                                    <p>
                                        <b>Module:</b>
                                        {" "}
                                        {selectedLog.module}
                                    </p>

                                    <p>
                                        <b>Record:</b>
                                        {" "}
                                        {selectedLog.recordName}
                                    </p>

                                    <p>
                                        <b>User Email:</b>
                                        {" "}
                                        {selectedLog.userEmail}
                                    </p>

                                    <p>

                                        <b>Date:</b>

                                        {" "}

                                        {
                                            selectedLog.createdAt
                                        }

                                    </p>

                                </div>
                            )
                        }

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageAuditLogs;
