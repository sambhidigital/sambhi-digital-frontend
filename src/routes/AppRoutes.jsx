// src/routes/AppRoutes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// Main Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Solutions from "../pages/Solutions";
import Portfolio from "../pages/Portfolio";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import InternshipApply from "../pages/InternshipApply";

// Additional Pages
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import ThankYou from "../pages/ThankYou";
import NotFound from "../pages/NotFound";
import ServiceDetails from "../pages/ServiceDetails";

// Auth Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";

// Details Pages
import BlogDetails from "../pages/BlogDetails";
import ProjectDetails from "../pages/ProjectDetails";
import JobDetails from "../pages/JobDetails";
import SolutionDetails from "../pages/SolutionDetails";
import CaseStudyDetails from "../pages/CaseStudyDetails";

// Admin pages
import ManageSolutions from "../pages/admin/ManageSolutions";
import ManagePortfolio from "../pages/admin/ManagePortfolio";
import ManageBlogs from "../pages/admin/ManageBlogs";
import ManageTeam from "../pages/admin/ManageTeam";
import ManageTestimonials from "../pages/admin/ManageTestimonials";
import ManageFaqs from "../pages/admin/ManageFaqs";
import ManageNewsletter from "../pages/admin/ManageNewsletter";
import ManageCareers from "../pages/admin/ManageCareers";
import ManageApplications from "../pages/admin/ManageApplications";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageContacts from "../pages/admin/ManageContacts";
import ManageFiles from "../pages/admin/ManageFiles";
import ManageUsers from "../pages/admin/ManageUsers";
import Settings from "../pages/admin/Settings";
import ManageRoles from "../pages/admin/ManageRoles";
import ManageAuditLogs from "../pages/admin/ManageAuditLogs";
import ManageServices from "../pages/admin/ManageServices";
import ResetPassword from "../pages/ResetPassword";
import Notifications from "../pages/admin/Notifications";
import SeoSettings from "../pages/admin/SeoSettings";

// Route Protection
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

class AppRoutes extends React.Component {

    render() {

        return (

            <Routes>

                {/* Home */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* About */}
                <Route
                    path="/about"
                    element={<About />}
                />

                {/* Services */}
                <Route
                    path="/services"
                    element={<Services />}
                />

                <Route
                    path="/services/:slug"
                    element={
                        <ServiceDetails />
                    }
                />

                {/* Solutions */}
                <Route
                    path="/solutions"
                    element={<Solutions />}
                />

                <Route
                    path="/solution-details/:id"
                    element={<SolutionDetails />}
                />

                <Route
                    path="/case-study/:id"
                    element={<CaseStudyDetails />}
                />

                {/* Portfolio */}
                <Route
                    path="/portfolio"
                    element={<Portfolio />}
                />

                <Route
                    path="/portfolio/:id"
                    element={<ProjectDetails />}
                />

                {/* Careers */}
                <Route
                    path="/careers"
                    element={<Careers />}
                />

                <Route
                    path="/careers/:id"
                    element={<JobDetails />}
                />

                <Route
                    path="/careers/apply/internship"
                    element={<InternshipApply />}
                />

                {/* Blog */}
                <Route
                    path="/blog"
                    element={<Blog />}
                />

                <Route
                    path="/blog/:id"
                    element={<BlogDetails />}
                />

                {/* Contact */}
                <Route
                    path="/contact"
                    element={<Contact />}
                />

                {/* Privacy */}
                <Route
                    path="/privacy-policy"
                    element={<PrivacyPolicy />}
                />

                {/* Terms */}
                <Route
                    path="/terms-conditions"
                    element={<TermsConditions />}
                />

                {/* Thank You */}
                <Route
                    path="/thank-you"
                    element={<ThankYou />}
                />

                {/* Authentication */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route

                    path="/reset-password"

                    element={
                        <ResetPassword />
                    }

                />

                {/* Protected Profile */}
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                {/* Future Admin Routes */}

                {/* Admin portal */}
                <Route
                    path="/admin/solutions"
                    element={
                        <AdminRoute>
                            <ManageSolutions />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/portfolio"
                    element={
                        <AdminRoute>
                            <ManagePortfolio />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/blogs"
                    element={
                        <AdminRoute>
                            <ManageBlogs />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/team"
                    element={
                        <AdminRoute>
                            <ManageTeam />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/testimonials"
                    element={
                        <AdminRoute>
                            <ManageTestimonials />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/faqs"
                    element={
                        <AdminRoute>
                            <ManageFaqs />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/newsletter"
                    element={
                        <AdminRoute>
                            <ManageNewsletter />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/careers"
                    element={
                        <AdminRoute>
                            <ManageCareers />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/applications"
                    element={
                        <AdminRoute>
                            <ManageApplications />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/dashboard"
                    element={
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/contacts"
                    element={
                        <AdminRoute>
                            <ManageContacts />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/files"
                    element={
                        <AdminRoute>
                            <ManageFiles />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/users"
                    element={
                        <AdminRoute>
                            <ManageUsers />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/settings"
                    element={
                        <AdminRoute>
                            <Settings />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/seo"
                    element={
                        <AdminRoute>
                            <SeoSettings />
                        </AdminRoute>
                    }
                />

                <Route

                    path="/admin/notifications"

                    element={
                        <AdminRoute>
                            <Notifications />
                        </AdminRoute>
                    }

                />

                <Route
                    path="/admin/roles"
                    element={
                        <AdminRoute>
                            <ManageRoles />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/audit-logs"
                    element={
                        <AdminRoute>
                            <ManageAuditLogs />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/services"
                    element={
                        <AdminRoute>
                            <ManageServices />
                        </AdminRoute>
                    }
                />



                {/* 404 */}
                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>
        );
    }
}

export default AppRoutes;