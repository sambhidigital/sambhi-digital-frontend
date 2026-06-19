import React from "react";

class ServiceWorkflow extends React.Component {

    render() {

        const { workflowSteps } = this.props;

        return (

            <section className="service-workflow-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Our Workflow</h2>

                        <p>
                            Structured and efficient implementation process.
                        </p>

                    </div>

                    <div className="workflow-grid">

                        {
                            workflowSteps &&
                            workflowSteps.map((step, index) => (

                                <div
                                    className="workflow-card"
                                    key={index}
                                >

                                    <div className="workflow-number">
                                        {index + 1}
                                    </div>

                                    <h3>{step.title}</h3>

                                    <p>{step.description}</p>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default ServiceWorkflow;
