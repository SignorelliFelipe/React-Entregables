import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/firebase";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {

    getProductById(itemId)
      .then((response) => {
        setItem(response);
      });

  }, [itemId]);

  if (item === undefined) {
    return <h2>Producto no encontrado</h2>;
  }

  if (item === null) {
    return <h2>Cargando...</h2>;
  }

  return <ItemDetail product={item} />;
};

export default ItemDetailContainer;