import { IoCartOutline } from "react-icons/io5";
import "./cartwidget.css"


const CartWidget = () => {
  return (
    <div className="cartwidget">
       <p><IoCartOutline size={30} /></p> 
        <p>1</p>
    </div>
  )
}

export default CartWidget