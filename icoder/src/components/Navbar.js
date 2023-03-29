import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            ICoder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li
                className="nav-item active"
                onClick={() => {
                  history.push("/home");
                }}
              >
                {/* <a className="nav-link" href="home"> */}
                Home
                {/* <span className="sr-only">(current)</span> */}
                {/* </a> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Topics
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Technology
                  </a>
                  <a className="dropdown-item" href="#">
                    Web Development
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Support
                  </a>
                  <a className="dropdown-item" href="#">
                    Write for us
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <div className="mx-2">
              <button
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
              <button
                className="ml-2 btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                SignUp
              </button>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
