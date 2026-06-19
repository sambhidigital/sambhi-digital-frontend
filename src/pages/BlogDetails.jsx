import React from "react";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

import {
    updateSEO,
    updateStructuredData
}
    from "../utils/seo";

import {
    getBlogById
}
from "../services/blogService";

import "../styles/Blog.css"

class BlogDetails extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            blog: null,

            loading: true,

            error: null
        };
    }

    componentDidMount() {

        const id =
            window.location.pathname
                .split("/")
                .pop();

        this.loadBlog(id);
    }

    loadBlog = async (id) => {

        try {

            const response =

                await getBlogById(
                    id
                );

            const blog =

                response.data.data;

            updateSEO({

                title:
                    blog.seoTitle ||
                    blog.title,

                description:
                    blog.seoDescription ||
                    blog.summary,

                keywords:
                    blog.tags,

                image:
                    blog.imageUrl,

                path:
                    `/blog/${blog.slug}`
            });

            updateStructuredData({

                "@context":
                    "https://schema.org",

                "@type":
                    "BlogPosting",

                headline:
                    blog.title,

                description:
                    blog.summary,

                image:
                    blog.imageUrl,

                author: {

                    "@type":
                        "Person",

                    name:
                        blog.author
                }
            });

            this.setState({

                blog,

                loading: false
            });

        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Unable to load blog."
            });
        }
    };

    render() {

        const {
            blog,
            loading
        } = this.state;

        if (loading) {

            return (
                <h2>
                    Loading...
                </h2>
            );
        }

        if (this.state.error) {

            return (

                <>

                    <Navbar />

                    <div
                        className="blog-details-page"
                    >

                        <div className="container">

                            <h2
                                style={{
                                    textAlign: "center"
                                }}
                            >

                                {this.state.error}

                            </h2>

                        </div>

                    </div>

                    <Footer />

                </>
            );
        }

        if (!blog) {

            return (
                <h2>
                    Blog not found
                </h2>
            );
        }

        return (

            <>

                <Navbar />

                <div className="blog-details-page">

                    <div className="container">

                        <Link
                            to="/blog"
                            className="back-to-blog-btn"
                        >

                            <i className="pi pi-arrow-left"></i>

                            <span>
                                Back To Insights
                            </span>

                        </Link>

                        <div className="blog-details-header">

                            <span
                                className="blog-category-badge"
                            >
                                {blog.category}
                            </span>

                            <h1
                                className="blog-details-title"
                            >
                                {blog.title}
                            </h1>

                            <div
                                className="blog-meta-info"
                            >

                                <span>
                                    <i className="pi pi-user"></i>

                                    {blog.author}
                                </span>

                                <span>
                                    <i className="pi pi-calendar"></i>

                                    {
                                        blog.createdAt
                                            ? new Date(
                                                blog.createdAt
                                            ).toLocaleDateString()
                                            : ""
                                    }
                                </span>

                            </div>

                            <p
                                className="blog-summary"
                            >
                                {blog.summary || ""}
                            </p>

                        </div>

                        {
                            blog.imageUrl && (

                                <img
                                    src={
                                        blog.imageUrl ||
                                        "/assets/images/blog/default-blog.jpg"
                                    }
                                    alt={blog.title}
                                    className="blog-details-image"
                                />

                            )
                        }

                        <div className="blog-info-grid">

                            <div className="blog-info-card">

                                <h3>
                                    Author
                                </h3>

                                <p>
                                    {blog.author || "SamBhi Team"}
                                </p>

                            </div>

                            <div className="blog-info-card">

                                <h3>
                                    Category
                                </h3>

                                <p>
                                    {blog.category || "Technology"}
                                </p>

                            </div>

                        </div>

                        <div
                            className="blog-content-card"
                        >

                            <h2>
                                Article Content
                            </h2>

                            <p>
                                {blog.content || "Content unavailable."}
                            </p>

                        </div>

                    </div>

                </div>

                <Footer />

            </>
        );
    }
}

export default BlogDetails;
