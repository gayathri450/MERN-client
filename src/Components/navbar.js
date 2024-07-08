import '../Style.css';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return(
        
            <div class="header">
                <h3>My App</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                </ul>
            </div>
    )
}