import './cardDetail.css';
import { FaUserAlt } from 'react-icons/fa';

export default function CardDetail({
        Id, Name, Phone, UserName, Email, WebSite,
        City, Street, Suit, ZipCode, Lat, Lng,
        NameCompany, CathPhrse, Bs})
    {

    return(
        <div className='cardDetailContainer'>
            <div className='shieldDetails'>
                <FaUserAlt size={50}  color='#FFF'/> 
                <strong>
                    ID: {Id}
                </strong>

                <strong>
                ID: {Name}      
                </strong>

                <strong>
                    UserName: {UserName}
                </strong>

                <strong>
                    Phone: {Phone}
                </strong>

                <strong>
                    Email: {Email}
                </strong>

                <strong>
                    WebSite: {WebSite}
                </strong>
            </div>

            <div className='shieldDetails'>
                <span>ADDRESS</span>
                <strong>
                    City: {City}
                </strong>

                <strong>
                    Street: {Street}
                </strong>

                <strong>
                    Suit: {Suit}
                </strong>

                <strong>
                    ZipCode: {ZipCode}
                </strong>

                <strong>
                    Geo: lat:{Lat} - Lng: {Lng}
                </strong>
            </div>

            <div className='shieldDetails'>
                <span>COMPANY</span>

                <strong>
                    NameCompany: {NameCompany}
                </strong>

                <strong>
                    CathPhrse: {CathPhrse}
                </strong>

                <strong>
                    Bs: {Bs}
                </strong>

            </div>
            
        </div>
    )
}