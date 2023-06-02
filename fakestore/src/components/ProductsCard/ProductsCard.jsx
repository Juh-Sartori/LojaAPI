import Product from "../Vitrine/Product/Product";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "./styles.css";
import { filter, get, map } from "underscore";
import { BsDatabase } from "react-icons/bs";

const requester = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

async function getProductsList() {
  const response = await requester("http://localhost:3030/products");
  // const productsDataBase = response.data;
  return response.data;
  // if ( === "Mens") {
  //   const filt = filter(productsDataBase);
  //   return filt;
  // }
  // // para filtrar
  // const filterproducts = productsDataBase.filter(
  //   (response) => response.category === "mens"
  // );

  // return productsDataBase;
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
