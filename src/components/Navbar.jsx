import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
    const {user, logout} = useAuth();
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white w-full">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
       {user.email ? (
        <div className="flex gap-4 items-center">
            <span>{user.userName}</span>
            <button onClick={logout} className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition">Logout</button>
        </div>
       ):(
        <Link to="/login" className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition">Login</Link>
       )}
      </div>
    </div>
  );
};

export default Navbar;
