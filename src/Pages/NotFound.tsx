import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-6xl font-bold text-kOrange">404</h1>
      <p className="text-xl text-gray-700 mt-2">Oops! The page you are looking for doesn't exist or is still under construction...</p>
      <Link to="/" className="mt-6 bg-kOrange hover:bg-amber-800 text-white font-semibold py-3 px-6 rounded-lg transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;