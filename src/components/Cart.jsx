const Cart = ({ cartItems, removeCartItem }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="min-h-[60vh] bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cartItems.length === 0 ? (
            ""
          ) : (
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow p-4 flex items-center space-x-4"
                >
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="text-gray-700">${item.price}</p>
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition" onClick={() =>removeCartItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Summary */}
          <div>
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Order Summary
              </h2>

              <div className="space-y-2 pt-3 border-t">
                <div className="flex justify-between text-md font-semibold">
                  <span>Total</span>
                  <span className="text-gray-500">${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
