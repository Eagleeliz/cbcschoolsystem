import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidenav from "./AdminSidenav";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidenav />

      {/* Main Page Wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Header / Breadcrumb */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h4 className="text-2xl font-semibold text-gray-800">Dashboard</h4>
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline text-blue-600">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-500">Dashboard</li>
            </ol>
          </nav>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet /> {/* 👈 All admin pages (Overview, Users, etc.) render here */}
        </main>

        {/* Footer */}
      
      </div>
    </div>
  );
};

export default AdminLayout;
