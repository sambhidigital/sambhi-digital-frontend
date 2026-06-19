import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Bar }
    from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

class ContactChart
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
                    label:
                        "Contacts",

                    data:
                        data.map(
                            item => item.count
                        ),

                    backgroundColor: [

                        "#3b82f6",
                        "#06b6d4",
                        "#8b5cf6",
                        "#ec4899",
                        "#10b981",
                        "#f59e0b"

                    ]
                }
            ]
        };

        return (

            <div className="chart-card">

                <h3>
                    Contact Messages
                </h3>

                <Bar
                    data={chartData}
                />

            </div>
        );
    }
}

export default ContactChart;
