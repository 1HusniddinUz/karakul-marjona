import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

// i18n | MULTI LANG
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Header / Navbar import
import Header from "../components/layout/Header";

// Sahifalar import (bor bo'lsa)
import Home from "../pages/Home";
import Products from "../pages/Products";
import Marketplaces from "../pages/Marketplaces";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Footer from "../components/layout/Footer";
import translationsUz from "../locales/translationsUz";
import translationsTr from "../locales/translationsTr";
import translationsRu from "../locales/translationsRu";
import translationsFr from "../locales/translationsFr";
import translationsEn from "../locales/translationsEn";
function App() {

  i18n.use(initReactI18next).init({
    resources: {
      uz: { translation: translationsUz },
      tr: { translation: translationsTr },
      ru: { translation: translationsRu },
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    lng: "uz",
    fallbackLng: "uz",
  });

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/marketplaces" element={<Marketplaces />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
