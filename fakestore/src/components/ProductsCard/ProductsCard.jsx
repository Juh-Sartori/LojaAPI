import Product from "../Vitrine/Product/Product";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./styles.css";

const requester = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

async function getProductsList() {
  const response = await requester("http://localhost:3030/products");
  const productsDataBase = response.data;

  // para filtrar
  const filterproducts = productsDataBase.filter(
    (response) => response.category === "Mens"
  );

  return filterproducts;
}

getProductsList();

const ProductsCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsList()
      .then((resp) => {
        setProducts(resp);
      })
      .catch((error) => {
        console.log(error, "error from API");
      });
  }, []);

  return (
    <div className="ProductsCard">
      <div className="search">
        <div className="leftSearch">
          <input type="text" placeholder="Procurando por algum produto?" />
        </div>
        <div className="rightSearch">
          <select name="" id="">
            <option value="">Selecione a categoria</option>
            <option value="Mens">Mens</option>
            <option value="Skeakers">Skeaker</option>
            <option value="Womens">Womens</option>
          </select>
        </div>
      </div>
      <h1>Produtos</h1>
      <div className="listOfProducts">
        {products.map(({ image, title, price }) => (
          <Product
            Imagem={image}
            titleProduct={title}
            subtitleProduct={price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
