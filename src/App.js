import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import Navigationbar from "./components/Navigationbar";
import ErrorBoundary from "./components/ErrorBoundary";

// lazy loading pages (navigation)
const Blog = lazy(() => import("./pages/Blog"));
const Post = lazy(() => import("./pages/Post"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const UserProfile = lazy(() => import("./pages/Profile"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));
// Route accessible to authenticated users

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Navigationbar />

          <div className=" mx-auto p-4">
            <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post/:slug" element={<Post />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />

                <Route path="*" element={<div>404. Page not found</div>} />
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
