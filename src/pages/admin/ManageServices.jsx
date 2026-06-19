import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

import { InputSwitch } from "primereact/inputswitch";

import "../../styles/Admin.css";

import { Toast } from "primereact/toast";

import AdminLayout
    from "../../components/admin/AdminLayout";

import serviceService
    from "../../services/serviceService";

class ManageServices extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            services: [],

            loading: true,

            dialogVisible: false,

            editMode: false,

            confirmDeleteVisible: false,

            selectedService: null,

            service: {

                id: null,

                title: "",

                slug: "",

                shortDescription: "",

                description: "",

                icon: "",

                featured: false,

                active: true,

                displayOrder: 0
            },

            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadServices();
    }

    loadServices = async () => {

        try {

            const response =
                await serviceService
                    .getAllServices();

            this.setState({

                services:
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

            service: {

                id: null,

                title: "",

                slug: "",

                shortDescription: "",

                description: "",

                icon: "",

                featured: false,

                active: true,

                displayOrder: 0
            }
        });
    };

    openEditDialog = (service) => {

        this.setState({

            dialogVisible: true,

            editMode: true,

            service: {
                ...service
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

            service: {

                ...this.state.service,

                [field]: value
            }
        });
    };

    saveService = async () => {

    const { service } = this.state;

    if (
        !service.title ||
        !service.slug ||
        !service.description
    ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Validation",

                detail:
                    "Title, Slug and Description are required"
            });

            return;
        }

        try {

            const {

                service,

                editMode

            } = this.state;

            if (editMode) {

                await serviceService
                    .updateService(
                        service.id,
                        service
                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Updated",

                    detail: "Service updated successfully"
                });

            } else {

                await serviceService
                    .createService(
                        service
                    );

                this.toast.current.show({

                    severity: "success",

                    summary: "Created",

                    detail: "Service created successfully"
                });
            }

            this.hideDialog();

            this.loadServices();

        } catch (error) {

            console.error(error);

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail: "Operation failed"
            });
        }
    };

    confirmDelete = (service) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedService: service
        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedService: null
        });
    };

    deleteService = async () => {

        try {

            await serviceService.deleteService(

                this.state.selectedService.id

            );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail: "Service deleted successfully"
            });

            this.hideDeleteDialog();

            this.loadServices();

        } catch (error) {

            console.error(error);

            this.toast.current.show({

                severity: "error",

                summary: "Error",

                detail: "Delete failed"
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

            services,

            loading,

            dialogVisible,

            service,

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
                            Manage Services
                        </h1>

                        <Button

                            label="Add Service"

                            icon="pi pi-plus"

                            onClick={
                                this.openNewDialog
                            }

                        />

                    </div>

                    <DataTable

                        value={services}

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
                            field="title"
                            header="Title"
                        />

                        <Column
                            field="slug"
                            header="Slug"
                        />

                        <Column
                            field="featured"
                            header="Featured"
                        />

                        <Column
                            field="active"
                            header="Active"
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
                                ? "Edit Service"
                                : "Add Service"
                        }

                        visible={
                            dialogVisible
                        }

                        style={{
                            width: "700px"
                        }}

                        onHide={
                            this.hideDialog
                        }

                    >

                        <div className="p-fluid">

                            <div className="p-field">

                                <label>
                                    Title
                                </label>

                                <InputText

                                    value={
                                        service.title
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "title",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Slug
                                </label>

                                <InputText

                                    value={
                                        service.slug
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "slug",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Short Description
                                </label>

                                <InputTextarea

                                    rows={3}

                                    value={
                                        service.shortDescription
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "shortDescription",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Description
                                </label>

                                <InputTextarea

                                    rows={5}

                                    value={
                                        service.description
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "description",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Icon
                                </label>

                                <InputText

                                    value={
                                        service.icon
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "icon",
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

                                    value={service.imageUrl || ""}

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
                                    Banner Image
                                </label>

                                <InputText

                                    value={service.bannerImage || ""}

                                    onChange={(e) =>
                                        this.handleChange(
                                            "bannerImage",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Features
                                </label>

                                <InputTextarea

                                    rows={4}

                                    value={service.features || ""}

                                    onChange={(e) =>
                                        this.handleChange(
                                            "features",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Benefits
                                </label>

                                <InputTextarea

                                    rows={4}

                                    value={service.benefits || ""}

                                    onChange={(e) =>
                                        this.handleChange(
                                            "benefits",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Technologies
                                </label>

                                <InputTextarea

                                    rows={4}

                                    value={service.technologies || ""}

                                    onChange={(e) =>
                                        this.handleChange(
                                            "technologies",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    SEO Title
                                </label>

                                <InputText

                                    value={service.seoTitle || ""}

                                    onChange={(e) =>
                                        this.handleChange(
                                            "seoTitle",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    SEO Description
                                </label>

                                <InputTextarea

                                    rows={3}

                                    value={
                                        service.seoDescription || ""
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "seoDescription",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <Dialog

                                header="Delete Service"

                                visible={
                                    this.state.confirmDeleteVisible
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
                                    to delete this service?

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
                                            this.deleteService
                                        }

                                    />

                                </div>

                            </Dialog>

                            <div className="p-field">

                                <label>
                                    Display Order
                                </label>

                                <InputText

                                    value={
                                        service.displayOrder
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
                                        service.featured
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
                                    marginTop: "20px"
                                }}
                            >

                                <label>
                                    Active
                                </label>

                                <br />

                                <InputSwitch

                                    checked={
                                        service.active
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
                                        this.saveService
                                    }

                                />

                            </div>

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageServices;
