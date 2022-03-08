import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../actions/auth";

import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formLoginValues, handleLoginInputChange ] = useForm({
    lEmail: "mariano@gmail.com",
    lPassword: "123456",
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card card-login bg-dark text-white animate__animated animate__fadeIn animate__fast">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Ingresar email y contraseña!
                  </p>
                  <form onSubmit={handleLogin}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        placeholder="Email"
                        name="lEmail"
                        value={lEmail}
                        onChange={handleLoginInputChange}
                        autoComplete="off"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        autoComplete="off"
                        placeholder="Contraseña"
                        type="password"
                        name="lPassword"
                        value={lPassword}
                        onChange={handleLoginInputChange}
                        id="typePasswordX"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Ingresar
                    </button>

                  </form>
                  
                </div>

                <div>
                  <p className="mb-0">
                    No tienes cuenta?{" "}
                    <Link to="/register" className="text-white-50 fw-bold">
                      Registrarme
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
