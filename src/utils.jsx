import axios from "axios";
import ItemOverview from "./components/ItemOverview";
import { Link } from "react-router-dom";

export function getItems() {
  return axios
    .get("https://nc-marketplace-sem-1.onrender.com/api/items")
    .then(({ data }) => {
      return data.items;
    });
}

export function getItemById(item_id) {
  return axios
    .get(`https://nc-marketplace-sem-1.onrender.com/api/items/${item_id}`)
    .then(({ data }) => {
      console.log(data)
      return data.item;
    });
}

export function getCategories() {
  return axios
    .get("https://nc-marketplace-sem-1.onrender.com/api/categories")
    .then(({ data }) => {
      return data.categories;
    });
}

export function filterCategories(allItems, currentCategory) {
  return allItems
    .filter((item) => {
      if (currentCategory !== "none") {
        return item.category_name === currentCategory;
      } else {
        return true;
      }
    })
    .map((item) => {
      
      return (
        <Link to={`/buy/${item.item_id}`}>
          <ItemOverview
            key={item.item_id}
            item_name={item.item_name}
            price={item.price}
          />
        </Link>
      );
    });
}

export function postItem(newItem) {
  return axios
    .post("https://nc-marketplace-sem-1.onrender.com/api/items", newItem)
    .then(({ data }) => {
      return data.item;
    });
}

export function postCategory(newCategory) {
  return axios
    .post("https://nc-marketplace-sem-1.onrender.com/api/categories", {
      category_name: newCategory,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
