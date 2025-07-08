import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav
        class="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            <img
              src="\Media_photos\logo.svg"
              style={{ width: "25% " }}
              alt="Logo"
            ></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/About">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/Products">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/Pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item" >
                  <Link class="nav-link active " to="/Support">
                    Support <i class="fa fa-bars"  style={{marginLeft:"50px"}} aria-hidden="true"></i>
                  </Link>
                  
                </li>
                
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
