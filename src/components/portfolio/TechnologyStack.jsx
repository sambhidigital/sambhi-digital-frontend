import React from "react";

class TechnologyStack extends React.Component {

    render() {

        const { technologies } = this.props;

        return (

            <section className="technology-stack-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Technology Stack</h2>

                        <p>
                            Modern technologies powering
                            scalable enterprise solutions.
                        </p>

                    </div>

                    <div className="technology-stack-grid">

                        {
                            technologies &&
                            technologies.map((tech, index) => (

                                <div
                                    className="technology-stack-card glass-card"
                                    key={index}
                                >

                                    {
                                        tech.icon &&
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="technology-stack-icon"
                                        />
                                    }

                                    <h3>{tech.name}</h3>

                                    <p>{tech.description}</p>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default TechnologyStack;
