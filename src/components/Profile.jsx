import {Link} from 'react-router-dom'
import ItemOverview from './ItemOverview'
import { UserContext } from "./username";
import { useContext } from 'react';

function Profile ({userItems}){

    const {user} = useContext(UserContext)

    return(
        <div>
            <h2>User logged in as {user}</h2>
        {userItems.map((item) =>{
            
            return (
                <Link to={`/buy/${item.item_id}`}>
          <ItemOverview
            key={item.item_id}
            item_name={item.item_name}
            price={item.price}
          />
        </Link>
            )

        })}
        </div>
    )
}

export default Profile