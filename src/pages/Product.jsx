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
    <div>
      <div className="flex justify-between items-center mr-4">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 ml-4 mt-2 pl-4 py-2 rounded-md outline focus:ring-2 focus:ring-blue-500 w-64"
          />
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mr-4 mt-2 p-2 border border-gray-300 rounded-md outline focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">--Select Category--</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing "> Women's Clothing</option>
          </select>
        </div>
        <div className="relative inline-block cursor-pointer mt-2">
          <div className="p-2 bg-white rounded-full shadow-md border">
            <Link to="/dashboard"> 🛒</Link>
          </div>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-sm px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4">
        {filteredProducts.map((curr) => (
          <div
            key={curr.id}
            className="border p-4 rounded shadow flex flex-col justify-between"
          >
            <div>
              <img
                src={curr.image}
                alt={curr.title}
                className="h-40 mx-auto mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{curr.title}</h2>
              <p className="text-gray-700 mb-2">${curr.price}</p>
            </div>
            <div>
              <button
                className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => addItem(curr.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
