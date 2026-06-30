import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Button } from "primereact/button";

import { Dialog } from "primereact/dialog";

import "../../styles/Admin.css";
import { FILE_BASE_URL } from "../../services/api";

import { Toast } from "primereact/toast";

import { InputText }
    from "primereact/inputtext";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getAllFiles,

    deleteFile

}
    from "../../services/fileService";

class ManageFiles
    extends React.Component {

    getFileUrl = (rowData) => {
        if (!rowData || !rowData.fileUrl) return "";

        if (rowData.fileUrl.startsWith("http")) {
            return rowData.fileUrl;
        }

        return `${FILE_BASE_URL}${rowData.fileUrl}`;
    };

    constructor(props) {

        super(props);

        this.toast =
            React.createRef();

        this.state = {

            files: [],

            loading: true,

            selectedFile: null,

            deleteDialog: false,

            previewDialog: false,

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadFiles();
    }

    loadFiles = async () => {

        try {

            const response =
                await getAllFiles();

            this.setState({

                files:
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

    confirmDelete =
        (file) => {

            this.setState({

                selectedFile:
                    file,

                deleteDialog: true
            });
        };

    hideDeleteDialog =
        () => {

            this.setState({

                deleteDialog: false,

                selectedFile: null
            });
        };

    deleteSelectedFile =
        async () => {

            try {

                await deleteFile(

                    this.state
                        .selectedFile
                        .fileName

                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Deleted",

                    detail:
                        "File deleted successfully"

                });

                this.hideDeleteDialog();

                this.loadFiles();

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

    openPreview = (file) => {

        this.setState({

            selectedFile: file,

            previewDialog: true
        });
    };

    downloadTemplate = (rowData) => {
        return (
            <Button
                label="Download"
                className="p-button-text"
                onClick={() => {
                    window.open(
                        this.getFileUrl(rowData),
                        "_blank"
                    );
                }}
            />
        );
    };

    fileSizeTemplate =
        (rowData) => {

            return (

                (
                    rowData.fileSize /
                    1024
                ).toFixed(2)

                + " KB"
            );
        };

    actionTemplate =
        (rowData) => {

            return (

                <>

                    <Button

                        icon="pi pi-eye"

                        className="p-button-success p-button-sm"

                        onClick={() =>

                            this.openPreview(
                                rowData
                            )

                        }

                    />

                    <Button
                        icon="pi pi-download"
                        className="p-button-info p-button-sm"
                        style={{ marginLeft: "8px" }}
                        onClick={() =>
                            window.open(
                                this.getFileUrl(rowData),
                                "_blank"
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

            files,

            loading,

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

                <div className="admin-page">

                    <div className="admin-page-header">

                        <h1>
                            File Manager
                        </h1>

                    </div>

                    <DataTable

                        value={files}

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

                            header="Preview"

                            body={(rowData) => (

                                rowData.fileType ===
                                    "RESUME"

                                    ?

                                    <i
                                        className="pi pi-file-pdf"
                                    />

                                    :

                                    <img
                                        src={this.getFileUrl(rowData)}
                                        alt="Preview"
                                        className="file-preview-thumb"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            objectFit: "cover",
                                            borderRadius: "6px"
                                        }}
                                    />

                            )}

                        />

                        <Column

                            field="fileName"

                            header="File Name"

                        />

                        <Column

                            field="fileType"

                            header="Type"

                        />

                        <Column

                            header="Size"

                            body={
                                this.fileSizeTemplate
                            }

                        />

                        <Column

                            header="Download"

                            body={
                                this.downloadTemplate
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

                        header="Delete File"

                        visible={
                            deleteDialog
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
                            to delete this file?

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
                                    this.deleteSelectedFile
                                }

                            />

                        </div>

                    </Dialog>

                    <Dialog

                        header="File Preview"

                        visible={
                            this.state.previewDialog
                        }

                        style={{
                            width: "700px"
                        }}

                        onHide={() =>

                            this.setState({

                                previewDialog: false
                            })

                        }

                    >

                        {

                            this.state.selectedFile && (

                                this.state.selectedFile.fileType ===
                                    "RESUME"

                                    ?

                                    <Button

                                        label="Download Resume"

                                        icon="pi pi-download"

                                        onClick={() =>

                                            window.open(
                                                this.getFileUrl(this.state.selectedFile),
                                                "_blank"
                                            )

                                        }

                                    />

                                    :

                                    <img
                                        src={this.getFileUrl(this.state.selectedFile)}
                                        alt="Preview"
                                        className="file-preview-large"
                                        style={{
                                            width: "100%"
                                        }}
                                    />

                            )
                        }

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageFiles;
