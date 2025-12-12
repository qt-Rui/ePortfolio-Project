import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My ePortfolio</h1>

        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link to="/self-assessment" className="hover:text-blue-600">Self-Assessment</Link></li>
          <li><Link to="/code-review" className="hover:text-blue-600">Code Review</Link></li>
        </ul>
      </div>
    </nav>
  );
}
