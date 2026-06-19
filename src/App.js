// src/App.js

import React from "react";

import AppRoutes from "./routes/AppRoutes";

import WhatsAppButton
from "./components/contact/WhatsAppButton";

import ScrollToTop
from "./components/layout/ScrollToTop";

import AuthProvider
from "./context/AuthContext";

import "./App.css";

class App extends React.Component {

    render() {

        return (

            <AuthProvider>

                <div className="app-container">

                    {/* ScrollTop Routes */}
                    <ScrollToTop />

                    {/* Application Routes */}
                    <AppRoutes />

                    {/* Floating WhatsApp Button */}
                    <WhatsAppButton />

                </div>

            </AuthProvider>
        );
    }
}

export default App;
