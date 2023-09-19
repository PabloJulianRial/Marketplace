import { useEffect, useState } from "react";
import { UserContext } from "./username";
import { useContext } from 'react';

function UserNameInput ({setUserName}) {
    
    const [tempUserName, setTempUserName] = useState("")
    const {setUser} = useContext(UserContext)
    
    
    
    return (
        <form className="user-input" onSubmit={(e) =>
        {e.preventDefault()
            setUser(tempUserName)
        
        }}>
        <label htmlFor="user-input">Username</label>
        <input type="text" id="user-input" onChange={(e) =>{
            setTempUserName(e.target.value)
        }}/>
        <button className="new-user-btn">Create username</button>
    </form>
)
}

export default UserNameInput