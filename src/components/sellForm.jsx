import { useEffect, useState } from "react";
import { postCategory, postItem } from "../utils";

export default function SellForm({ categories, setAllItems, setCategories, setUserItems }) {
  const [tempName, setTempName] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const [tempImageUrl, setTempImageUrl] = useState("");
  const [tempPrice, setTempPrice] = useState("");
  const [tempCategory, setTempCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const defaultItem = {
    item_name: "",
    description: "",
    img_url: "",
    price: "",
    category_name: "",
  };
  const [newItem, setNewItem] = useState(defaultItem);

  useEffect(() => {
    postItem(newItem)
      .then((item) => {
        setUserItems((userItems) =>{
          return [...userItems, item]
        })
        
        setAllItems((allItems) => {
          return [item, ...allItems];
        });
      })
      .catch((err) => {
        console.log(err);
      });
     
  }, [newItem]);

  return (
    <form
      className="sell-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(
          newCategory,
          tempName,
          tempDescription,
          tempImageUrl,
          tempPrice,
          tempCategory,
          setNewItem,
          setNewCategory,
          setCategories,
          setTempName,
          setTempDescription,
          setTempImageUrl,
          setTempPrice,
          setTempCategory,
          
        );
      }}
    >
      <label htmlFor="sellForm-name">Enter item name</label>
      <input
        onChange={(e) => {
          setTempName(e.target.value);
        }}
        type="text"
        id="sellForm-name"
        value={tempName}
      ></input>
      <label htmlFor="sellForm-description">Enter item description</label>
      <textarea
        onChange={(e) => {
          setTempDescription(e.target.value);
        }}
        id="sellForm-description"
        value={tempDescription}
      ></textarea>
      <label type="url" htmlFor="sellForm-img-url">
        Enter image url
      </label>
      <input
        onChange={(e) => {
          setTempImageUrl(e.target.value);
        }}
        type="text"
        id="sellForm-img-url"
        value={tempImageUrl}
      ></input>
      <label htmlFor="sellForm-price">Enter price</label>
      <input
        onChange={(e) => {
          setTempPrice(e.target.value);
        }}
        type="number"
        id="sellForm-price"
        value={tempPrice}
      ></input>
      <div>
        <select
          onChange={(e) => {
            setTempCategory(e.target.value);
          }}
          value={tempCategory}
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
        <label htmlFor="sellForm-category">Enter new category</label>
        <input
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
          type="text"
          id="sellForm-category"
          value={newCategory}
        ></input>
      </div>
      <button>Submit New Item</button>
    </form>
  );
}

function handleSubmit(
  newCategory,
  tempName,
  tempDescription,
  tempImageUrl,
  tempPrice,
  tempCategory,
  setNewItem,
  setNewCategory,
  setCategories,
  setTempName,
  setTempDescription,
  setTempImageUrl,
  setTempPrice,
  setTempCategory,
 
) {
  const tempItem = {
    item_name: tempName,
    description: tempDescription,
    img_url: tempImageUrl,
    price: tempPrice,
  };
  if (newCategory !== "") {
    postCategory(newCategory).then(() => {
      (tempItem.category_name = newCategory), setNewItem(tempItem);
      setCategories((categories) => {
        return [{ category_name: newCategory }, ...categories];
      });
    });
  } else {
    (tempItem.category_name = tempCategory), setNewItem(tempItem);
  }
  setTempName("");
  setTempDescription("");
  setTempImageUrl("");
  setTempPrice("");
  setTempCategory("");
  setNewCategory("")
  
}
