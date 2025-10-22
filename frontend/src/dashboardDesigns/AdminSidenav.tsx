import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAccountCircle, MdFormatShapes, MdTableChart, MdFace, MdInsertDriveFile, MdErrorOutline } from "react-icons/md";

const AdminSidenav: React.FC = () => {
  return (
    <aside className="w-64 min-h-screen bg-blue-400 text-white">
      {/* Sidebar Scroll Area */}
      <div className="overflow-y-auto h-full p-4 ">
        <h2 className="text-xl font-semibold mb-8 text-center">Admin Panel</h2>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-5">
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-2 rounded-md transition ${
                    isActive ? "bg-white" : "hover:bg-blue-800"
                  }`
                }
              >
                <MdDashboard size={20} />
                <span className="text-xl">Overview</span>
              </NavLink>
            </li>

            <li>

              <NavLink  to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-white" : "hover:bg-green-800"
                  }`
                }
              >
                <MdAccountCircle size={20} />
                <span className=" text-xl">Users</span>
              </NavLink>
            </li>
                <li>
              <NavLink
                to="/admin/schools"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-white" : "hover:bg-blue-800"
                  }`
                }
              >
                <MdErrorOutline size={20} />
                <span  className=" text-xl">Schools</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/profile"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-white" : "hover:bg-blue-800"
                  }`
                }
              >
                <MdFormatShapes size={20} />
                <span  className=" text-xl">Profile</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/support-tickets"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-white" : "hover:bg-blue-800"
                  }`
                }
              >
                <MdTableChart size={20} />
                <span  className=" text-xl">Support Ticket</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/logout"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    isActive ? "bg-white" : "hover:bg-yellow-800"
                  }`
                }
              >
                <MdFace size={20} />
                <span  className=" text-xl">Log Out</span>
              </NavLink>
            </li>

           

          
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidenav;
