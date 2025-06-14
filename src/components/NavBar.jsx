import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-brand">
        <Link to="/">MovieBrand</Link>
      </div>
      <div className="nav-list">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
}
export default NavBar;
