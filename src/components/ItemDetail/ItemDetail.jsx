import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {

  const { addItem } = useContext(CartContext);

  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {

    addItem(product, quantity);

    setAdded(true);

  };

  return (
    <div>

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <p>Precio: ${product.price}</p>

      <p>Stock: {product.stock}</p>

      {
        added
          ? (
            <Link to="/cart">
              Ir al carrito
            </Link>
          )
          : (
            <ItemCount
              stock={product.stock}
              onAdd={handleAdd}
            />
          )
      }

    </div>
  );
};

export default ItemDetail;