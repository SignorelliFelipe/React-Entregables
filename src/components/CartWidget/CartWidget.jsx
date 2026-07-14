import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import "./cartwidget.css";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartwidget">

      <IoCartOutline size={30} />

      <span>{totalQuantity()}</span>

    </Link>
  );
};

export default CartWidget;