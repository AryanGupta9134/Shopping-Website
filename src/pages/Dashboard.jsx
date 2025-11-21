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
        <div className="min-h-screen flex flex-col items-center bg-gray-100 px-4 py-10">
          {/* Dashboard Welcome Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full mb-10">
            <p className="text-xl text-gray-700">
              Welcome,{" "}
              <span className="font-semibold text-gray-900">{user.email}</span>
            </p>
          </div>

          {/* Cart Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              🛒 Your Cart
            </h3>

            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">
                Your cart is empty.
              </p>
            ) : (
              <div className="space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-50 p-5 rounded-xl shadow-sm border"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
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

                {/* Total Section */}
                <div className="border-t pt-4 text-right">
                  <p className="text-2xl font-bold text-gray-900">
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
