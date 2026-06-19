import api from "./api";

/* ==========================================
   API ENDPOINT
========================================== */

const BLOG_ENDPOINT =
    "/blogs";

/* ==========================================
   GET ALL BLOGS
========================================== */

export const getAllBlogs =
    () => {

        return api.get(
            BLOG_ENDPOINT
        );
    };

/* ==========================================
   GET BLOG BY ID
========================================== */

export const getBlogById =
    (id) => {

        return api.get(
            `${BLOG_ENDPOINT}/${id}`
        );
    };

/* ==========================================
   GET BLOG BY SLUG
========================================== */

export const getBlogBySlug =
    (slug) => {

        return api.get(
            `${BLOG_ENDPOINT}/slug/${slug}`
        );
    };

/* ==========================================
   GET BLOGS BY CATEGORY
========================================== */

export const getBlogsByCategory =
    (category) => {

        return api.get(
            `${BLOG_ENDPOINT}/category/${category}`
        );
    };

/* ==========================================
   GET BLOGS WITH PAGINATION
========================================== */

export const getBlogsPaginated =
    (
        page = 0,
        size = 10
    ) => {

        return api.get(
            `${BLOG_ENDPOINT}?page=${page}&size=${size}`
        );
    };

/* ==========================================
   CREATE BLOG
========================================== */

export const createBlog =
    (blogData) => {

        return api.post(
            BLOG_ENDPOINT,
            blogData
        );
    };

/* ==========================================
   UPDATE BLOG
========================================== */

export const updateBlog =
    (
        id,
        blogData
    ) => {

        return api.put(
            `${BLOG_ENDPOINT}/${id}`,
            blogData
        );
    };

/* ==========================================
   DELETE BLOG
========================================== */

export const deleteBlog =
    (id) => {

        return api.delete(
            `${BLOG_ENDPOINT}/${id}`
        );
    };

/* ==========================================
   GET PUBLISHED BLOGS
========================================== */

export const getPublishedBlogs =
    () => {

        return api.get(
            `${BLOG_ENDPOINT}/published`
        );
    };

/* ==========================================
   GET DRAFT BLOGS
========================================== */

export const getDraftBlogs =
    () => {

        return api.get(
            `${BLOG_ENDPOINT}/drafts`
        );
    };

/* ==========================================
   GET FEATURED BLOGS
========================================== */

export const getFeaturedBlogs =
    () => {

        return api.get(
            `${BLOG_ENDPOINT}/featured`
        );
    };

/* ==========================================
   PUBLISH BLOG
========================================== */

export const publishBlog =
    (id) => {

        return api.put(
            `${BLOG_ENDPOINT}/${id}/publish`
        );
    };

/* ==========================================
   UNPUBLISH BLOG
========================================== */

export const unpublishBlog =
    (id) => {

        return api.put(
            `${BLOG_ENDPOINT}/${id}/unpublish`
        );
    };

