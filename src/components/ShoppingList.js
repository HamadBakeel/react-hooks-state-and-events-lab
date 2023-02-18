import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
    const [selectedCategory , setSelectedCategory] = useState("All")
    items =  items.filter((item) =>{
        if(item.category === selectedCategory || selectedCategory === "All")
            return item

    });
    function changeCategory(event){
        setSelectedCategory(event.target.value)
    }

    return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) =>
            <Item key={item.id} name={item.name} category={item.category} />
        )}
          {/*{filteredItems}*/}
      </ul>
    </div>
  );
}

export default ShoppingList;
