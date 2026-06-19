import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({ product }) => {
  return (
    <div className="card-product">

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>

    </div>
  );
};

export default Item;