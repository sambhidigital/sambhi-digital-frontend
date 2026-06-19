// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

// PrimeReact
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Global CSS
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/responsive.css";

// Context Providers
import AppProvider from "./context/AppContext";
import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(

    <React.StrictMode>

        <HelmetProvider>

            <BrowserRouter>

                <ThemeProvider>

                    <AuthProvider>

                        <AppProvider>

                            <App />

                        </AppProvider>

                    </AuthProvider>

                </ThemeProvider>

            </BrowserRouter>

        </HelmetProvider>

    </React.StrictMode>
);

