import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

import { InputNumber } from "primereact/inputnumber";

import { InputSwitch } from "primereact/inputswitch";

import { Toast } from "primereact/toast";

import "../../styles/Admin.css";
import AdminLayout
    from "../../components/admin/AdminLayout";

import testimonialService
    from "../../services/testimonialService";

class ManageTestimonials extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            testimonials: [],

            loading: true,

            dialogVisible: false,

            confirmDeleteVisible: false,

            editMode: false,

            selectedTestimonial: null,

            testimonial: {

                id: null,

                name: "",

                designation: "",

                company: "",

                message: "",

                imageUrl: "",

                rating: 5,

                featured: false
            },

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadTestimonials();
    }

    loadTestimonials = async () => {

        try {

            const response =
                await testimonialService
                    .getAllTestimonials();

            this.setState({

                testimonials:
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

            testimonial: {

                id: null,

                name: "",

                designation: "",

                company: "",

                message: "",

                imageUrl: "",

                rating: 5,

                featured: false
            }
        });
    };

    openEditDialog = (testimonial) => {

        this.setState({

            dialogVisible: true,

            editMode: true,

            testimonial: {
                ...testimonial
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

            testimonial: {

                ...this.state.testimonial,

                [field]: value
            }
        });
    };

    saveTestimonial = async () => {

        const {

            testimonial,

            editMode

        } = this.state;

        if (

            !testimonial.name ||

            !testimonial.message

        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Validation",

                detail:
                    "Name and Message are required"

            });

            return;
        }

        try {

            if (editMode) {

                await testimonialService
                    .updateTestimonial(

                        testimonial.id,

                        testimonial

                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Updated",

                    detail:
                        "Testimonial updated successfully"

                });

            } else {

                await testimonialService
                    .createTestimonial(

                        testimonial

                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Created",

                    detail:
                        "Testimonial created successfully"

                });
            }

            this.hideDialog();

            this.loadTestimonials();

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

    confirmDelete = (testimonial) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedTestimonial: testimonial

        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedTestimonial: null

        });
    };

    deleteTestimonial = async () => {

        try {

            await testimonialService
                .deleteTestimonial(

                    this.state.selectedTestimonial.id

                );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "Testimonial deleted successfully"

            });

            this.hideDeleteDialog();

            this.loadTestimonials();

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

            testimonials,

            loading,

            dialogVisible,

            confirmDeleteVisible,

            testimonial,

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
                            Manage Testimonials
                        </h1>

                        <Button

                            label="Add Testimonial"

                            icon="pi pi-plus"

                            onClick={
                                this.openNewDialog
                            }

                        />

                    </div>

                    <DataTable

                        value={testimonials}

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
                            field="designation"
                            header="Designation"
                        />

                        <Column
                            field="company"
                            header="Company"
                        />

                        <Column
                            field="rating"
                            header="Rating"
                        />

                        <Column
                            field="featured"
                            header="Featured"
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
                                ? "Edit Testimonial"
                                : "Add Testimonial"
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
                                    Name
                                </label>

                                <InputText

                                    value={
                                        testimonial.name
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "name",
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
                                        testimonial.designation
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
                                    Company
                                </label>

                                <InputText

                                    value={
                                        testimonial.company
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "company",
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
                                        testimonial.imageUrl
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
                                    Rating
                                </label>

                                <InputNumber

                                    min={1}

                                    max={5}

                                    value={
                                        testimonial.rating
                                    }

                                    onValueChange={(e) =>
                                        this.handleChange(
                                            "rating",
                                            e.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Message
                                </label>

                                <InputTextarea

                                    rows={5}

                                    value={
                                        testimonial.message
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "message",
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
                                        testimonial.featured
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
                                        this.saveTestimonial
                                    }

                                />

                            </div>

                        </div>

                    </Dialog>

                    <Dialog

                        header="Delete Testimonial"

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
                            to delete this testimonial?

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
                                    this.deleteTestimonial
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageTestimonials;