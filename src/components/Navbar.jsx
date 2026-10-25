import { Link, NavLink } from 'react-router-dom';
import { FiCalendar, FiGrid, FiArrowUpRight } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className="navbar eventhub-navbar">
      <div className="container">
        <Link className="navbar-brand fs-4 d-flex align-items-center" to="/">
          <span className="brand-mark"><FiCalendar /></span>
          <span>event<span className="brand-accent">hub</span><span className="brand-period">.</span></span>
        </Link>
        <div className="nav-pill">
          <NavLink to="/#events" className="nav-link explore-link">Explore events</NavLink>
          <Link to="/admin" className="btn admin-nav-btn"><FiGrid className="me-2" />Admin<FiArrowUpRight className="ms-1" /></Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
