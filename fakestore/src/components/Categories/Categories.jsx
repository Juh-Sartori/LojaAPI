import TitleSection from "../TitleSection/TitleSection";
import Product from "../Vitrine/Product/Product";
import CardCategories from "./CardCategories/CardCategories";

import "./styles.css";

const Categories = () => {
  return (
    <div className="CategoriesCenter">
      <TitleSection
        title="Categories"
        subtitle=" Find what you are looking for"
      />

      <div className="CardCategoriesCenter">
        <CardCategories
          Imagem="/categories/plantCategory.png"
          title="Natural Plants"
          subtitle="Horem ipsum dolor sit amet, consectetur adipiscing elit."
          Explore="Explore"
        />

        <CardCategories
          Imagem="/categories/plantCategory.png"
          title="Natural Plants"
          subtitle="Horem ipsum dolor sit amet, consectetur adipiscing elit."
          Explore="Explore"
        />

        <CardCategories
          Imagem="/categories/plantCategory.png"
          title="Natural Plants"
          subtitle="Horem ipsum dolor sit amet, consectetur adipiscing elit."
          Explore="Explore"
        />
      </div>
    </div>
  );
};

export default Categories;
