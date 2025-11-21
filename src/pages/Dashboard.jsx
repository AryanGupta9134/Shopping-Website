import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user, cartItems, setCartItems } = useAuth();

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };
  return (
    <>
      {user.email ? (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 px-4 py-10">
          {/* Dashboard Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full mb-10">

            <p className="text-gray-600 text-lg">
              Welcome,{" "}
              <span className="font-medium text-gray-800">{user.email}</span>
            </p>
          </div>

          {/* Cart Section */}
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl w-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              🛒 Your Cart
            </h3>

            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">${item.price}</p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                {/* Order Summary */}
                <div className="border-t pt-4 text-right">
                  <p className="text-xl font-semibold text-gray-800">
                    Total:{" "}
                    <span className="text-green-600">
                      ${cartItems.reduce((sum, item) => sum + item.price, 0)}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default Dashboard;
