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

import faqService
    from "../../services/faqService";

class ManageFaqs extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            faqs: [],

            loading: true,

            dialogVisible: false,

            confirmDeleteVisible: false,

            editMode: false,

            selectedFaq: null,

            faq: {

                id: null,

                question: "",

                answer: "",

                displayOrder: 0,

                active: true
            },

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadFaqs();
    }

    loadFaqs = async () => {

        try {

            const response =
                await faqService
                    .getAllFaqs();

            this.setState({

                faqs:
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

            faq: {

                id: null,

                question: "",

                answer: "",

                displayOrder: 0,

                active: true
            }
        });
    };

    openEditDialog = (faq) => {

        this.setState({

            dialogVisible: true,

            editMode: true,

            faq: {
                ...faq
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

            faq: {

                ...this.state.faq,

                [field]: value
            }
        });
    };

    saveFaq = async () => {

        const {

            faq,

            editMode

        } = this.state;

        if (

            !faq.question ||

            !faq.answer

        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Validation",

                detail:
                    "Question and Answer are required"

            });

            return;
        }

        try {

            if (editMode) {

                await faqService
                    .updateFaq(

                        faq.id,

                        faq

                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Updated",

                    detail:
                        "FAQ updated successfully"

                });

            } else {

                await faqService
                    .createFaq(

                        faq

                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Created",

                    detail:
                        "FAQ created successfully"

                });
            }

            this.hideDialog();

            this.loadFaqs();

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

    confirmDelete = (faq) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedFaq: faq

        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedFaq: null

        });
    };

    deleteFaq = async () => {

        try {

            await faqService
                .deleteFaq(

                    this.state.selectedFaq.id

                );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "FAQ deleted successfully"

            });

            this.hideDeleteDialog();

            this.loadFaqs();

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

            faqs,

            loading,

            dialogVisible,

            confirmDeleteVisible,

            faq,

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
                            Manage FAQs
                        </h1>

                        <Button

                            label="Add FAQ"

                            icon="pi pi-plus"

                            onClick={
                                this.openNewDialog
                            }

                        />

                    </div>

                    <DataTable

                        value={faqs}

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
                            field="question"
                            header="Question"
                        />

                        <Column
                            field="displayOrder"
                            header="Order"
                        />

                        <Column
                            field="active"
                            header="Active"
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
                                ? "Edit FAQ"
                                : "Add FAQ"
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
                                    Question
                                </label>

                                <InputText

                                    value={
                                        faq.question
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "question",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Answer
                                </label>

                                <InputTextarea

                                    rows={6}

                                    value={
                                        faq.answer
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "answer",
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
                                        faq.displayOrder
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
                                    Active
                                </label>

                                <br />

                                <InputSwitch

                                    checked={
                                        faq.active
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "active",
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
                                        this.saveFaq
                                    }

                                />

                            </div>

                        </div>

                    </Dialog>

                    <Dialog

                        header="Delete FAQ"

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
                            to delete this FAQ?

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
                                    this.deleteFaq
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageFaqs;