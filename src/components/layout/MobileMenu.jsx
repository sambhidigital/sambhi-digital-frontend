import React from "react";
import { Link } from "react-router-dom";

class MobileMenu extends React.Component {

    render() {

        const { visible, onClose } = this.props;

        return (

            <div className={`mobile-menu ${visible ? "mobile-menu-active" : ""}`}>

                <div className="mobile-menu-header">

                    <h2>Sambhi Digital</h2>

                    <button
                        className="mobile-close-btn"
                        onClick={onClose}
                    >
                        <i className="pi pi-times"></i>
                    </button>

                </div>

                <ul className="mobile-menu-links">

                    <li onClick={onClose}>
                        <Link to="/">Home</Link>
                    </li>

                    <li onClick={onClose}>
                        <Link to="/about">About</Link>
                    </li>

                    <li onClick={onClose}>
                        <Link to="/services">Services</Link>
                    </li>

                    <li onClick={onClose}>
                        <Link to="/solutions">Solutions</Link>
                    </li>

                    <li onClick={onClose}>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>

                    <li onClick={onClose}>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>

            </div>
        );
    }
}

export default MobileMenu;
