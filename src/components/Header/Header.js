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
//Framer motino
import { motion } from 'framer-motion';
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
      <motion.button
        className={styles.toggleBtn}
        whileHover={{ scale: 1.2 }}
        initial={{ scale: 1 }}
      >
        <img
          src={toggleIcon}
          onClick={() => setIsOpen(true)}
          alt="hamburger icon"
        />
      </motion.button>
      <Navbar menuIsOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
