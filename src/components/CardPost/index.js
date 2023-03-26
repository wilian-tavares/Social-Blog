
import   './cardPost.css';
import { FaUserAlt } from 'react-icons/fa';

export default function CardPost( { IdPost, UserName, Title, Post}){
    return(
        <div className='cardPost'>
            <h2> <FaUserAlt size={20}  color='green'/>  User: {UserName}</h2>
            <strong>ID Post: {IdPost}</strong>
            <h3>Title: {Title}</h3>
            <p>{Post}</p>
        </div>
    )
}


