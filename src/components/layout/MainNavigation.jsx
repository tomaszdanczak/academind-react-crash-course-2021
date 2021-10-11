import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites</Link>
        </li>
      </nav>
    </header>
  );
}
