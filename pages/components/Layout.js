import layoutStyles from '../../styles/Layout.module.css';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
