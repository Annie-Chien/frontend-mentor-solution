//React Router
import { useMatch } from 'react-router-dom';
//Styles
import styles from './Layout.module.scss';
//Framer motion
import { motion } from 'framer-motion';
import { containerVariants } from '../../animation';

//========================================================//

const Layout = ({ children }) => {
  const pathName = useMatch('/*').params['*'];

  const bgClassName = () => {
    let bgImg;
    switch (pathName) {
      case 'destination':
        bgImg = styles.bgDestination;
        break;
      case 'crew':
        bgImg = styles.bgCrew;
        break;
      case 'tech':
        bgImg = styles.bgTech;
        break;
      default:
        bgImg = null;
    }

    return `${styles.background} ${bgImg}`;
  };

  return (
    <motion.div
      className={bgClassName()}
      variants={containerVariants}
      animate={{ opacity: 1, transition: { duratino: 1 } }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
