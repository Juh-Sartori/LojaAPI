import "./styles.css";

const Product = (props) => {
  const { Imagem, titleProduct, subtitleProduct } = props;
  return (
    <div className="cardsProducts">
      <img src={Imagem} alt="Plant Picture" />
      <h3>{titleProduct}</h3>
      <p>{subtitleProduct}</p>
    </div>
  );
};

export default Product;
