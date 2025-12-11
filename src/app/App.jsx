import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

// Header / Navbar import
import Header from "../components/layout/Header";

// Sahifalar import (bor bo'lsa)
import Home from "../pages/Home";
import Products from "../pages/Products";
import Marketplaces from "../pages/Marketplaces";
import About from "../pages/About";
import Contacts from "../pages/Contacts";

function App() {
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
    </BrowserRouter>
  );
}

export default App;
