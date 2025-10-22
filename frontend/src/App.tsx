import React from "react";
import { Routes, Route } from "react-router-dom";

// --- Public pages ---
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";

// --- Admin dashboard components ---
import AdminLayout from "./dashboardDesigns/AdminLayout";
import Overview from "./components/AdminDashboard/Overview";
import Users from "./components/AdminDashboard/Users";
import SupportTicket from "./components/AdminDashboard/SupportTicket";
import Profile from "./components/AdminDashboard/Profile";
import LogOut from "./components/AdminDashboard/LogOut";
import Schools from "./components/AdminDashboard/Schools";

const App: React.FC = () => {
  return (
    <Routes>
      {/* --- Public Routes --- */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* --- Admin Dashboard Routes --- */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Overview />} /> {/* Default admin page */}
        <Route path="overview" element={<Overview />} />
        <Route path="users" element={<Users />} />
        <Route path="support-tickets" element={<SupportTicket />} />
        <Route path="profile" element={<Profile />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="schools" element={<Schools />} />
       
       
      </Route>

      {/* --- Catch-all / Error Route --- */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
