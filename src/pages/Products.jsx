import "../assets/style/Products.css";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  const categoryFilters = [
    { key: "all", label: t("pr_filter_all") },
    { key: "shuba", label: t("pr_filter_shuba") },
    { key: "bosh-kiyim", label: t("pr_filter_hat") },
    { key: "aksessuar", label: t("pr_filter_accessory") }
  ];

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
              className={activeCategory === cat.key ? "active" : ""}
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
                    { product.tag === "Limited" ? t("pr_tag_limited") :
                      product.tag === "New" ? t("pr_tag_new") :
                      product.tag === "Bestseller" ? t("pr_tag_bestseller") :
                      product.tag }
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
                    {product.category === "aksessuar" && t("pr_filter_accessory")}
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
