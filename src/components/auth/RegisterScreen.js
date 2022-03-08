import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    rName: "",
    rEmail: "",
    rPassword: "",
    rPassword2: "",
  });

  const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if ( rPassword !== rPassword2 ) {
      return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    }

    dispatch(startRegister(rName, rEmail, rPassword));
  };



  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card card-login bg-dark text-white animate__animated animate__fadeIn animate__fast">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Registro</h2>
                  <p className="text-white-50 mb-5">
                    Por favor creese una cuenta!
                  </p>
                  <form onSubmit={handleRegister}>
                    
                    <div className="form-outline form-white mb-4">

                      <input
                        type="text"
                        autoComplete="off"
                        placeholder='Nombre'
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
                        placeholder='Contraseña'
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
                        placeholder='Confirmar contraseña'
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
                      Registrarme
                    </button>

                  </form>

      
                </div>

                <div>
                  <p className="mb-0">
                    Ya estas registrado?{" "}
                    <Link to="/login" className="text-white-50 fw-bold">
                      Ingresar
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
