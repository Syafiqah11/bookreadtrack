import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ handleLogout }) => {
  return (
    <>
      <nav>
        <div className="branding">Book Read Tracker</div>
        <div className="menu-li">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/booklist">Book List</Link>
            </li>
            <li>
              <Link to="/mylist">My List</Link>
            </li>
            {/* <li>
              <button onClick={() => handleLogout()}>
                <Link to="/">Logout</Link>
              </button>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
