// src/pages/Blog.jsx

import React from "react";
import { Link } from "react-router-dom";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Common Components
import SectionTitle from "../components/common/SectionTitle";
import GlassCard from "../components/common/GlassCard";

// Blog Components
import BlogCard from "../components/blog/BlogCard";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogCategories from "../components/blog/BlogCategories";

import { getAllBlogs } from "../services/blogService";

// CTA
import ContactCTA from "../components/home/ContactCTA";

// CSS
import "../styles/Blog.css";

// SEO
import SEO from "../components/common/SEO";
import NewsletterSection from "../components/common/NewsletterSection";

class Blog extends React.Component {

    handleSearch = (e) => {

        const searchTerm =
            e.target.value;

        const filteredBlogs =
            this.state.blogPosts.filter(
                (blog) =>

                    (
                        blog.title &&
                        blog.title
                            .toLowerCase()
                            .includes(
                                searchTerm.toLowerCase()
                            )
                    )

                    ||

                    (
                        blog.category &&
                        blog.category
                            .toLowerCase()
                            .includes(
                                searchTerm.toLowerCase()
                            )
                    )

                    ||

                    (
                        blog.summary &&
                        blog.summary
                            .toLowerCase()
                            .includes(
                                searchTerm.toLowerCase()
                            )
                    )
            );

        this.setState({

            searchTerm,

            filteredBlogs
        });
    };

    constructor(props) {

        super(props);

        this.state = {

            blogPosts: [],

            filteredBlogs: [],

            searchTerm: "",

            selectedCategory: "All",

            loading: true,

            error: null
        };
    }

    componentDidMount() {

        this.loadBlogs();
    }

    loadBlogs = async () => {

        try {

            const response =
                await getAllBlogs();

            console.log(
                "BLOG RESPONSE",
                response
            );

            console.log(
                "BLOG DATA",
                response.data
            );

            console.log(
                "Blogs Response:",
                response
            );

            this.setState({

                blogPosts:
                    response.data.data || [],

                filteredBlogs:
                    response.data.data || [],

                loading: false
            });
        } catch (error) {

            console.error(error);

            this.setState({

                loading: false,

                error:
                    "Unable to load blogs."
            });
        }
    };

    render() {

        const {

            filteredBlogs,

            loading,

            error

        } = this.state;

        if (loading) {

            return (

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center"
                    }}
                >

                    <h2>
                        Loading Blogs...
                    </h2>

                </div>
            );
        }

        if (error) {

            return (

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center"
                    }}
                >

                    <h2>
                        {error}
                    </h2>

                </div>
            );
        }

        const featuredBlog =
            this.state.blogPosts.length > 0
                ? this.state.blogPosts[0]
                : null;

        return (

            <div className="blog-page">

                {/* SEO */}
                <SEO

                    title="Technology Blog"

                    description="
                        Read expert insights on Artificial Intelligence,
                        Cloud Computing,
                        Enterprise Networking,
                        Cyber Security,
                        DevOps,
                        Automation,
                        and Digital Transformation from SamBhi Digital Technology.
                        "

                    keywords="
                        Technology Blog,
                        AI Blog,
                        Artificial Intelligence,
                        Cloud Computing,
                        Cyber Security,
                        Enterprise Networking,
                        DevOps,
                        Automation,
                        Digital Transformation,
                        IT Articles,
                        Technology Insights
                        "

                    image="/assets/images/blog/featured-blog.png"

                />

                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <section className="blog-hero-section">

                    <div className="blog-overlay"></div>

                    <div className="container blog-hero-container">

                        <div className="blog-hero-content">

                            <h1>
                                Technology Insights & Articles
                            </h1>

                            <p>

                                Explore AI innovation,
                                cloud infrastructure,
                                enterprise networking,
                                cybersecurity,
                                and digital transformation insights.

                            </p>

                        </div>

                    </div>

                </section>

                {/* Blog Categories */}
                <BlogCategories />

                {/* Featured Article */}
                <section className="featured-blog-section">

                    <div className="container">

                        <SectionTitle
                            title="Featured Article"
                            subtitle="
                            Latest insights from enterprise technology experts.
                            "
                            center={true}
                        />

                        <GlassCard className="featured-blog-card">

                            <div className="featured-blog-grid">

                                {/* Left Image */}
                                <div className="featured-blog-image">

                                    <img
                                        src={
                                            featuredBlog
                                                ? featuredBlog.imageUrl
                                                : "/assets/images/blog/featured-blog.png"
                                        }
                                        alt={
                                            featuredBlog
                                                ? featuredBlog.title
                                                : "Featured Blog"
                                        }
                                    />
                                </div>

                                {/* Right Content */}
                                <div className="featured-blog-content">

                                    {
                                        featuredBlog && (

                                            <>

                                                <span className="featured-category">

                                                    {featuredBlog.category}

                                                </span>

                                                <h2>

                                                    {featuredBlog.title}

                                                </h2>

                                                <p>

                                                    {featuredBlog.summary}

                                                </p>

                                                <Link
                                                    to={`/blog/${featuredBlog.id}`}
                                                >

                                                    <button
                                                        className="featured-btn"
                                                    >

                                                        Read Full Article

                                                    </button>

                                                </Link>

                                            </>

                                        )
                                    }

                                </div>

                            </div>

                        </GlassCard>

                    </div>

                </section>

                {/* Blog Content */}
                <section className="blog-content-section">

                    <div className="container">

                        {/* Latest Articles */}

                        <div className="blog-posts-container">

                            <SectionTitle
                                title="Latest Articles"
                                subtitle="
        Enterprise IT and AI knowledge hub.
        "
                            />

                            <div className="blog-post-grid">

                                {
                                    filteredBlogs.map((post) => (

                                        <BlogCard

                                            key={post.id}
                                            id={post.id}
                                            title={post.title}
                                            category={post.category}
                                            image={post.imageUrl}
                                            description={post.summary}
                                            author={post.author}
                                            date={post.createdAt}
                                        />

                                    ))
                                }

                            </div>

                        </div>

                        {/* Blog Sidebar */}

                        <div className="blog-sidebar-bottom">

                            <BlogSidebar

                                searchTerm={
                                    this.state.searchTerm
                                }

                                onSearch={
                                    this.handleSearch
                                }

                                recentPosts={
                                    this.state.blogPosts.slice(
                                        0,
                                        5
                                    )
                                }
                            />

                        </div>

                    </div>

                </section>

                {/* Blog Statistics */}
                <section className="blog-statistics-section">

                    <div className="container">

                        <div className="blog-stats-grid">

                            <GlassCard className="blog-stat-card">

                                <h2>100+</h2>

                                <p>Technology Articles</p>

                            </GlassCard>

                            <GlassCard className="blog-stat-card">

                                <h2>AI</h2>

                                <p>Industry Insights</p>

                            </GlassCard>

                            <GlassCard className="blog-stat-card">

                                <h2>Cloud</h2>

                                <p>Infrastructure Guides</p>

                            </GlassCard>

                            <GlassCard className="blog-stat-card">

                                <h2>24/7</h2>

                                <p>Enterprise Innovation</p>

                            </GlassCard>

                        </div>

                    </div>

                </section>

                {/* Newsletter CTA */}
                <NewsletterSection />

                {/* CTA */}
                <ContactCTA />

                {/* Footer */}
                <Footer />

            </div>
        );
    }
}

export default Blog;
