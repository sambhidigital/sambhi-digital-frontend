import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

import { Line }
    from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

class UserChart
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
                    label: "Users",

                    data:
                        data.map(
                            item => item.count
                        ),

                    borderColor: "#3b82f6",

                    backgroundColor:
                        "#3b82f6",

                    fill: true,

                    tension: 0.4,

                    pointBackgroundColor:
                        "#3b82f6",

                    pointBorderColor:
                        "#ffffff",

                    pointRadius: 5
                }
            ]
        };

        return (

            <div className="chart-card">

                <h3>
                    User Growth
                </h3>

                <Line
                    data={chartData}
                />

            </div>
        );
    }
}

export default UserChart;