import { useState } from 'react';
import Link from 'next/link';
import { Sling as Hamburger } from 'hamburger-react';
import navStyles from '../../styles/Nav.module.css';
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState('false');

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className={navStyles.nav}>
      <span>
        <Link href='/#home'>
          <a>
            <span className={navStyles.logo}>FX</span>OPTIONTRADE
          </a>
        </Link>
      </span>
      <ul className={sidebar ? navStyles.showSidebar : null}>
        <li>
          <Link href='/#how_it_works'>
            <a>How it works</a>
          </Link>
        </li>
        <li>
          <Link href='/#about'>
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href='/#our_investment'>
            <a>Investment Plan</a>
          </Link>
        </li>
        <li>
          <Link href='#testimonial'>
            <a>Testimonies</a>
          </Link>
        </li>
        <li>
          <Link href='/#faq'>
            <a>FAQ</a>
          </Link>
        </li>
        <li>
          <Link href='/#contact'>
            <a>Contact Us</a>
          </Link>
        </li>
        <li>
          <Link href='login'>
            <a>
              <button>Login</button>
            </a>
          </Link>
        </li>
        <li>
          <Link href='signUp'>
            <a>
              <button>Sign Up</button>
            </a>
          </Link>
        </li>
      </ul>

      <span className={navStyles.hamburger} onClick={handleSidebar}>
        <Hamburger
          size={25}
          toggled={isOpen}
          distance='lg'
          toggle={setOpen}
          color='#fff'
          duration={1.0}
        />
      </span>
    </nav>
  );
};

export default Nav;
