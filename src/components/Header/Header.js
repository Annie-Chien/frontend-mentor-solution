import { useState } from 'react';
//React Router
import { Link } from 'react-router-dom';
//React Components
import Navbar from '../Navbar/Navbar';
//Images
import navLogo from '../../assets/shared/logo.svg';
import toggleIcon from '../../assets/shared/icon-hamburger.svg';
//Styles
import styles from './Header.module.scss';

//========================================================//

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={navLogo} alt="logo" />
      </Link>
      <button className={styles.toggleBtn}>
        <img
          src={toggleIcon}
          onClick={() => setIsOpen(true)}
          alt="hamburger icon"
        />
      </button>
      <Navbar menuIsOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
