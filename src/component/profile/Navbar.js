import { Link } from "react-router-dom";
import './Navbar.css';



const Navbar = () => {
    return (
        <div className="gg">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/fullname'>profile</Link>

            </li>
            <li>
                <Link to='/photo'>Photo</Link>
            </li>

        </div>
    );
}
export default Navbar