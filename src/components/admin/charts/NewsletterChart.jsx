import React from "react";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Doughnut }
    from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

class NewsletterChart
    extends React.Component {

    render() {

        const { data } =
            this.props;

        const chartData = {

            labels:
                data.map(
                    item => item.month
                ),

            datasets: [

                {
                    data:
                        data.map(
                            item => item.count
                        ),

                    backgroundColor: [

                        "#3b82f6",
                        "#06b6d4",
                        "#8b5cf6",
                        "#10b981",
                        "#f59e0b",
                        "#ef4444"

                    ]
                }
            ]
        };

        return (

            <div className="chart-card">

                <h3>
                    Newsletter Subscribers
                </h3>

                <Doughnut
                    data={chartData}
                />

            </div>
        );
    }
}

export default NewsletterChart;
