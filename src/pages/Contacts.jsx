import "../assets/style/Contacts.css";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts-page">
      <div className="contacts-wrapper">
        <h1 className="contacts-heading">{t("contacts_heading")}</h1>

        <div className="contacts-main">
          <div className="contacts-left">
            <h2>{t("contacts_getintouch")}</h2>
            <p className="contacts-left-text">{t("contacts_text")}</p>

            <div className="contacts-block">
              <span className="label">{t("contacts_label_email")}</span>
              <a href="mailto:husniddinhalimov112@gmail.com">
                husniddinhalimov112@gmail.com
              </a>
            </div>

            <div className="contacts-block">
              <span className="label">{t("contacts_label_telegram")}</span>
              <a href="https://t.me/+998771238096">+998 77 123 80 96</a>
            </div>

            <div className="contacts-block">
              <span className="label">{t("contacts_label_instagram")}</span>
              <a href="https://instagram.com/marjon_karakul">@marjon_karakul</a>
            </div>
          </div>

          <div className="contacts-right">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label>{t("contacts_form_firstname")}</label>
                  <input type="text" required />
                </div>

                <div className="form-field">
                  <label>{t("contacts_form_lastname")}</label>
                  <input type="text" required />
                </div>
              </div>

              <div className="form-field">
                <label>{t("contacts_form_email")}</label>
                <input type="email" required />
              </div>

              <div className="form-field">
                <label>{t("contacts_form_message")}</label>
                <textarea rows="5" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                {t("contacts_form_submit")}
              </button>
            </form>
          </div>
        </div>

        <div className="contacts-info">
          <div className="contacts-info-grid">
            <div className="info-col">
              <h3>{t("contacts_info_address")}</h3>
              <p>{t("contacts_info_city")}</p>
            </div>

            <div className="info-col">
              <h3>{t("contacts_info_hours")}</h3>
              <p>Dushanba – Shanba</p>
              <p>10:00 – 19:00</p>
            </div>

            <div className="info-col">
              <h3>{t("contacts_info_phone")}</h3>
              <a href="tel:+998771238096">+998 77 123 80 96</a>
            </div>

            <div className="info-col">
              <h3>{t("contacts_info_socials")}</h3>
              <a href="https://instagram.com/marjon_karakul">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://t.me/+998771238096">
                <i class="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          <div className="contacts-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6132.912077422009!2d64.40533!3d39.77432!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzI3LjYiTiA2NMKwMjQnMTkuMiJF!5e0!3m2!1sru!2s!4v1765477735176!5m2!1sru!2s"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Karakul Marjona atelier manzili"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
