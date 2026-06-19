import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {

        if (categoryId) {
          resolve(
            products.filter(
              (product) => product.category === categoryId
            )
          );
        } else {
          resolve(products);
        }

      }, 1000);
    });

    getProducts.then((response) => {
      setItems(response);
    });

  }, [categoryId]);

  return (
    <div>
      <h2 className="catalog-title">
        Catálogo BookWave
      </h2>

      <ItemList items={items} />

    </div>
  );
};

export default ItemListContainer;