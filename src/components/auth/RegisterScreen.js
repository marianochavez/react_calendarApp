import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    rName: "Mariano",
    rEmail: "chavedo@gmail.com",
    rPassword: "123456",
    rPassword2: "123456",
  });

  const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if ( rPassword !== rPassword2 ) {
      return Swal.fire('Error', 'Passwords do not match!', 'error');
    }

    dispatch(startRegister(rName, rEmail, rPassword, rPassword2));
  };



  return (
    <section className="gradient-custom">
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
                  <form onSubmit={handleRegister}>
                    
                    <div className="form-outline form-white mb-4">

                      <input
                        type="text"
                        autoComplete="off"
                        placeholder='Name'
                        name="rName"
                        value={rName}
                        onChange={handleRegisterInputChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">

                      <input
                        type="email"
                        autoComplete="off"
                        placeholder='Email'
                        name="rEmail"
                        value={rEmail}
                        onChange={handleRegisterInputChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">

                      <input
                        autoComplete="off"
                        type="password"
                        id="typePasswordX"
                        placeholder='Password'
                        name="rPassword"
                        value={rPassword}
                        onChange={handleRegisterInputChange}
                        className="form-control form-control-lg"
                      />
                    </div>
                    
                    <div className="form-outline form-white mb-4">

                      <input
                        autoComplete="off"
                        type="password"
                        id="typePasswordX2"
                        placeholder='Confirm password'
                        name="rPassword2"
                        value={rPassword2}
                        onChange={handleRegisterInputChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Register
                    </button>

                  </form>

                  {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-google fa-lg"></i>
                    </a>
                  </div> */}
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
