import React from "react";

class WhatsAppButton extends React.Component {

    openWhatsApp = () => {

        window.open(
            "https://wa.me/919999999999",
            "_blank"
        );
    };

    render() {

        return (

            <button
                className="whatsapp-floating-btn"
                onClick={this.openWhatsApp}
            >

                <i className="pi pi-whatsapp"></i>

            </button>

        );
    }
}

export default WhatsAppButton;
