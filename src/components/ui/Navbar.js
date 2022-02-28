import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center">
        <div className="container">
            <p className="navbar-brand d-flex w-50 me-auto">Mariano Chavez</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar">
                <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <button className="nav-link btn btn-outline-danger btn-sm text-danger">
                            Logout &nbsp; 
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};
