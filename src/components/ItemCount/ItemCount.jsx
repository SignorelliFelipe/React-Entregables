import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({ stock }) => {

  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count"> 

      <button onClick={decrement}>-</button>

      <span style={{ margin: "0 10px" }}>
        {count}
      </span>

      <button onClick={increment}>+</button>

      <br /><br />

      <button>
        Agregar al carrito
      </button>

    </div>
  );
};

export default ItemCount;