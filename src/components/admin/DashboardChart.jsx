import React from "react";

import "../../styles/Admin.css";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const DashboardChart = ({
    stats
}) => {

    const data = [

        {
            name: "Services",
            value:
                stats.totalServices || 0
        },

        {
            name: "Solutions",
            value:
                stats.totalSolutions || 0
        },

        {
            name: "Portfolio",
            value:
                stats.totalPortfolioProjects || 0
        },

        {
            name: "Blogs",
            value:
                stats.totalBlogs || 0
        },

        {
            name: "Team",
            value:
                stats.totalTeamMembers || 0
        },

        {
            name: "Testimonials",
            value:
                stats.totalTestimonials || 0
        },

        {
            name: "Careers",
            value:
                stats.totalCareers || 0
        },

        {
            name: "Applications",
            value:
                stats.totalApplications || 0
        }
    ];

    return (

        <div
            className="dashboard-chart"
        >

            <h2>
                System Overview
            </h2>

            <ResponsiveContainer
                width="100%"
                height={400}
            >

                <BarChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="name"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="value"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default DashboardChart;
