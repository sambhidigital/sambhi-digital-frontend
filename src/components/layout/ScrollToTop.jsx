import React from "react";
import { useLocation } from "react-router-dom";

/* ==========================================
   SCROLL TO TOP / HASH NAVIGATION
========================================== */

function ScrollToTop() {

    const {
        pathname,
        hash
    } = useLocation();

    React.useEffect(() => {

        if (hash) {

            const element =
                document.querySelector(
                    hash
                );

            if (element) {

                setTimeout(() => {

                    element.scrollIntoView({

                        behavior: "smooth",
                        block: "start"
                    });

                }, 100);

                return;
            }
        }

        window.scrollTo({

            top: 0,
            left: 0,
            behavior: "smooth"
        });

    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;
