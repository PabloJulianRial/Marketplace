import ItemOverview from "./ItemOverview";
import { UserContext } from "./username";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";



function Basket({basket, setBasket}) {
const [selectedItems, setSelectedItems] = useState([]) 
const {user} = useContext(UserContext)

function addToSelection (checked, item_id) {
    if(checked){
        setSelectedItems((selectedItems) =>{
            return [...selectedItems, item_id]
        })
    }
    else{
        setSelectedItems((selectedItems) =>{
            
            return selectedItems.filter((item)=>{
                return item !== item_id
            })
        })
    }
}
console.log(selectedItems)
    return (
        <div>
        <p>{user}s' Basket</p>
        {basket.map((item) =>{
              return (
                <div key={item.item_id}>
                <Link  to={`/buy/${item.item_id}`}>
                  <ItemOverview
                    
                    item_name={item.item_name}
                    price={item.price}
                  />
                </Link>
                <input type="checkbox" id={item.item_id} value={item.item_id} onChange={(e) =>{
                   addToSelection(e.target.checked, item.item_id)
                }} />
                </div>
              );
        })}
        </div>
    )
}
export default Basket