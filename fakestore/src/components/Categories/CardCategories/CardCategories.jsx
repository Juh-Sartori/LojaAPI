import "./styles.css";

const CardCategories = (props) => {
  const { Imagem, title, subtitle, Explore } = props;
  return (
    <div className="CardCategories">
      <h1>{Imagem}</h1>
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      {/* <button>{Explore}</button> */}
    </div>
  );
};

export default CardCategories;
