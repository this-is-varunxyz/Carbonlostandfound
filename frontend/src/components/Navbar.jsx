import { Link } from 'react-router-dom';
import { PackageSearch, PlusCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* Logo/Brand */}
        <Link to="/" className="nav-brand">
          <PackageSearch size={28} strokeWidth={1.5} />
          <span>Campus Lost & Found</span>
        </Link>

        {/* Action Buttons */}
        <div className="nav-actions">
          <Link to="/" className="nav-link">
            Feed
          </Link>
          <Link to="/upload" className="btn-report">
            <PlusCircle size={20} strokeWidth={2} />
            Report Item
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;