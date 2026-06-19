import React from "react";

class FloatingParticles extends React.Component {

    renderParticles = () => {

        return [...Array(40)].map((_, index) => (

            <span
                key={index}
                className="particle"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDuration:
                        `${8 + Math.random() * 10}s`,
                    animationDelay:
                        `${Math.random() * 5}s`
                }}
            ></span>

        ));
    };

    render() {

        return (

            <div className="floating-particles">

                {this.renderParticles()}

            </div>
        );
    }
}

export default FloatingParticles;
