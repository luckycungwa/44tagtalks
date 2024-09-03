// src/App.js
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import Navigationbar from "./components/Navigationbar";
import ErrorBoundary from "./components/ErrorBoundary";
// import ProtectedRoute from "./components/ProtectedRoutes";
import Error404 from "./pages/Error404";

// lazy loading pages (navigation)
const Blog = lazy(() => import("./pages/Blog"));
const Post = lazy(() => import("./pages/Post"));
const Home = lazy(() => import("./pages/Home"));
// const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register"));
// const UserProfile = lazy(() => import("./pages/Profile"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
const FAQPage = lazy(() => import("./pages/FAQPage"));

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Navigationbar />
          <div className="mx-auto">
            <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post/:slug" element={<Post />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> */}
                {/* <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;