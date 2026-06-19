import React from "react";

class GlassCard extends React.Component {

    render() {

        const {
            children,
            className
        } = this.props;

        return (

            <div className={`glass-card ${className || ""}`}>

                {children}

            </div>
        );
    }
}

export default GlassCard;
