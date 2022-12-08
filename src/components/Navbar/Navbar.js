import { useEffect, useState } from 'react';
//React Router
import { Link, useMatch } from 'react-router-dom';
//Images
import closeIcon from '../../assets/shared/icon-close.svg';
//Styles
import styles from './Navbar.module.scss';
//Framer motion
import { motion } from 'framer-motion';
const navList = [
  { title: 'Home', path: '/' },
  { title: 'Destination', path: '/destination' },
  { title: 'Crew', path: '/crew' },
  { title: 'Technologies', path: '/tech' },
];

//========================================================//

const Navbar = ({ menuIsOpen, closeMenu }) => {
  const pathName = useMatch('/*').pathname;
  const [navIndex, setNavIndex] = useState('/');

  useEffect(() => {
    const curIndex = navList.findIndex((item) => item.path === pathName);
    setNavIndex(curIndex);
  }, [pathName]);

  return (
    <nav className={`${styles.navbar} ${menuIsOpen ? styles.show : ''}`}>
      <button className={styles.closeBtn} onClick={closeMenu}>
        <img src={closeIcon} alt="close button" />
      </button>
      <ul className={styles.navList}>
        {navList.map((item, index) => (
          <li key={index} onClick={() => setNavIndex(index)}>
            <Link to={item.path} className={styles.navLink}>
              <span className={styles.navLinkLabel}>0{index}</span> {item.title}
              {index === navIndex ? (
                <motion.div
                  className={styles.underline}
                  layoutId="underline"
                ></motion.div>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
