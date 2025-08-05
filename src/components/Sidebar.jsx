import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { setSidebarClose } from "../store/slices/sidebarSlice";
import RoleBadge from "./RoleBadge";
import { Images } from "../assets/images";
import { MdOutlineClose } from "react-icons/md";
import { LogOut, User } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const navigation = [
    {
      name: "Timesheet",
      href: "/dashboard/timesheet",
      icon: "📊",
      current: location.pathname === "/dashboard/timesheet",
      roles: ["admin", "manager", "employee"],
    },
    {
      name: "Leave Management",
      href: "/dashboard/leave",
      icon: "📅",
      current: location.pathname === "/dashboard/leave",
      roles: ["admin", "manager", "employee"],
    },
    {
      name: "Admin Timesheet",
      href: "/dashboard/admin/timesheet",
      icon: "👥",
      current: location.pathname === "/dashboard/admin/timesheet",
      roles: ["admin", "manager"],
    },
    {
      name: "Admin Leave",
      href: "/dashboard/admin/leave",
      icon: "⚙️",
      current: location.pathname === "/dashboard/admin/leave",
      roles: ["admin", "manager"],
    },
  ];

  // Lọc navigation theo role của user
  const filteredNavigation = navigation.filter((item) =>
    item.roles.includes(user?.role || "employee")
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-[999] "
          onClick={() => dispatch(setSidebarClose())}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-60 z-[1000] bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out rounded-tr-xl rounded-br-xl transform
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} `}
        style={{
          padding: "20px 16px",
          boxShadow: "0 0.125rem 0.25rem rgba(165, 163, 174, 0.3)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              className="h-8 w-auto object-contain"
              src={Images.OMGDenimSvg}
              alt="OMG Omnicom Media Group"
            />
          </div>
          <button
            onClick={() => dispatch(setSidebarClose())}
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            style={{ marginLeft: 10 }}
          >
            <MdOutlineClose size={24} />
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1">
          <ul className="grid gap-[6px] menu-list">
            {filteredNavigation.map((item) => (
              <li key={item.name} className="menu-item">
                <Link
                  to={item.href}
                  className={`menu-link flex items-center h-11 px-5 py-0.5 text-sm font-medium transition-all duration-200 ${
                    item.current
                      ? "bg-primary text-white font-semibold rounded-md shadow-[rgba(93,95,239,0.3)_0px_2px_8px_0px]"
                      : "text-gray-700 hover:bg-black/5 hover:text-gray-900 rounded-md"
                  }`}
                  onClick={() => dispatch(setSidebarClose())}
                >
                  <span className="menu-link-icon mr-3.5 text-lg w-5 flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className={`menu-link-text font-medium ${item.current ? "font-semibold text-white" : "text-gray-700"}`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* User Profile Section */}
        <div className="mt-auto border-t border-gray-200 pt-4">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="User"
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <User className="h-5 w-5 text-primary" />
              )}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-700">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500">{user?.email}</p>
              {user?.role && (
                <div className="mt-1">
                  <RoleBadge role={user.role} />
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-5 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all duration-200"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 