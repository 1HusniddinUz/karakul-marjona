import "../assets/style/Contacts.css";

const Contacts = () => {
  return (
    <section id="contacts-page">
      <div className="contacts-wrapper">
        {/* PAGE TITLE */}
        <h1 className="contacts-heading">Contact</h1>

        {/* TOP: TEXT + FORM */}
        <div className="contacts-main">
          {/* LEFT SIDE */}
          <div className="contacts-left">
            <h2>Get in touch</h2>

            <p className="contacts-left-text">
              Karakul Marjona atelьesi bilan bog‘lanish uchun qulay kanalni tanlang.
              Individual buyurtmalar, o‘lcham bo‘yicha tikish va hamkorlik uchun yozishingiz mumkin.
            </p>

            <div className="contacts-block">
              <span className="label">Email:</span>
              <a href="mailto:husniddinhalimov112@gmail.com">
                husniddinhalimov112@gmail.com
              </a>
            </div>

            <div className="contacts-block">
              <span className="label">Telegram:</span>
              <a
                href="https://t.me/+998771238096"
                target="_blank"
                rel="noreferrer"
              >
                +998 77 123 80 96
              </a>
            </div>

            <div className="contacts-block">
              <span className="label">Instagram:</span>
              <a
                href="https://instagram.com/marjon_karakul"
                target="_blank"
                rel="noreferrer"
              >
                @marjon_karakul
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="contacts-right">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                // keyinchalik backend / email service ulaysan
              }}
            >
              <div className="form-row">
                <div className="form-field">
                  <label>First Name *</label>
                  <input type="text" name="firstName" required />
                </div>
                <div className="form-field">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" required />
                </div>
              </div>

              <div className="form-field">
                <label>Email *</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-field">
                <label>Message *</label>
                <textarea name="message" rows="5" required />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM: INFO + MAP */}
        <div className="contacts-info">
          <div className="contacts-info-grid">
            <div className="info-col">
              <h3>Manzil</h3>
              <p>Buxoro shahri, O‘zbekiston</p>
            </div>

            <div className="info-col">
              <h3>Ish vaqti</h3>
              <p>Dushanba – Shanba</p>
              <p>10:00 – 19:00</p>
            </div>

            <div className="info-col">
              <h3>Telefon</h3>
              <a href="tel:+998771238096">+998 77 123 80 96</a>
            </div>

            <div className="info-col">
              <h3>Socials</h3>
              <a
                href="https://instagram.com/marjon_karakul"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://t.me/+998771238096"
                target="_blank"
                rel="noreferrer"
              >
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
