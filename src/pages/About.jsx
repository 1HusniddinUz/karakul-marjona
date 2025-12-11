import "../assets/style/About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about-page">
      <div className="about-wrapper">

        <div className="about-hero">
          <div className="about-hero-text">
            <p className="about-kicker">{t("about_kicker")}</p>
            <h1>{t("about_title")}</h1>

            <p className="about-lead">{t("about_lead")}</p>
            <p className="about-body">{t("about_body")}</p>

            <div className="about-badges">
              <span>{t("about_badge_handmade")}</span>
              <span>{t("about_badge_limited")}</span>
              <span>{t("about_badge_location")}</span>
            </div>
          </div>

          <div className="about-hero-image"></div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <p className="stat-number">18+</p>
            <p className="stat-label">{t("about_stat_years")}</p>
            <p className="stat-text">{t("about_stat_years_text")}</p>
          </div>

          <div className="stat-card">
            <p className="stat-number">100%</p>
            <p className="stat-label">{t("about_stat_handmade")}</p>
            <p className="stat-text">{t("about_stat_handmade_text")}</p>
          </div>

          <div className="stat-card">
            <p className="stat-number">Limited</p>
            <p className="stat-label">{t("about_stat_collections")}</p>
            <p className="stat-text">{t("about_stat_collection_text")}</p>
          </div>
        </div>

        <div className="about-story-block">
          <div className="about-story">
            <h2>{t("about_story_title")}</h2>
            <p>{t("about_story_p1")}</p>
            <p>{t("about_story_p2")}</p>
          </div>

          <div className="about-difference">
            <h3>{t("about_diff_title")}</h3>
            <ul>
              <li>{t("about_diff_1")}</li>
              <li>{t("about_diff_2")}</li>
              <li>{t("about_diff_3")}</li>
              <li>{t("about_diff_4")}</li>
            </ul>
          </div>
        </div>

        <div className="about-process">
          <h2>{t("about_process_title")}</h2>

          <div className="process-steps">
            <div className="process-item">
              <span className="step-number">01</span>
              <h4>{t("about_process_step1")}</h4>
              <p>{t("about_process_step1_text")}</p>
            </div>

            <div className="process-item">
              <span className="step-number">02</span>
              <h4>{t("about_process_step2")}</h4>
              <p>{t("about_process_step2_text")}</p>
            </div>

            <div className="process-item">
              <span className="step-number">03</span>
              <h4>{t("about_process_step3")}</h4>
              <p>{t("about_process_step3_text")}</p>
            </div>

            <div className="process-item">
              <span className="step-number">04</span>
              <h4>{t("about_process_step4")}</h4>
              <p>{t("about_process_step4_text")}</p>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <div className="about-cta-inner">
            <p className="cta-kicker">{t("about_cta_kicker")}</p>
            <h2>{t("about_cta_title")}</h2>
            <p>{t("about_cta_text")}</p>

            <div className="cta-actions">
              <a href="/contacts" className="cta-btn primary">
                {t("about_cta_btn_contact")}
              </a>
              <a href="/products" className="cta-btn ghost">
                {t("about_cta_btn_collection")}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
