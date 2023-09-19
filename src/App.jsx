import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import UserNameInput from "./components/UserNameInput";
import { getItems, getCategories } from "./utils";
import { Route, Routes } from "react-router-dom";
import SellForm from "./components/sellForm";
import { SingleItem } from "./components/SingleItem";
import Profile from "./components/Profile";
import Basket from "./components/Basket";
 

function App() {
  const [allItems, setAllItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userItems, setUserItems] = useState([])
  const [basket, setBasket] = useState([{
    "item_id": 10,
    "item_name": "Test item",
    "description": "testy mc test face",
    "img_url": "https://test.com/Test-item.jpg",
    "price": 100,
    "category_name": "Relics"
  }])
    
  useEffect(() => {
    getItems().then((response) => {
      setAllItems(response);
    });
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/buy"
          element={<ItemList 
             allItems={allItems} categories={categories} />}
        />
        <Route path="/buy/:item_id" element={<SingleItem setBasket={setBasket}/>} />
        <Route
          path="/sell"
          element={
            <SellForm
              categories={categories}
              setAllItems={setAllItems}
              setCategories={setCategories}
              setUserItems={setUserItems} 
                         />
          }
        />
        <Route path="/profile" element=
        {<Profile basket={basket}
        userItems={userItems}
        />} />
        <Route path="/" element={<UserNameInput />} />
        <Route path="/basket" element={<Basket setBasket={setBasket} basket={basket}/>} />
      </Routes>
    </div>
  );
}

export default App;
