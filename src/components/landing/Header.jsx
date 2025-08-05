import { Link } from "react-router-dom";
import { LANDING_DATA } from "../../constants/landingData";

const Header = () => {
  return (
    <header className="bg-primary text-light shadow-lg sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover-scale">
              <img
                src={LANDING_DATA.company.logo}
                alt={LANDING_DATA.company.name}
                className="h-28 py-2 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {LANDING_DATA.navigation.map((item) => (
              <Link key={item.name} to={item.href} className="nav-link">
                {item.name}
              </Link>
            ))}
            <Link to="/signup" className="btn-primary">
              Request Access
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-light hover:text-accent transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
