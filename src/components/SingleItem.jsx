import { useEffect, useState } from "react";
import { getItemById } from "../utils";
import { ItemDetails } from "./ItemDetails";
import { useParams } from "react-router-dom";

export function SingleItem({setBasket}) {
  const { item_id } = useParams();
  const [currentItem, setCurrentItem] = useState("");

  useEffect(() => {
    getItemById(item_id).then((res) => {
      setCurrentItem(res);
    });
  }, []);
  return (
    <div>
      <ItemDetails className="single-item" item={currentItem} />
      <section className="seller-username">
        <p>Seller username</p>
        <p>⬆️</p>
        <p>⬇️</p>
          </section>
          <section>
              <button onClick={()=>{
                setBasket((basket) => 
                {console.log(basket)
                  return [...basket, currentItem]} 
                )}}>Add to basket</button>
              <button>Buy it now</button>
          </section>
    </div>
  );
}
