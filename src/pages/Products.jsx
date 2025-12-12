import { useState } from "react";
import "../assets/style/Products.css";
import { useTranslation } from "react-i18next";
import aravchin from "../assets/images/aravchin.png";
import bezbolka from "../assets/images/bezbolka.png";
import harbiy from "../assets/images/harbiy-yoqa.png";
import shapka from "../assets/images/j-shapka.png";
import karzay from "../assets//images/karzay.png";
import kulonorka from "../assets/images/kulo-norka.png";
import kulo from "../assets/images/kulo.png";
import papaxa from "../assets/images/papaxa.png";
import pilotka from "../assets/images/pilotka.png";
const allProducts = [
  {
    id: 1,
    name: "Aravchin",
    desc: "An'anaviy qo‘l mehnati bilan yaratilgan yuqori sifatli aravchin bosh kiyimi.",
    price: "60$",
    category: "bosh-kiyim",
    tag: "Limited",
    image: aravchin,
  },
  {
    id: 2,
    name: `Bezbolka`,
    desc: `Avg'on terisidan tikilgan oq va ko'k ranglar kombinatsiyasi`,
    price: `90$`,
    category: "bosh-kiyim",
    tag: "New",
    image: bezbolka,
  },
  {
    id: 3,
    name: `Harbiy telpak va yoqa`,
    desc: `Avg'on terisidan tikilgan`,
    price: `150$`,
    category: "bosh-kiyim",
    tag: "Bestseller",
    image: harbiy,
  },
  {
    id: 4,
    name: `Ayollar bosh kiyimi`,
    desc: `Avg'on pises terisidan tikilgan`,
    price: `100$`,
    category: "bosh-kiyim",
    tag: "",
    image: shapka,
  },
  {
    id: 5,
    name: `Karzay`,
    desc: `Avg'on tesidan tikilgan`,
    price: `60$`,
    category: "bosh-kiyim",
    tag: "Limited",
    image: karzay,
  },
  {
    id: 6,
    name: `Kulo`,
    desc: `Kulo norka bilan kombinatsiya qilingan`,
    price: `60$`,
    category: "bosh-kiyim",
    tag: "",
    image: kulonorka,
  },
  {
    id: 7,
    name: `Kulo`,
    desc: `Avg'on terisidan tikilgan`,
    price: `70$`,
    category: "aksessuar",
    tag: "",
    image: kulo,
  },
  {
    id: 8,
    name: `Papaxa`,
    desc: `Avg'on terisidan tikilgan`,
    price: `100$`,
    category: "aksessuar",
    tag: "Limited",
    image: papaxa,
  },
  {
    id: 9,
    name: `Pilotka`,
    desc: `Avgo'on terisidan tikilgan`,
    price: `60$`,
    category: "aksessuar",
    tag: "New",
    image: pilotka,
  },
];

const categoryFilters = [
  { key: "all", label: "Barchasi" },
  { key: "shuba", label: "Shubalar" },
  { key: "bosh-kiyim", label: "Bosh kiyimlar" },
  { key: "aksessuar", label: "Aksessuarlar" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const { t } = useTranslation();

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <section id="products-page">
      <div className="pr-wrapper">
        <div className="pr-header">
          <p className="pr-kicker">{t("pr_kicker")}</p>
          <h1>{t("pr_heading")}</h1>
          <p className="pr-lead">{t("pr_lead")}</p>
        </div>

        <div className="pr-filters">
          {categoryFilters.map((cat) => (
            <button
              key={cat.key}
              className={
                activeCategory === cat.key
                  ? "pr-filter-btn active"
                  : "pr-filter-btn"
              }
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="pr-grid">
          {filteredProducts.length === 0 && (
            <p className="pr-empty">{t("pr_empty")}</p>
          )}

          {filteredProducts.map((product) => (
            <article className="pr-card" key={product.id}>
              <div className="pr-image-wrap">
                <img src={product.image} alt={product.name} />
                {product.tag && (
                  <span className="pr-tag">
                    {product.tag === "Limited"
                      ? t("pr_tag_limited")
                      : product.tag === "New"
                      ? t("pr_tag_new")
                      : product.tag === "Bestseller"
                      ? t("pr_tag_bestseller")
                      : product.tag}
                  </span>
                )}
              </div>

              <div className="pr-card-body">
                <h3>{product.name}</h3>
                <p className="pr-desc">{product.desc}</p>

                <div className="pr-meta">
                  <span className="pr-category">
                    {product.category === "shuba" && t("pr_filter_shuba")}
                    {product.category === "bosh-kiyim" && t("pr_filter_hat")}
                    {product.category === "aksessuar" &&
                      t("pr_filter_accessory")}
                  </span>

                  <span className="pr-price">{product.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
