import React from "react";

class TechnologyBadge extends React.Component {

    render() {

        const {
            name,
            icon
        } = this.props;

        return (

            <div className="technology-badge">

                {
                    icon &&
                    <img
                        src={icon}
                        alt={name}
                    />
                }

                <span>{name}</span>

            </div>
        );
    }
}

export default TechnologyBadge;
