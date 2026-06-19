// src/hooks/useWindowSize.js

import {
    useEffect,
    useState
} from "react";

/* ==========================================
   GET WINDOW SIZE
========================================== */

const getWindowSize = () => {

    if (typeof window === "undefined") {

        return {

            width: 0,

            height: 0
        };
    }

    return {

        width: window.innerWidth,

        height: window.innerHeight
    };
};

/* ==========================================
   CUSTOM HOOK
========================================== */

const useWindowSize = () => {

    const [windowSize, setWindowSize] =
        useState(getWindowSize());

    useEffect(() => {

        const handleResize = () => {

            setWindowSize(
                getWindowSize()
            );
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {

            window.removeEventListener(
                "resize",
                handleResize
            );
        };

    }, []);

    return {

        width: windowSize.width,

        height: windowSize.height,

        isMobile:
            windowSize.width < 768,

        isTablet:
            windowSize.width >= 768 &&
            windowSize.width < 992,

        isDesktop:
            windowSize.width >= 992
    };
};

export default useWindowSize;
