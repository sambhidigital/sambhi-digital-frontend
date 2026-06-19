import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {

    render() {

        const { visible } = this.props;

        return (

            <div className={`sidebar ${visible ? "sidebar-active" : ""}`}>

                <div className="sidebar-content">

                    <h2 className="sidebar-logo">
                        Sambhi Digital
                    </h2>

                    <ul className="sidebar-menu">

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/services">Services</Link>
                        </li>

                        <li>
                            <Link to="/solutions">Solutions</Link>
                        </li>

                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>

                </div>

            </div>
        );
    }
}

export default Sidebar;
