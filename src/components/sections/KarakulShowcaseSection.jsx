import "../../assets/style/KarakulShowcaseSection.css";
import { useTranslation } from "react-i18next";

const KarakulShowcaseSection = () => {
  const { t } = useTranslation();

  return (
    <section id="karakul-showcase">
      <div className="ks-wrapper">

        <div className="ks-left">
          <p className="ks-tagline">{t("ks_tagline")}</p>

          <h2 className="ks-title">
            {t("ks_title_main")} <span>{t("ks_title_span")}</span>
          </h2>

          <p className="ks-text">{t("ks_text")}</p>

          <div className="ks-pills">
            <span>{t("ks_pill_coats")}</span>
            <span>{t("ks_pill_hats")}</span>
            <span>{t("ks_pill_accessories")}</span>
          </div>

          <div className="ks-links">
            <a href="/products" className="ks-link-main">
              {t("ks_link_collection")}
            </a>
            <a href="/about" className="ks-link-secondary">
              {t("ks_link_story")}
            </a>
          </div>
        </div>

        <div className="ks-right">
          <div className="ks-main-card"></div>
          <div className="ks-mini-card ks-mini-top"></div>
          <div className="ks-mini-card ks-mini-bottom"></div>
          <div className="ks-vertical-label">{t("ks_vertical_label")}</div>
        </div>

      </div>
    </section>
  );
};

export default KarakulShowcaseSection;
