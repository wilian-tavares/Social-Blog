import { useState, useEffect } from 'react';
import api from '../../Services/api';
import CardUser from '../../components/CardUser';
import { Link, usePrams } from 'react-router-dom';

export default function Users(){
    const [users, setUsers] = useState([])

    async function loadUser(){
        try{
            const users = await api.get('users');
            setUsers(users.data)
        }
        catch(e){
            console.log(e.message)
        }
    }

    useEffect(() => {
        loadUser()
    }, [])

    return(
        <div className='containerUser'>
             <h1>Users Page</h1>

             {
                users.map((user) => {
                    return(
                        <Link to={`/userDetail/${user.id}`}  key={user.id} className='card'>
                             <CardUser 
                                Id={user.id}
                                Name={user.name}
                                UserName={user.username}
                                Email={user.email}
                             />
                        </Link>
                     )
                })
             }
        </div>
    )
}
