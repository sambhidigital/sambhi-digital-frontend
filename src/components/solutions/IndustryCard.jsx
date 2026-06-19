import React from "react";
import { Dialog } from "primereact/dialog";

class IndustryCard extends React.Component {

    state = {
        visible: false
    };

    render() {

        const {
            title,
            image,
            description
        } = this.props;

        return (
            <>
                <div className="industry-card glass-card">

                    <div className="industry-image">

                        <img
                            src={image}
                            alt={title}
                            onClick={() =>
                                this.setState({
                                    visible: true
                                })
                            }
                        />

                    </div>

                    <div className="industry-content">

                        <h3>{title}</h3>

                        <p>{description}</p>

                    </div>

                </div>

                <Dialog
                    visible={this.state.visible}
                    modal={true}
                    dismissableMask={true}
                    closable={true}
                    closeOnEscape={true}
                    appendTo={document.body}
                    style={{ width: "80vw" }}
                    onHide={() =>
                        this.setState({
                            visible: false
                        })
                    }
                >

                    <img
                        src={image}
                        alt={title}
                        className="popup-image"
                    />

                </Dialog>
            </>
        );
    }
}

export default IndustryCard;
