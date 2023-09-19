import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navlink" to="/buy">
        Buy
      </Link>
      <Link className="navlink" to="/sell">
        Sell
      </Link>
      <Link className="navlink" to="/profile">
        Profile
      </Link>
      <Link className="navlink" to="/">
        Home
      </Link>
      <Link className="navlink" to="/basket">
        Basket
      </Link>
    </div>
  );
};

export default Navbar;
