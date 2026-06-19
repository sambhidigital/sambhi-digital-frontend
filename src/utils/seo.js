// src/utils/seo.js

/* ==========================================
   DEFAULT SEO
========================================== */

const DEFAULT_SITE_NAME =
    "SamBhi Digital Technology";

const DEFAULT_URL =
    "https://www.sambhidigital.com";

/* ==========================================
   PAGE TITLE
========================================== */

export const updatePageTitle = (
    title
) => {

    document.title = title

        ? `${title} | ${DEFAULT_SITE_NAME}`

        : DEFAULT_SITE_NAME;
};

/* ==========================================
   META DESCRIPTION
========================================== */

export const updateMetaDescription =
    (
        description
    ) => {

        const meta =
            document.querySelector(
                'meta[name="description"]'
            );

        if (meta) {

            meta.setAttribute(
                "content",
                description
            );
        }
    };

/* ==========================================
   META KEYWORDS
========================================== */

export const updateMetaKeywords =
    (
        keywords
    ) => {

        let meta =
            document.querySelector(
                'meta[name="keywords"]'
            );

        if (!meta) {

            meta =
                document.createElement(
                    "meta"
                );

            meta.name =
                "keywords";

            document.head.appendChild(
                meta
            );
        }

        meta.content = keywords;
    };

/* ==========================================
   OPEN GRAPH
========================================== */

export const updateOpenGraph =
    ({
        title,
        description,
        image,
        url
    }) => {

        setMetaProperty(
            "og:title",
            title
        );

        setMetaProperty(
            "og:description",
            description
        );

        setMetaProperty(
            "og:image",
            image
        );

        setMetaProperty(
            "og:url",
            url
        );
    };

/* ==========================================
   HELPER
========================================== */

const setMetaProperty =
    (
        property,
        content
    ) => {

        let meta =
            document.querySelector(
                `meta[property="${property}"]`
            );

        if (!meta) {

            meta =
                document.createElement(
                    "meta"
                );

            meta.setAttribute(
                "property",
                property
            );

            document.head.appendChild(
                meta
            );
        }

        meta.setAttribute(
            "content",
            content
        );
    };

/* ==========================================
   CANONICAL URL
========================================== */

export const generateCanonicalURL =
    (
        path = ""
    ) => {

        return `${DEFAULT_URL}${path}`;
    };

/* ==========================================
   CANONICAL TAG
========================================== */

export const setCanonicalTag =
    (
        url
    ) => {

        let link =
            document.querySelector(
                "link[rel='canonical']"
            );

        if (!link) {

            link =
                document.createElement(
                    "link"
                );

            link.rel =
                "canonical";

            document.head.appendChild(
                link
            );
        }

        link.href = url;
    };

/* ==========================================
   COMPLETE SEO
========================================== */

export const updateSEO =
    ({
        title,
        description,
        keywords,
        image,
        path = ""
    }) => {

        updatePageTitle(
            title
        );

        updateMetaDescription(
            description
        );

        if (keywords) {

            updateMetaKeywords(
                keywords
            );
        }

        const canonicalUrl =
            generateCanonicalURL(
                path
            );

        setCanonicalTag(
            canonicalUrl
        );

        updateOpenGraph({

            title,

            description,

            image,

            url: canonicalUrl
        });

        updateTwitterCard({

            title,

            description,

            image
        });
    };

/* ==========================================
   TWITTER CARDS
========================================== */

export const updateTwitterCard =
    ({
        title,
        description,
        image
    }) => {

        setMetaName(
            "twitter:card",
            "summary_large_image"
        );

        setMetaName(
            "twitter:title",
            title
        );

        setMetaName(
            "twitter:description",
            description
        );

        setMetaName(
            "twitter:image",
            image
        );
    };

/* ==========================================
   META NAME HELPER
========================================== */

const setMetaName =
    (
        name,
        content
    ) => {

        let meta =
            document.querySelector(
                `meta[name="${name}"]`
            );

        if (!meta) {

            meta =
                document.createElement(
                    "meta"
                );

            meta.setAttribute(
                "name",
                name
            );

            document.head.appendChild(
                meta
            );
        }

        meta.setAttribute(
            "content",
            content || ""
        );
    };

/* ==========================================
   STRUCTURED DATA
========================================== */

export const updateStructuredData =
    (
        data
    ) => {

        let script =
            document.getElementById(
                "seo-jsonld"
            );

        if (!script) {

            script =
                document.createElement(
                    "script"
                );

            script.type =
                "application/ld+json";

            script.id =
                "seo-jsonld";

            document.head.appendChild(
                script
            );
        }

        script.text =
            JSON.stringify(
                data
            );
    };


