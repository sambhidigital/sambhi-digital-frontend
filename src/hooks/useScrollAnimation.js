// src/hooks/useScrollAnimation.js

import {
    useState,
    useEffect
} from "react";

/* ==========================================
   SCROLL VISIBILITY HOOK
========================================== */

const useScrollAnimation = (
    threshold = 100
) => {

    const [isVisible, setIsVisible] =
        useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setIsVisible(
                window.scrollY > threshold
            );
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };

    }, [threshold]);

    return isVisible;
};

export default useScrollAnimation;
