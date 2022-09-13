import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../store/favourite-context";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favouriteCtx = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className="classes.logo">React Meetups</div>
      <ul>
        <li>
          <Link to="/">AllMeetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetups</Link>
        </li>
        <li>
          <Link to="/favourite">
            My Favourite
            <span className="classes.badge">
              {favouriteCtx.totalFavourites}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
