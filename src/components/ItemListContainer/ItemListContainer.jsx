import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import {
  getProducts,
  getProductsByCategory,
} from "../../services/firebase";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    if (categoryId) {

      getProductsByCategory(categoryId)
        .then((response) => {
          setItems(response);
        });

    } else {

      getProducts()
        .then((response) => {
          setItems(response);
        });

    }

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