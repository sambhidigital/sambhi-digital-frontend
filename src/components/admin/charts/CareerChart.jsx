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

class CareerChart
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
                        "Applications",

                    data:
                        data.map(
                            item => item.count
                        ),

                    backgroundColor:
                        "#8b5cf6"
                }
            ]
        };

        return (

            <div className="chart-card">

                <h3>
                    Career Applications
                </h3>

                <Bar
                    data={chartData}
                />

            </div>
        );
    }
}

export default CareerChart;
