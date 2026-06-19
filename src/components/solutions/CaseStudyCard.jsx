import React from "react";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link } from "react-router-dom";

class CaseStudyCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imageVisible: false
        };
    }

    render() {

        const {
            id,
            projectName,
            industry,
            description,
            technologies,
            outcome,
            image
        } = this.props;

        return (

            <>
                <div className="case-study-card glass-card">

                    {/* Project Image */}
                    <div className="case-study-image">

                        <img
                            src={image}
                            alt={projectName}
                            onClick={() =>
                                this.setState({
                                    imageVisible: true
                                })
                            }
                        />

                    </div>

                    {/* Project Content */}
                    <div className="case-study-content">

                        <div className="case-study-header">

                            <Tag
                                value={industry}
                                severity="info"
                            />

                        </div>

                        <h3>{projectName}</h3>

                        <p>{description}</p>

                        {/* Technologies */}
                        <div className="case-study-technologies">

                            {
                                technologies &&
                                technologies.map((tech, index) => (

                                    <span
                                        className="tech-badge"
                                        key={index}
                                    >
                                        {tech}
                                    </span>

                                ))
                            }

                        </div>

                        {/* Outcome */}
                        <div className="case-study-outcome">

                            <h4>Outcome</h4>

                            <p>{outcome}</p>

                        </div>

                        <Link
                            to={`/case-study/${id}`}
                        >

                            <Button
                                label="View Case Study"
                                icon="pi pi-external-link"
                                className="p-button-rounded p-button-outlined"
                            />

                        </Link>

                    </div>

                </div>

                {/* Image Popup */}
                <Dialog
                    visible={this.state.imageVisible}
                    modal={true}
                    dismissableMask={true}
                    closable={true}
                    closeOnEscape={true}
                    appendTo={document.body}
                    style={{ width: "85vw" }}
                    onHide={() =>
                        this.setState({
                            imageVisible: false
                        })
                    }
                >

                    <img
                        src={image}
                        alt={projectName}
                        className="popup-image"
                    />

                </Dialog>

            </>
        );
    }
}

export default CaseStudyCard;
