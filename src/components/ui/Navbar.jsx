import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/style/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="logo-box">
          <h1>KARAKUL MARJONA</h1>
        </div>

        {/* BURGER BUTTON */}
        <div className={`burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${open ? "show" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/marketplaces" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                Marketplaces
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contacts" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                Contacts
              </NavLink>
            </li>
          </ul>

          {/* MOBILE LANGUAGE SELECT */}
          <div className="lang-mobile">
            <select>
              <option value="uz">Uz</option>
              <option value="en">En</option>
              <option value="ru">Ru</option>
              <option value="fr">Fr</option>
              <option value="tr">Tr</option>
            </select>
          </div>
        </div>

        {/* DESKTOP LANGUAGE SELECT */}
        <div className="lang-desktop">
          <select>
            <option value="uz">Uz</option>
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value="fr">Fr</option>
            <option value="tr">Tr</option>
          </select>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
