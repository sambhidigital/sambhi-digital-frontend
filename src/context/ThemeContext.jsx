// src/context/ThemeContext.jsx

import React, {
    createContext,
    Component
} from "react";

/* ==========================================
   CONTEXT
========================================== */

export const ThemeContext =
    createContext();

/* ==========================================
   PROVIDER
========================================== */

class ThemeProvider extends Component {

    constructor(props) {

        super(props);

        this.state = {

            darkMode: true,

            loading: true
        };
    }

    /* ==========================================
       INITIALIZE THEME
    ========================================== */

    componentDidMount() {

        const savedTheme =
            localStorage.getItem(
                "darkMode"
            );

        if (savedTheme !== null) {

            const darkMode =
                savedTheme === "true";

            this.setState({

                darkMode,

                loading: false

            }, this.applyTheme);

        } else {

            const prefersDark =
                window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;

            this.setState({

                darkMode: prefersDark,

                loading: false

            }, this.applyTheme);
        }
    }

    /* ==========================================
       APPLY THEME
    ========================================== */

    applyTheme = () => {

        if (this.state.darkMode) {

            document.body.classList.add(
                "dark-theme"
            );

            document.body.classList.remove(
                "light-theme"
            );

        } else {

            document.body.classList.add(
                "light-theme"
            );

            document.body.classList.remove(
                "dark-theme"
            );
        }
    };

    /* ==========================================
       TOGGLE THEME
    ========================================== */

    toggleTheme = () => {

        this.setState(

            (prevState) => ({

                darkMode:
                    !prevState.darkMode

            }),

            () => {

                localStorage.setItem(

                    "darkMode",

                    this.state.darkMode
                );

                this.applyTheme();
            }
        );
    };

    /* ==========================================
       SET THEME
    ========================================== */

    setTheme = (darkMode) => {

        this.setState({

            darkMode

        }, () => {

            localStorage.setItem(

                "darkMode",

                darkMode
            );

            this.applyTheme();
        });
    };

    /* ==========================================
       PROVIDER
    ========================================== */

    render() {

        return (

            <ThemeContext.Provider

                value={{

                    darkMode:
                        this.state.darkMode,

                    loading:
                        this.state.loading,

                    toggleTheme:
                        this.toggleTheme,

                    setTheme:
                        this.setTheme
                }}
            >

                {
                    this.props.children
                }

            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;