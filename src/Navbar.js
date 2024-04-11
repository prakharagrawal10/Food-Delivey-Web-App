import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h1>Dashify</h1>
      </Link>
      <div className="links">
        <Link to="/account" className="link">My Account</Link>
        <Link to="/cart" className="link">Cart</Link>
        <Link to="/login" className="link">Login/Signup</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
