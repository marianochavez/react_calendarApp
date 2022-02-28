import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card card-login bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                  <p className="text-white-50 mb-5">
                    Please create new account!
                  </p>

                  <div className="form-outline form-white mb-4">

                    <input
                      type="text"
                      autoComplete="off"
                      placeholder='Name'
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline form-white mb-4">

                    <input
                      type="email"
                      autoComplete="off"
                      placeholder='Email'
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div className="form-outline form-white mb-4">

                    <input
                      autoComplete="off"
                      type="password"
                      id="typePasswordX"
                      placeholder='Password'
                      className="form-control form-control-lg"
                    />
                  </div>
                  
                  <div className="form-outline form-white mb-4">

                    <input
                      autoComplete="off"
                      type="password"
                      id="typePasswordX2"
                      placeholder='Confirm password'
                      className="form-control form-control-lg"
                    />
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Register
                  </button>

                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-0">
                    Already registered?{" "}
                    <Link to="/login" className="text-white-50 fw-bold">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
