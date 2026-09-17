import { NavLink } from "react-router-dom";

function FooterNav() {
  return (
    <nav className="flex flex-wrap items-start gap-5 mb-10">
      <ul className="grid min-w-53 gap-2">
        <li className="mb-6 font-semibold text-2xl">Product</li>
        <li className="c-nav"><NavLink to="/categories">Categories</NavLink></li>
        <li className="c-nav"><NavLink to="/review">Write a review</NavLink></li>
        <li className="c-nav"><NavLink to="/profile">Claim your profile</NavLink></li>
      </ul>

      <ul className="grid min-w-53 gap-2">
        <li className="mb-6 font-semibold text-2xl">Company</li>
        <li className="c-nav"><NavLink to="/about">About us</NavLink></li>
        <li className="c-nav"><NavLink to="/press">Press</NavLink></li>
        <li className="c-nav"><NavLink to="/media">Media kit</NavLink></li>
        <li className="c-nav"><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <ul className="grid min-w-53 gap-2">
        <li className="mb-6 font-semibold text-2xl">Social</li>
        <li className="c-nav">
          <a href="https://x.com/TeamMessi?lang=en" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </li>
        <li className="c-nav">
          <a href="https://www.linkedin.com/in/lionel-andr%C3%A9s-messi-cuccitini-70012932a" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li className="c-nav">
          <a href="https://www.facebook.com/leomessi" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </li>
        <li className="c-nav">
          <a href="https://www.instagram.com/leomessi/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </li>
        <li className="c-nav">
          <a href="https://www.youtube.com/@LeoMessi" target="_blank" rel="noreferrer">
            Youtube
          </a>
        </li>
      </ul>

      <ul className="grid min-w-53 gap-2">
        <li className="mb-6 font-semibold text-2xl">Resources</li>
        <li className="c-nav"><NavLink to="/blog">Blog</NavLink></li>
        <li className="c-nav"><NavLink to="/letter">Newsletter</NavLink></li>
        <li className="c-nav"><NavLink to="/support">Support</NavLink></li>
        <li className="c-nav"><NavLink to="/sitemap">Sitemap</NavLink></li>
      </ul>

      <ul className="grid min-w-53 gap-2">
        <li className="mb-6 font-semibold text-2xl">Legal</li>
        <li className="c-nav"><NavLink to="/terms">Terms</NavLink></li>
        <li className="c-nav"><NavLink to="/privacy">Privacy</NavLink></li>
        <li className="c-nav"><NavLink to="/cookies">Cookies</NavLink></li>
      </ul>
    </nav>
  );
}

export default FooterNav;
