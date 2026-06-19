// src/context/AppContext.jsx

import React, {
    createContext,
    Component
} from "react";

/* ==========================================
   CONTEXT
========================================== */

export const AppContext =
    createContext();

/* ==========================================
   PROVIDER
========================================== */

class AppProvider extends Component {

    constructor(props) {

        super(props);

        this.state = {

            /* GLOBAL */

            loading: false,

            error: null,

            successMessage: null,

            /* AUTH */

            currentUser: null,

            isAuthenticated: false,

            /* UI */

            darkMode: true,

            notifications: [],

            /* CONTACT */

            contactMessages: [],

            /* BLOG */

            blogPosts: [],

            /* PORTFOLIO */

            portfolioProjects: [],

            /* CAREERS */

            jobOpenings: [],

            applications: [],

            /* DASHBOARD */

            dashboardStats: {

                totalBlogs: 0,

                totalProjects: 0,

                totalJobs: 0,

                totalMessages: 0
            }
        };
    }

    /* ==========================================
       LOADING
    ========================================== */

    setLoading = (status) => {

        this.setState({
            loading: status
        });
    };

    /* ==========================================
       ERROR
    ========================================== */

    setError = (error) => {

        this.setState({
            error
        });
    };

    clearError = () => {

        this.setState({
            error: null
        });
    };

    /* ==========================================
       SUCCESS MESSAGE
    ========================================== */

    setSuccessMessage = (
        message
    ) => {

        this.setState({
            successMessage: message
        });
    };

    clearSuccessMessage = () => {

        this.setState({
            successMessage: null
        });
    };

    /* ==========================================
       AUTH
    ========================================== */

    setCurrentUser = (user) => {

        this.setState({

            currentUser: user,

            isAuthenticated:
                !!user
        });
    };

    logout = () => {

        localStorage.removeItem(
            "token"
        );

        this.setState({

            currentUser: null,

            isAuthenticated:
                false
        });
    };

    /* ==========================================
       THEME
    ========================================== */

    toggleDarkMode = () => {

        this.setState(
            (prevState) => ({

                darkMode:
                    !prevState.darkMode
            })
        );
    };

    /* ==========================================
       NOTIFICATIONS
    ========================================== */

    addNotification = (
        message,
        type = "info"
    ) => {

        const notification = {

            id: Date.now(),

            message,

            type
        };

        this.setState(
            (prevState) => ({

                notifications: [

                    ...prevState.notifications,

                    notification
                ]
            })
        );

        setTimeout(() => {

            this.removeNotification(
                notification.id
            );

        }, 5000);
    };

    removeNotification = (id) => {

        this.setState(
            (prevState) => ({

                notifications:
                    prevState.notifications.filter(
                        (item) =>
                            item.id !== id
                    )
            })
        );
    };

    /* ==========================================
       BLOGS
    ========================================== */

    setBlogPosts = (posts) => {

        this.setState({
            blogPosts: posts
        });
    };

    /* ==========================================
       PORTFOLIO
    ========================================== */

    setPortfolioProjects =
    (projects) => {

        this.setState({
            portfolioProjects:
                projects
        });
    };

    /* ==========================================
       CAREERS
    ========================================== */

    setJobOpenings = (jobs) => {

        this.setState({
            jobOpenings: jobs
        });
    };

    setApplications =
    (applications) => {

        this.setState({
            applications
        });
    };

    /* ==========================================
       CONTACT
    ========================================== */

    setContactMessages =
    (messages) => {

        this.setState({
            contactMessages:
                messages
        });
    };

    /* ==========================================
       DASHBOARD
    ========================================== */

    setDashboardStats =
    (stats) => {

        this.setState({
            dashboardStats: stats
        });
    };

    /* ==========================================
       PROVIDER
    ========================================== */

    render() {

        return (

            <AppContext.Provider

                value={{

                    ...this.state,

                    setLoading:
                        this.setLoading,

                    setError:
                        this.setError,

                    clearError:
                        this.clearError,

                    setSuccessMessage:
                        this.setSuccessMessage,

                    clearSuccessMessage:
                        this.clearSuccessMessage,

                    setCurrentUser:
                        this.setCurrentUser,

                    logout:
                        this.logout,

                    toggleDarkMode:
                        this.toggleDarkMode,

                    addNotification:
                        this.addNotification,

                    removeNotification:
                        this.removeNotification,

                    setBlogPosts:
                        this.setBlogPosts,

                    setPortfolioProjects:
                        this.setPortfolioProjects,

                    setJobOpenings:
                        this.setJobOpenings,

                    setApplications:
                        this.setApplications,

                    setContactMessages:
                        this.setContactMessages,

                    setDashboardStats:
                        this.setDashboardStats
                }}
            >

                {
                    this.props.children
                }

            </AppContext.Provider>
        );
    }
}

export default AppProvider;
