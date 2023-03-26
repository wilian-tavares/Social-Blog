
import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div className='containerHeader'>
            <h1>Social Blog</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Posts</Link>
                    </li>
                    
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}