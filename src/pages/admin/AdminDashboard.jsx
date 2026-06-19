import React from "react";

import AdminLayout from "../../components/admin/AdminLayout";

import {
    getDashboardStats,
    getUserChart,
    getContactChart,
    getCareerChart,
    getNewsletterChart
}
    from "../../services/dashboardService";
import UserChart from "../../components/admin/charts/UserChart";
import ContactChart from "../../components/admin/charts/ContactChart";

import CareerChart from "../../components/admin/charts/CareerChart";

import NewsletterChart from "../../components/admin/charts/NewsletterChart";

import "../../styles/Admin.css";

class AdminDashboard
    extends React.Component {

    state = {

        stats: {},

        userChart: [],

        contactChart: [],

        careerChart: [],

        newsletterChart: []
    };

    componentDidMount() {

        this.loadStats();

        this.loadCharts();
    }

    loadStats = async () => {

        try {

            const response =
                await getDashboardStats();

            this.setState({

                stats:
                    response.data.data
            });

        } catch (error) {

            console.error(error);
        }
    };

    loadCharts = async () => {

        try {

            const userResponse =
                await getUserChart();

            const contactResponse =
                await getContactChart();

            const careerResponse =
                await getCareerChart();

            const newsletterResponse =
                await getNewsletterChart();

            this.setState({

                userChart:
                    userResponse.data.data || [],

                contactChart:
                    contactResponse.data.data || [],

                careerChart:
                    careerResponse.data.data || [],

                newsletterChart:
                    newsletterResponse.data.data || []
            });

        } catch (error) {

            console.error(error);
        }
    };

    renderCard = (
        title,
        value
    ) => (

        <div className="dashboard-card">

            <div className="dashboard-card-value">

                {value || 0}

            </div>

            <div className="dashboard-card-title">

                {title}

            </div>

        </div>
    );

    render() {

        const {
            stats
        } = this.state;

        return (

            <AdminLayout>

                <div className="dashboard-header">

                    <h1>
                        Dashboard Analytics
                    </h1>

                    <p>
                        Overview of your platform
                    </p>

                </div>

                <div className="dashboard-grid">

                    {this.renderCard(
                        "Services",
                        stats.totalServices
                    )}

                    {this.renderCard(
                        "Solutions",
                        stats.totalSolutions
                    )}

                    {this.renderCard(
                        "Portfolio",
                        stats.totalPortfolioProjects
                    )}

                    {this.renderCard(
                        "Blogs",
                        stats.totalBlogs
                    )}

                    {this.renderCard(
                        "Team",
                        stats.totalTeamMembers
                    )}

                    {this.renderCard(
                        "Testimonials",
                        stats.totalTestimonials
                    )}

                    {this.renderCard(
                        "FAQs",
                        stats.totalFaqs
                    )}

                    {this.renderCard(
                        "Careers",
                        stats.totalCareers
                    )}

                    {this.renderCard(
                        "Applications",
                        stats.totalApplications
                    )}

                    {this.renderCard(
                        "Subscribers",
                        stats.totalNewsletterSubscribers
                    )}

                    {this.renderCard(
                        "Contacts",
                        stats.totalContacts
                    )}

                </div>

                <div className="dashboard-charts-grid">

                    <UserChart
                        data={this.state.userChart}
                    />

                    <ContactChart
                        data={this.state.contactChart}
                    />

                    <CareerChart
                        data={this.state.careerChart}
                    />

                    <NewsletterChart
                        data={this.state.newsletterChart}
                    />

                </div>

            </AdminLayout>
        );
    }


}

export default AdminDashboard;
