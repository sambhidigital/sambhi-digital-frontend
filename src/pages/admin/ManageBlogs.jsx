import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

import { Editor } from "primereact/editor";

import { InputSwitch } from "primereact/inputswitch";

import { Toast } from "primereact/toast";

import AdminLayout
    from "../../components/admin/AdminLayout";

import {

    getAllBlogs,

    createBlog,

    updateBlog,

    deleteBlog

}
    from "../../services/blogService";

import "../../styles/Admin.css";

class ManageBlogs extends React.Component {

    constructor(props) {

        super(props);

        this.toast = React.createRef();

        this.state = {

            blogs: [],

            loading: true,

            dialogVisible: false,

            confirmDeleteVisible: false,

            editMode: false,

            selectedBlog: null,

            blog: {

                id: null,

                title: "",

                slug: "",

                author: "",

                category: "",

                imageUrl: "",

                featuredImage: "",

                tags: "",

                featured: false,

                seoTitle: "",

                seoDescription: "",

                status: "DRAFT",

                summary: "",

                content: "",

                published: false
            },
            globalFilter: ""
        };
    }

    componentDidMount() {

        this.loadBlogs();
    }

    loadBlogs = async () => {

        try {

            const response =
                await getAllBlogs();

            this.setState({

                blogs:
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

            blog: {

                id: null,

                title: "",

                slug: "",

                author: "",

                category: "",

                imageUrl: "",

                featuredImage: "",

                tags: "",

                featured: false,

                seoTitle: "",

                seoDescription: "",

                status: "DRAFT",

                summary: "",

                content: "",

                published: false
            }
        });
    };

    openEditDialog = (blog) => {

        this.setState({

            dialogVisible: true,

            editMode: true,

            blog: {
                ...blog
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

        const updatedBlog = {

            ...this.state.blog,

            [field]: value
        };

        if (field === "title") {

            updatedBlog.slug =

                value

                    .toLowerCase()

                    .replace(
                        /[^a-z0-9\s-]/g,
                        ""
                    )

                    .replace(
                        /\s+/g,
                        "-"
                    );
        }

        this.setState({

            blog: updatedBlog
        });
    };

    saveBlog = async () => {

        const {

            blog,

            editMode

        } = this.state;

        if (

            !blog.title ||

            !blog.slug ||

            !blog.author ||

            !blog.content

        ) {

            this.toast.current.show({

                severity: "warn",

                summary: "Validation",

                detail:
                    "Title, Slug, Author and Content are required"

            });

            return;
        }

        try {

            if (editMode) {

                await updateBlog(

                    blog.id,

                    blog

                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Updated",

                    detail:
                        "Blog updated successfully"

                });

            } else {

                await createBlog(

                    blog

                );

                this.toast.current.show({

                    severity: "success",

                    summary: "Created",

                    detail:
                        "Blog created successfully"

                });
            }

            this.hideDialog();

            this.loadBlogs();

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

    confirmDelete = (blog) => {

        this.setState({

            confirmDeleteVisible: true,

            selectedBlog: blog

        });
    };

    hideDeleteDialog = () => {

        this.setState({

            confirmDeleteVisible: false,

            selectedBlog: null

        });
    };

    deleteSelectedBlog = async () => {

        try {

            await deleteBlog(

                this.state.selectedBlog.id

            );

            this.toast.current.show({

                severity: "success",

                summary: "Deleted",

                detail:
                    "Blog deleted successfully"

            });

            this.hideDeleteDialog();

            this.loadBlogs();

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

            <div className="action-buttons">
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

                    icon="pi pi-eye"

                    className="p-button-info p-button-sm"

                    style={{
                        marginLeft: "8px"
                    }}

                    onClick={() =>

                        window.open(

                            `/blog/${rowData.id}`,

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
            </div>
        );
    };

    statusTemplate = (rowData) => {

        return (

            <span
                className={
                    rowData.status === "PUBLISHED"
                        ? "status-badge published"
                        : "status-badge draft"
                }
            >

                {rowData.status}

            </span>
        );
    };

    featuredTemplate = (rowData) => {

        return rowData.featured

            ? (
                <span
                    className="featured-badge"
                >
                    Featured
                </span>
            )

            : "-";
    };

    render() {

        const {

            blogs,

            loading,

            dialogVisible,

            confirmDeleteVisible,

            blog,

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
                            Manage Blogs
                        </h1>

                        <Button

                            label="Add Blog"

                            icon="pi pi-plus"

                            onClick={
                                this.openNewDialog
                            }

                        />

                    </div>

                    <DataTable

                        value={blogs}

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
                            field="author"
                            header="Author"
                        />

                        <Column
                            field="category"
                            header="Category"
                        />

                        <Column
                            field="category"
                            header="Category"
                        />

                        <Column
                            field="tags"
                            header="Tags"
                        />

                        <Column
                            header="Status"
                            body={this.statusTemplate}
                        />

                        <Column
                            header="Featured"
                            body={this.featuredTemplate}
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
                                ? "Edit Blog"
                                : "Add Blog"
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
                                    Title
                                </label>

                                <InputText

                                    value={
                                        blog.title
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
                                        blog.slug
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
                                    Author
                                </label>

                                <InputText

                                    value={
                                        blog.author
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "author",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Category
                                </label>

                                <InputText

                                    value={
                                        blog.category
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "category",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Tags
                                </label>

                                <InputText

                                    value={blog.tags}

                                    onChange={(e) =>
                                        this.handleChange(
                                            "tags",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Featured Image
                                </label>

                                <InputText

                                    value={
                                        blog.featuredImage
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "featuredImage",
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

                                    value={
                                        blog.seoTitle
                                    }

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
                                        blog.seoDescription
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "seoDescription",
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
                                        blog.imageUrl
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
                                    Summary
                                </label>

                                <InputTextarea

                                    rows={3}

                                    value={
                                        blog.summary
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "summary",
                                            e.target.value
                                        )
                                    }

                                />

                            </div>

                            <div className="p-field">

                                <label>
                                    Content
                                </label>

                                <Editor
                                    style={{
                                        height: "320px"
                                    }}
                                    value={blog.content}
                                    onTextChange={(e) =>
                                        this.handleChange(
                                            "content",
                                            e.htmlValue
                                        )
                                    }
                                />

                            </div>

                            <div className="p-field">

                                <label className="form-label">

                                    Blog Status

                                </label>

                                <select

                                    className="custom-select"

                                    value={
                                        blog.status || "DRAFT"
                                    }

                                    onChange={(e) =>

                                        this.handleChange(
                                            "status",
                                            e.target.value
                                        )

                                    }
                                >

                                    <option value="DRAFT">

                                        Draft

                                    </option>

                                    <option value="PUBLISHED">

                                        Published

                                    </option>

                                </select>

                            </div>

                            <div
                                style={{
                                    marginTop: "20px"
                                }}
                            >

                                <label>
                                    Featured Blog
                                </label>

                                <br />

                                <InputSwitch

                                    checked={
                                        blog.featured
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
                                    Published
                                </label>

                                <br />

                                <InputSwitch

                                    checked={
                                        blog.published
                                    }

                                    onChange={(e) =>
                                        this.handleChange(
                                            "published",
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
                                        this.saveBlog
                                    }

                                />

                            </div>

                        </div>

                    </Dialog>

                    <Dialog

                        header="Delete Blog"

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

                            Are you sure
                            you want to delete
                            this blog?

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
                                    this.deleteSelectedBlog
                                }

                            />

                        </div>

                    </Dialog>

                </div>

            </AdminLayout>
        );
    }
}

export default ManageBlogs;
