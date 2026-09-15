import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="hidden sm:flex sm:ml-auto md:ml-0 gap-10">
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;