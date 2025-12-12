import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/style/Navbar.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation();

  return (
    <nav>
      <div className="container">
        <div className="logo-box">
          <img src={logo} alt="KARAKUL LOGO" />
        </div>

        {/* BURGER BUTTON */}
        <div
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${open ? "show" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t(`home`)}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t(`products`)}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/marketplaces"
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t(`marketplaces`)}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t(`about`)}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contacts"
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t(`contact`)}
              </NavLink>
            </li>
          </ul>

          {/* MOBILE LANGUAGE SELECT */}
          <div className="lang-mobile">
            <select
              id="select"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              defaultValue="uz"
            >
              <option value="uz">🇺🇿 O'zbek</option>
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇬🇧 English</option>
              <option value="tr">🇹🇷 Türkçe</option>
              <option value="fr">🇫🇷 Français</option>
            </select>
          </div>
        </div>

        {/* DESKTOP LANGUAGE SELECT */}
        <div className="lang-desktop">
          <select
            id="select"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            defaultValue="uz"
          >
            <option value="uz">🇺🇿 O'zbek</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="en">🇬🇧 English</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="fr">🇫🇷 Français</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
