import React from 'react';
import Link from 'next/link';
import navStyles from '../../styles/Nav.module.css';
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <span>Logo</span>
      <ul>
        <li>
          <Link href=''>
            <a>How it works</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>Investment Plan</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>Testimonies</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>FAQ</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <button>Login</button>
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <button>Sign Up</button>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
