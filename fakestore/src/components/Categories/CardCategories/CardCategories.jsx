import "./styles.css";

const CardCategories = (props) => {
  const { Imagem, title, subtitle, Explore } = props;
  return (
    <div className="CardCategories">
      <img src={Imagem} alt="" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <a className="buttonExplore" href="">
        {Explore}
        <img id="arrowCardCategory" src="/bestSelling/arrow.svg" alt="" />
      </a>
    </div>
  );
};

export default CardCategories;
