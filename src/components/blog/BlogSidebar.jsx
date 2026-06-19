import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

class BlogSidebar extends React.Component {

    render() {

        const recentPosts =
            this.props.recentPosts || [];

        return (

            <aside className="blog-sidebar glass-card">

                {/* Search */}
                <div className="sidebar-widget">

                    <h3>Search Blog</h3>

                    <div className="blog-search-box">

                        <InputText
                            placeholder="Search articles..."
                            value={this.props.searchTerm}
                            onChange={this.props.onSearch}
                        />

                        <Button
                            icon="pi pi-search"
                            className="p-button-info"
                            onClick={() => { }}
                        />

                    </div>

                </div>

                {/* Recent Posts */}
                <div className="sidebar-widget">

                    <h3>Recent Posts</h3>

                    <ul className="recent-posts">

                        {
                            recentPosts.map((post) => (

                                <li key={post.id}>

                                    <Link
                                        to={`/blog/${post.id}`}
                                    >

                                        <i className="pi pi-angle-right"></i>

                                        {post.title}

                                    </Link>

                                </li>
                            ))
                        }

                    </ul>

                </div>

            </aside>
        );
    }
}

export default BlogSidebar;
