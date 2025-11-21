import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Product = () => {
  const { cartItems, setCartItems } = useAuth();
  const [fetchedProduct, setFetchedProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setFetchedProduct(data));
  }, []);

  const filteredProducts = fetchedProduct
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      category === "all" ? true : product.category === category
    );

  const addItem = (id) => {
    const itemToAdd = fetchedProduct.find((item) => item.id === id);
    setCartItems([...cartItems, itemToAdd]);
  };
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-3">
        {/* Search + Category */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 pl-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
          />

          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          >
            <option value="all">--Select Category--</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing ">Women's Clothing</option>
          </select>
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <div className="p-3 bg-white rounded-full shadow-md border">
            <Link to="/dashboard">🛒</Link>
          </div>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-sm px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProducts.map((curr) => (
          <div
            key={curr.id}
            className="border p-4 rounded-xl shadow flex flex-col justify-between bg-white"
          >
            <div>
              <img
                src={curr.image}
                alt={curr.title}
                className="h-40 mx-auto mb-4 object-contain"
              />
              <h2 className="text-lg font-semibold mb-2">{curr.title}</h2>
              <p className="text-gray-700 font-medium mb-2">${curr.price}</p>
            </div>

            <button
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => addItem(curr.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
