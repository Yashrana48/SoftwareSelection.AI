import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
    <div className="font-bold text-xl text-blue-700">AI Architecture DSS</div>
    <div className="space-x-4">
      <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/questionnaire" className="text-gray-700 hover:text-blue-600">Questionnaire</Link>
      <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
      <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
      <Link to="/learning" className="text-gray-700 hover:text-blue-600">Learning Hub</Link>
    </div>
  </nav>
);

export default Navbar;