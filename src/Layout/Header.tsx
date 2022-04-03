import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
const HEADER = "Star Wars";

const Header = () => {
  const amount = useSelector(
    (state: any) => state.favorites.totalFavoriteAmount
  );
  return (
    <header className="header">
      <div className="logo">
        <h2>{HEADER}</h2>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/favorites">
              Favorite List <span className="badge">{amount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
