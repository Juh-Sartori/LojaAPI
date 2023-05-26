import CardCategories from "./CardCategories/CardCategories";
import Topo from "./Topo/Topo";
import "./styles.css";

const Categories = () => {
  return (
    <div className="CategoriesCenter">
      <Topo />
      <CardCategories Imagem="Imagem" title="44444" />
    </div>
  );
};

export default Categories;
