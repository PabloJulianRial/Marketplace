import { useState } from "react";

import { filterCategories } from "../utils";

const ItemList = ({ allItems, categories, setBasket }) => {
  const [currentCategory, setCurrentCategory] = useState("none");
console.log(categories);
  return (
    <section className="item-list">
      <section className="all-items">
        {filterCategories(allItems, currentCategory)}
      </section>
      <label htmlFor="categories">Search by category:</label>
      <select
        onChange={(e) => {
          setCurrentCategory(e.target.value);
        }}
        name="categories"
        id="categories"
      >
        <option value="none"></option>
        {categories.map(({ category_name }) => {
          return (
            <option key={category_name} value={category_name}>
              {category_name}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default ItemList;
