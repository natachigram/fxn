import React from 'react';
import signupStyles from '../styles/Signup.module.css';
import Link from 'next/link';

const signup = () => {
  return (
    <div className={signupStyles.signup}>
      <h2>
        <span>FX</span>OPTIONTRADE
      </h2>
      <div className={signupStyles.form__container}>
        <form>
          <h3>Sign Up</h3>
          <input
            type='text'
            name=''
            id=''
            className={signupStyles.feilds}
            placeholder='Enter your full name'
          />
          <input
            type='email'
            name=''
            id=''
            className={signupStyles.feilds}
            placeholder='Enter your email'
          />

          <input
            type='text'
            name=''
            id=''
            className={signupStyles.feilds}
            placeholder='Enter your address'
          />
          <input
            type='tel'
            name=''
            id=''
            className={signupStyles.feilds}
            placeholder='Enter your phone number'
          />
          <input
            type='text'
            name=''
            id=''
            className={signupStyles.feilds}
            placeholder='Enter your date of birth (mm/dd/yy)'
          />

          <input
            type='password'
            name=''
            id=''
            className={signupStyles.feilds}
            placeholder='Enter your password'
          />
          <input
            type='password'
            name=''
            id=''
            className={signupStyles.feilds}
            placeholder='Confirm password'
          />
          <div>
            <label htmlFor='checked'>
              <input type='checkbox' name='' id='checked' />
              By checking the box you’ve agreed with
            </label>
            <Link href=''>
              <a>Terms of Services</a>
            </Link>
          </div>
          <button>Sign Up</button>
          <p>
            Already have an account ?
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signup;
