import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="w-full bg-gray-800 text-white px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
      {/* Left Links */}
      <div className="flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link to="/product" className="hover:text-gray-300 transition">
          Product
        </Link>
        <Link to="/dashboard" className="hover:text-gray-300 transition">
          Dashboard
        </Link>
      </div>

      {/* Right User Section */}
      <div className="flex items-center gap-4">
        {user.email ? (
          <>
            <span className="font-semibold">{user.userName}</span>
            <button
              onClick={logout}
              className="bg-red-600 px-4 py-1.5 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-red-600 px-4 py-1.5 rounded-md hover:bg-red-700 transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
