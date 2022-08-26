import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5" >
      <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="main">
                Main
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="posts">
                Posts
              </Link>
            </li>
          </ul>
          <span className="navbar-text">UsersApp</span>
      </div>
    </nav>
  );
};

export default NavBar;
