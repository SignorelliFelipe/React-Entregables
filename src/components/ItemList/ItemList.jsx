import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="products-container">
      {items.map((product) => (
        <Item
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ItemList;