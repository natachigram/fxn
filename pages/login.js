import React from 'react';
// import loginStyles from '../styles/Login.js';

const login = () => {
  return (
    <div className={loginStyles.login}>
      <div>Logo</div>
      <div>
        <form>
          <input type='email' />
          <input type='password' />
          <label htmlFor=''>
            <input type='radio' />
          </label>
          <a href=''>Forgot password?</a>
          <button type='submit'>Submit</button>
        </form>
        <p>Don't have an account?</p>
      </div>
    </div>
  );
};

export default login;
