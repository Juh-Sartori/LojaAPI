import CardCategories from "./CardCategories/CardCategories";
import Topo from "./Topo/Topo";
import "./styles.css";

const Categories = () => {
  return (
    <div className="CategoriesCenter">
      <Topo />
      <div className="CardCategoriesCenter">
        <CardCategories Imagem="Imagem" title="44444" />
      </div>
    </div>
  );
};

export default Categories;
