import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="px-6 py-4">
      <div className="flex items-center justify-between ">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="text-lg font-semibold text-gray-800">UI Practice Lab</h1>
      </div>
    </nav>
  );
}

export default Navbar;
