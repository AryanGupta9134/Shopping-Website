const NotFound = () => {
  return (
       <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">
        Oops! The page you're looking for doesn’t exist.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>

      <img
        className="w-64 mt-10 opacity-80"
        src="https://cdn-icons-png.flaticon.com/512/7486/7486802.png"
        alt="Not Found Illustration"
      />
    </div>
  )
}

export default NotFound
