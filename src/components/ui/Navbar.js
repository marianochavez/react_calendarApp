import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { Detector } from "react-detect-offline";

export const Navbar = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md justify-content-center">
      <div className="container">
        <Detector
          render={({online}) => (
            <p className="navbar-brand d-flex w-50 m-auto">
              {name} - 
              <span className={online?'text-success':'text-danger'}>
                &nbsp;{online?'Online':'Offline'}
              </span>
            </p>
          )}
          onChange={ (online) => {
            online ? 
              Swal.fire({
                title: "Conectado a internet",
                icon:'info',
                iconColor: 'green'
              }) 
              : Swal.fire({
                title:'Sin conexión a internet',
                text: 'Los cambios offline seran guardados',
                icon:'warning',
                iconColor: 'red'
              })
          }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsingNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar">
          <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item ms-auto">
              <button className="nav-link text-danger btn " onClick={handleLogout}>
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
