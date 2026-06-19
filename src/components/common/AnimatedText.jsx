import React from "react";

import { motion } from "framer-motion";

class AnimatedText extends React.Component {

    render(){

        return(

            <motion.h1

                initial={{
                    opacity:0,
                    y:50
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:1
                }}

                className={this.props.className}
            >

                {this.props.text}

            </motion.h1>
        );
    }
}

export default AnimatedText;
