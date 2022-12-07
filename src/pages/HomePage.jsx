//Reacr Router
import { Link } from 'react-router-dom';
// Styles
import styles from './Home.module.scss';
//Framer motion
import { motion } from 'framer-motion';
import { containerVariants } from '../animation';

//========================================================//

const HomePage = () => {
  return (
    <motion.main
      className={styles.container}
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <div className={styles.text}>
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination" className={styles.exploreLink}>
        <button className={styles.exploreBtn}>Explore</button>
      </Link>
    </motion.main>
  );
};

export default HomePage;
