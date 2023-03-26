
import { useState, useEffect } from 'react';
import api from '../../Services/api';
import { useParams } from 'react-router-dom';
import CardDetail from '../../components/CardDetail';
import { Link } from 'react-router-dom';
import './userDetail.css';

export default function UserDetail(){
    const { id } = useParams();
    const [user, setUser] = useState([])

    async function loadUserDetail(){
        try{
            const response = await api.get(`users/${id}`)
            setUser(response.data)
        }
        catch(e){
            console.log(e.message)
        }
    }

    useEffect(() => {
       loadUserDetail()
    },[])

    return(
        <div className='containerUserDetail'>
            <h1>User: {user.name}</h1>

            {<CardDetail
                key={user.id} 
                Id={user.id}
                Name={user.name}
                UserName={user.username}
                Phone={user.phone}
                Email={user.email}
                WebSite={user.website}

                City={user.address ? user.address.city : ''}
                Street={user.address ? user.address.street : ''}
                Suite={user.address ? user.address.suite : ''}
                ZipCode={user.address ? user.address.zipcode : ''}
                Lat={user.address ? user.address.geo.lat : ''}
                Lng={user.address ? user.address.geo.lng : ''}

                NameCompany={user.company ? user.company.name : ''}
                CathPhrse={user.company ? user.company.cathPhase : ''}
                Bs={user.company ? user.company.bs : ''}
            />}
           
            <Link to={`/AllPostsUser/${id}`}>
                <button>All Posts of User</button>
            </Link>
        </div>
    )
}
