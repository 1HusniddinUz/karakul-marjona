import "../assets/style/Marketplaces.css";
import { useTranslation } from "react-i18next";

const Marketplaces = () => {
  const { t } = useTranslation();

  return (
    <section id="marketplaces-page">
      <div className="mp-wrapper">

        <h1 className="mp-heading">{t("mp_heading")}</h1>
        <p className="mp-subtitle">{t("mp_subtitle")}</p>

        <div className="mp-grid">
          {marketplaces.map((mkt) => (
            <div className="mp-card" key={mkt.name}>

              <div className="mp-card-top">
                <div className="mp-logo-wrap">
                  <img src={mkt.logo} alt={mkt.name} className="mp-logo" />
                </div>

                <div className="mp-top-text">
                  <span className="mp-name">{mkt.name}</span>
                  <span className="mp-region">{mkt.region}</span>
                </div>
              </div>

              <p className="mp-desc">{mkt.desc}</p>

              <a className="mp-link-btn" href={mkt.link}>
                {t("mp_btn_visit")}
              </a>

            </div>
          ))}
        </div>

        <div className="mp-note">
          <p>
            {t("mp_note")} <a href="/contacts">{t("contact")}</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Marketplaces;
