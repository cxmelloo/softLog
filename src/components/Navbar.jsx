import { NavLink } from "react-router-dom";

function Navbar({ mobile = false, onLinkClick }) {
  return (
    <nav className={ mobile ? "flex flex-col gap-5" : "hidden sm:flex sm:ml-auto md:ml-0 gap-10"}>
      <NavLink to="/categories" onClick={onLinkClick}>Categories</NavLink>
      <NavLink to="/blog" onClick={onLinkClick}>Blog</NavLink>
      <NavLink to="/contact" onClick={onLinkClick}>Contact</NavLink>
    </nav>
  );
}

export default Navbar;