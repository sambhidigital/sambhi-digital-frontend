import React from "react";

import "../../styles/Admin.css";

class DashboardCard extends React.Component {

    render() {

        const {
            title,
            value,
            icon
        } = this.props;

        return (

            <div className="dashboard-card">

                <div className="dashboard-card-icon">

                    <i className={icon}></i>

                </div>

                <div className="dashboard-card-content">

                    <h3>{value}</h3>

                    <p>{title}</p>

                </div>

            </div>
        );
    }
}

export default DashboardCard;
