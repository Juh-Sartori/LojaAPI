import "./styles.css";

const Product = (props) => {
  const { Imagem, titleProduct, subtitleProduct } = props;
  return (
    <div className="cardsProducts">
      <h1>{Imagem}</h1>
      <h3>{titleProduct}</h3>
      <p>{subtitleProduct}</p>
    </div>
  );
};

export default Product;
