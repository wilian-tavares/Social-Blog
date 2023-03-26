import './cardComment.css';
import { FaUserAlt } from 'react-icons/fa';

export default function CardComment({ Id, Name, Email, Comment }){
    return(
        <div className="cardComment">
            
            <article key={Id}>
                <strong>  
                    <FaUserAlt size={30} margin-left={10}  color='#FFF'/> 
                    <span>
                        {Email}
                    </span>
                </strong> 
                
                
                <span>{Name}</span>
                <p>{Comment}</p>  
            </article>
        </div>
    )
}