import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className={s.navigation}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
