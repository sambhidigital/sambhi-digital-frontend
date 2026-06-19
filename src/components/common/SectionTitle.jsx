import React from "react";

class SectionTitle extends React.Component {

    render() {

        const {
            title,
            subtitle,
            center
        } = this.props;

        return (

            <div className={`section-title ${center ? "text-center" : ""}`}>

                <h2>{title}</h2>

                {
                    subtitle &&
                    <p>{subtitle}</p>
                }

            </div>
        );
    }
}

export default SectionTitle;
