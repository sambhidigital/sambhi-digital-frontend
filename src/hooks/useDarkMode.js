// src/hooks/useDarkMode.js

import {
    useEffect,
    useState
} from "react";

/* ==========================================
   GET INITIAL THEME
========================================== */

const getInitialTheme = () => {

    if (typeof window === "undefined") {

        return true;
    }

    const savedTheme =
        localStorage.getItem(
            "darkMode"
        );

    if (savedTheme !== null) {

        return JSON.parse(
            savedTheme
        );
    }

    return window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
};

/* ==========================================
   CUSTOM HOOK
========================================== */

const useDarkMode = () => {

    const [darkMode, setDarkMode] =
        useState(
            getInitialTheme()
        );

    useEffect(() => {

        localStorage.setItem(

            "darkMode",

            JSON.stringify(
                darkMode
            )
        );

        document.body.classList.toggle(
            "dark-theme",
            darkMode
        );

        document.body.classList.toggle(
            "light-theme",
            !darkMode
        );

    }, [darkMode]);

    const toggleDarkMode = () => {

        setDarkMode(
            (prev) => !prev
        );
    };

    const setTheme = (
        value
    ) => {

        setDarkMode(value);
    };

    return {

        darkMode,

        toggleDarkMode,

        setTheme
    };
};

export default useDarkMode;
