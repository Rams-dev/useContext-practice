import React, { useContext, useEffect } from 'react';
import UserContext from "../context/user/UserContext";
const UserList = () => {

    const { users ,getUsers, getProfile } = useContext(UserContext);
    useEffect(()=> {
        getUsers()
    },[])
    return(
        <>
            <div className="list-group h-100">
                {
                    users.map(user => (
                        <a href="" classNeme = "list-group-item list-group-action d-flex flex-row justify-content-start" key={user.id} onClick={getProfile(user.id)} >
                            <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" alt={user.first_name}/>
                            <p>{`${user.first_name} ${user.last_name}`}</p>
                        </a>
                    ))
                }

            </div>
        </>
    )
}


export default UserList;