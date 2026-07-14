import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div>

      <h2>Carrito de compras</h2>

      {
        cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
          />
        ))
      }

      <h3>Total: ${totalPrice()}</h3>

      <Link to="/checkout">
        <button>
            Finalizar compra
        </button>
      </Link>

      <button onClick={clearCart}>
        Vaciar carrito
      </button>

    </div>
  );
};

export default Cart;