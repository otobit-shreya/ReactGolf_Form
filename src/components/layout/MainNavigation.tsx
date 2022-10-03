import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Form</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <div>
            <Link className="btn btn-outline-primary" to="/userform">
              Add User
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
