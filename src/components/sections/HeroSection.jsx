import "../../assets/style/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          KARAKUL MARJONA
        </h1>

        <p className="hero-subtitle">
          Noyob qo‘l mehnati bilan yaratilgan karakul shubalar, bosh kiyimlar 
          va avloddan avlodga o‘tgan hunarmandlik anʼanalari.
        </p>

        <button className="hero-btn">
          Kolleksiyani Ko‘rish
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
