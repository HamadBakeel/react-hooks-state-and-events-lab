import React, {useState} from "react";

function Item({ name, category }) {
    const [inCart, setInCart] = useState(false)
    let itemClass = inCart ? "in-cart" : ""

    function toggleInCart(){
        setInCart(!inCart)
    }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>{!inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
