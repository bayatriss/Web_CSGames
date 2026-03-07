import '../App.css';
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {

  return (
        <header>
            <ul>
                <Link to="/">
                <li className="nav-link">⭐ Game Page</li>
                </Link>
                <Link to="/easter-egg">
                    <li className="nav-link">🐣 Easter Egg</li>
                </Link>
            </ul>

        </header>

        
  );
};

export default NavBar;
