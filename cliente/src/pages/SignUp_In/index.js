import * as React from 'react';
import { useContext, useState } from "react";
import style from '../SignUp_In/signup_in.module.css';

function SignUp_In() {
  return (
    <>
      <div className={style.container}>
        <h1>Mi cuenta</h1>
        <form className="col-5" id="fo">
          <div className="mb-3">
            <input 
            type="email"
            className="form-control-lg form-control"
            id="inputEmail"
            placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
            type="password"
            className="form-control-lg form-control"
            id="inputPassword"
            placeholder="Password"
            />
            </div>
            <button type="submit" className="btn btn-success">
              Iniciar Seccion
            </button>
         </form>
        </div>
    </>
  );
}

export default SignUp_In;