import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  return (
    <div>

      <h2>Finalizar compra</h2>

      <CheckoutForm
        cart={cart}
        total={totalPrice()}
        clearCart={clearCart}
      />

    </div>
  );
};

export default Checkout;