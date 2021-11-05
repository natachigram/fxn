import React from 'react';
import loginStyles from '../styles/Login.module.css';
import Link from 'next/link';

const login = () => {
  return (
    <div className={loginStyles.login}>
      <h2>
        <span>FX</span>OPTIONTRADE
      </h2>
      <div className={loginStyles.form__container}>
        <h3>Login</h3>
        <form>
          <input
            type='email'
            name=''
            id=''
            className={loginStyles.feilds}
            placeholder='Enter your email'
          />
          <input
            type='password'
            name=''
            id=''
            className={loginStyles.feilds}
            placeholder='Enter your password'
          />
          <div>
            <label htmlFor='checked'>
              <input type='checkbox' name='' id='checked' />
              Keep me logged in
            </label>
            <Link href=''>
              <a>Forgot Passsword ?</a>
            </Link>
          </div>
          <button>Login</button>
        </form>
        <p>
          Don’t have an account ?{' '}
          <Link
            href='signUp
        '
          >
            <a>SIgn UP</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default login;
