import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const { totalFavorites } = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>All Meetups</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/new-meetup`}>
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/favorites`}>
              My Favorites
              <span className={classes.badge}>{totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
