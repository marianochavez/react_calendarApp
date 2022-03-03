import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center">
        <div className="container">
            <p className="navbar-brand d-flex w-50 m-auto">Mariano Chavez</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar">
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li className="nav-item ms-auto">
                        <Link className="nav-link text-danger" to="#">
                            Logout &nbsp; 
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};
