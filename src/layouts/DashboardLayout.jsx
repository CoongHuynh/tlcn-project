import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { setSidebarOpen } from "../store/slices/sidebarSlice";
import Sidebar from "../components/Sidebar";
import { Images } from "../assets/images";
import { MdOutlineMenu } from "react-icons/md";
import {
  LogOut,
  User,
} from "lucide-react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content */}
      <div>
        {/* AppBar - Exact match to omgvn-reactjs AppBar */}
        <div className="sticky top-0 z-40 bg-primary shadow-lg">
          <div className="flex items-center justify-between px-6 py-3.5">
            {/* AppBar Left - Exact match */}
            <div className="flex items-center space-x-2.5">
              <button
                type="button"
                className="text-white hover:text-accent transition-transform duration-200 hover:scale-110"
                onClick={() => dispatch(setSidebarOpen())}
              >
                <MdOutlineMenu size={24} />
              </button>
              {/* Logo - Exact match to original */}
              <img 
                className="h-8 w-auto object-contain" 
                src={Images.OMGWhiteSvg} 
                alt="OMG Omnicom Media Group" 
              />
            </div>

            {/* AppBar Right */}
            <div className="flex items-center space-x-6">
              {/* User Profile */}
              {user && (
                <div className="flex items-center space-x-4">
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-sm font-semibold text-accent">
                      {user.name}
                    </span>
                    <span className="text-xs text-white">
                      {user.role || "Employee"}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt="User"
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-5 w-5 text-white" />
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="hidden md:flex items-center space-x-2 text-white hover:text-accent transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <main className="py-6">
          <div className="mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
