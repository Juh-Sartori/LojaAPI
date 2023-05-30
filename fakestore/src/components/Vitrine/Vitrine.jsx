import CardBest from "./CardBest/CardBest";
import Product from "./Product/Product";
import "./styles.css";

const Vitrine = () => {
  return (
    <div className="containerVitrine">
      <div className="vitrineLeft">
        <CardBest />
      </div>

      <div className="vitrineProduct">
        <Product
          Imagem="./bestSelling/plant.png"
          titleProduct="Natural Plants"
          subtitleProduct="₱ 1,400.00"
        />
        <Product
          Imagem="./bestSelling/plant.png"
          titleProduct="Artificial Plants"
          subtitleProduct="₱ 1,400.00"
        />
        <Product
          Imagem="./bestSelling/plant.png"
          titleProduct="Artificial Plants"
          subtitleProduct="₱ 1,400.00"
        />
      </div>
    </div>
  );
};

export default Vitrine;
