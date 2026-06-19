import React from "react";

import { Dialog } from "primereact/dialog";

import { Button } from "primereact/button";

import "../../styles/Admin.css";

class ConfirmDeleteDialog
extends React.Component {

    render() {

        return (

            <Dialog

                header="Confirm Delete"

                visible={this.props.visible}

                style={{
                    width: "400px"
                }}

                onHide={this.props.onHide}

            >

                <p>

                    Are you sure you want
                    to delete this item?

                </p>

                <div
                    className="dialog-actions"
                >

                    <Button

                        label="Cancel"

                        onClick={
                            this.props.onHide
                        }

                    />

                    <Button

                        label="Delete"

                        className="p-button-danger"

                        onClick={
                            this.props.onConfirm
                        }

                    />

                </div>

            </Dialog>
        );
    }
}

export default ConfirmDeleteDialog;
