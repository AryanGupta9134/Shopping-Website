const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Improve yourself 🛍️
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Discover amazing products, unbeatable deals, and a smooth shopping
        experience.
      </p>

      <a
        href="/product"
        className="px-8 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
      >
        Start Shopping
      </a>

      <img
        className="w-72 mt-12"
        src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
        alt="Shopping Illustration"
      />
    </div>
  );
};

export default Home;
