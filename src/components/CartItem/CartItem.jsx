import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product }) => {

  const { removeItem } = useContext(CartContext);

  return (
    <div>

      <h3>{product.name}</h3>

      <p>Cantidad: {product.quantity}</p>

      <p>Precio: ${product.price}</p>

      <p>
        Subtotal: ${product.price * product.quantity}
      </p>

      <button onClick={() => removeItem(product.id)}>
        Eliminar
      </button>

      <hr />

    </div>
  );
};

export default CartItem;