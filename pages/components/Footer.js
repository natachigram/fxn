import React from 'react';
import Link from 'next/link';
import footerStyles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Copyright © 2021 All Rights Reserved.</p>
      <div className={footerStyles.footerLinks}>
        <Link href=''>
          <a>Privacy Policy</a>
        </Link>
        <Link href=''>
          <a>Terms & Conditions</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
