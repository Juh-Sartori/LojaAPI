import "./styles.css";

const DetailsProduct = () => {
  return (
    <div className="ProductContainer">
      <div className="InformationLeftProduct">
        <div className="pictureProduct">
          <h1>Uma plantinha verde</h1>
          <img src="/bestSelling/plant.png" alt="" />
        </div>
      </div>
      <div className="InformationRightProduct">
        <div className="rating">
          <h2>Marca: Plantinha verde</h2>
          <div className="ratingProduct">
            <img src="/product/stars.svg" alt="" />
            <p>5 avaliações de clientes</p>
          </div>
        </div>
        <div className="price">
          <h1>
            <small>
              <sup>R$</sup>
            </small>
            391,00
          </h1>
          <h2>Descrição do produto</h2>
          <p>Uma plantinha verde que irá alegrar sua casa.</p>
        </div>
        <div className="detailsProduct">
          <table>
            <tr>
              <td>
                <h1>Category</h1>
              </td>
              <td>
                <p>category</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1>Rate</h1>
              </td>
              <td>
                <p>rate</p>
              </td>
            </tr>
            <tr>
              <td>
                <h1>Count</h1>
              </td>
              <td>
                <p>count</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
