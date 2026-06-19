import React from "react";
import { Helmet } from "react-helmet-async";

class SEO extends React.Component {

    render() {

        const {

            title,

            description,

            keywords,

            image,

            url,

            author

        } = this.props;

        const siteName =
            "SamBhi Digital Technology";

        const defaultDescription =
            "AI-Powered Digital Infrastructure, Cloud Computing, Networking, Cyber Security, Website Development, and Enterprise IT Solutions.";

        const defaultKeywords =
            "AI Solutions, Cloud Computing, Networking, Cyber Security, IT Consultancy, Website Development, Enterprise IT";

        const defaultImage =
            "https://www.sambhidigital.com/assets/logos/logo-light.png";

        const currentUrl =
            url ||
            window.location.href;

        return (

            <Helmet>

                {/* Title */}
                <title>

                    {
                        title
                            ? `${title} | ${siteName}`
                            : siteName
                    }

                </title>

                {/* Basic SEO */}
                <meta
                    name="description"
                    content={
                        description ||
                        defaultDescription
                    }
                />

                <meta
                    name="keywords"
                    content={
                        keywords ||
                        defaultKeywords
                    }
                />

                <meta
                    name="author"
                    content={
                        author ||
                        siteName
                    }
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                {/* Open Graph */}
                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:title"
                    content={
                        title ||
                        siteName
                    }
                />

                <meta
                    property="og:description"
                    content={
                        description ||
                        defaultDescription
                    }
                />

                <meta
                    property="og:image"
                    content={
                        image ||
                        defaultImage
                    }
                />

                <meta
                    property="og:url"
                    content={currentUrl}
                />

                <meta
                    property="og:site_name"
                    content={siteName}
                />

                {/* Twitter */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content={
                        title ||
                        siteName
                    }
                />

                <meta
                    name="twitter:description"
                    content={
                        description ||
                        defaultDescription
                    }
                />

                <meta
                    name="twitter:image"
                    content={
                        image ||
                        defaultImage
                    }
                />

                {/* Canonical */}
                <link
                    rel="canonical"
                    href={currentUrl}
                />

            </Helmet>
        );
    }
}

export default SEO;
