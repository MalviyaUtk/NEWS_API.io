import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-white active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white"  to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item dropdown">
                <ul className="dropdown-menu text-white">
                  <li>
                    <Link className="dropdown-item" to="/">
                    Home
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                    General
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                    Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                    Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                    Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                    Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                    Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="">
                    Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
