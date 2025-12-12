import "../assets/style/Marketplaces.css";
import { useTranslation } from "react-i18next";

import ozonLogo from "../assets/images/marketplaces-icon/ozon.png";
import wbLogo from "../assets/images/marketplaces-icon/wb.png";
import uzumLogo from "../assets/images/marketplaces-icon/uzummarket.png";
import yandexLogo from "../assets/images/marketplaces-icon/yandexmarket.png";

const Marketplaces = () => {
  const { t } = useTranslation();

  const marketplaces = [
    {
      name: t("mp_ozon_name"),
      region: t("mp_ozon_region"),
      desc: t("mp_ozon_desc"),
      link: "https://uz.ozon.com/product/sharf-komplekt-s-aksessuarom-1-3220537152/?oos_search=false",
      logo: ozonLogo,
    },
    {
      name: t("mp_wb_name"),
      region: t("mp_wb_region"),
      desc: t("mp_wb_desc"),
      link: "https://www.wildberries.ru/seller/250059885",
      logo: wbLogo,
    },
    {
      name: t("mp_uzum_name"),
      region: t("mp_uzum_region"),
      desc: t("mp_uzum_desc"),
      link: "https://uzum.uz/uz/product/erkaklar-beysbolkasi-afgon-karamel---10-2191299?skuId=7852747",
      logo: uzumLogo,
    },
    {
      name: t("mp_yandex_name"),
      region: t("mp_yandex_region"),
      desc: t("mp_yandex_desc"),
      link: "https://market.yandex.uz/card/zhenskiy-sharf-kapyushon-iz-afganskogo-karakulya-stilnyy-aksessuar-kotoryy-odnovremenno-sogrevayet-i-podcherkivayet-status/4841745261?do-waremd5=fLLVRJpg9zRQuDSK_jcrHg&businessId=216503443&ogV=-8",
      logo: yandexLogo,
    },
  ];

  return (
    <section id="marketplaces-page">
      <div className="mp-wrapper">
        {/* Page heading */}
        <h1 className="mp-heading">{t("mp_heading")}</h1>

        {/* Subtitle */}
        <p className="mp-subtitle">{t("mp_subtitle")}</p>

        {/* Cards */}
        <div className="mp-grid">
          {marketplaces.map((mkt) => (
            <div className="mp-card" key={mkt.name}>
              <div className="mp-card-top">
                <div className="mp-logo-wrap">
                  <img
                    src={mkt.logo}
                    alt={`${mkt.name} logo`}
                    className="mp-logo"
                  />
                </div>
                <div className="mp-top-text">
                  <span className="mp-name">{mkt.name}</span>
                  <span className="mp-region">{mkt.region}</span>
                </div>
              </div>

              <p className="mp-desc">{mkt.desc}</p>

              <a
                href={mkt.link}
                target="_blank"
                rel="noreferrer"
                className="mp-link-btn"
              >
                {t("mp_btn_visit")}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mp-note">
          <p>{t("mp_note")}</p>
        </div>
      </div>
    </section>
  );
};

export default Marketplaces;
