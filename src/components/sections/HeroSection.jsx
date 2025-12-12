import "../../assets/style/HeroSection.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">{t("hero_title")}</h1>

        <p className="hero-subtitle">{t("hero_subtitle")}</p>

        {/* NavLink orqali /products ga reloadsiz o'tish */}
        <NavLink to="/products" className="hero-btn">
          {t("hero_button")}
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
