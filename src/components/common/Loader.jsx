import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

class Loader extends React.Component {

    render() {

        return (

            <div className="loader-container">

                <ProgressSpinner
                    style={{
                        width: "60px",
                        height: "60px"
                    }}
                    strokeWidth="4"
                    animationDuration=".8s"
                />

            </div>

            
        );
    }
}

export default Loader;
