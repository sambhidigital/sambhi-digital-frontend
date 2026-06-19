import React from "react";

import { Button } from "primereact/button";

import { motion } from "framer-motion";

class PrimaryButton extends React.Component {

    render() {

        const {
            label,
            icon,
            onClick,
            className,
            type,
            loading
        } = this.props;

        return (

            <motion.div

                whileHover={{
                    scale: 1.05,
                    y: -3
                }}

                whileTap={{
                    scale: 0.95
                }}
            >

                <Button
                    label={label}
                    icon={icon}
                    onClick={onClick}
                    loading={loading}
                    type={type || "button"}
                    className={`
                        primary-btn
                        p-button-rounded
                        ${className || ""}
                    `}
                />

            </motion.div>
        );
    }
}

export default PrimaryButton;
