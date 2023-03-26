
import './cardUser.css';
import { FaUserAlt } from 'react-icons/fa';

export default function CardUser( { Id, Name, UserName, Email, }){
    return(
            <div className='cardUser'>
                <FaUserAlt size={30}  color='green'/>
                <div className='info'>
                    <span>ID: {Id}</span>
                    <strong>Name: {Name}</strong>
                    <strong>UserName: {UserName}</strong>
                    <span>Email: {Email}</span>
                </div>
            </div>     
    )
}

