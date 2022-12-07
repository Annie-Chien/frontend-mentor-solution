import { useEffect, useState } from 'react';
import { data } from '../data/data';
//Styles
import styles from './Tech.module.scss';
//Framer motion & Animations
import { motion, useAnimationControls } from 'framer-motion';
import { containerVariants } from '../animation';

//========================================================//

const TechPage = () => {
  const [navIndex, setNavIndex] = useState(0);
  const { technology } = data;
  const { description, name, images } = technology[navIndex];
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ y: 20, opacity: 0 });
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeIn' },
    });
  }, [navIndex, controls]);

  return (
    <motion.main
      className={styles.container}
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <h5 className="title">
        <span>03</span>SPACE LAUNCH 101
      </h5>
      <motion.picture
        className={styles.pic}
        animate={controls}
        custom={navIndex}
      >
        <source srcSet={images.portrait} media="(min-width:1440px)" />
        <img src={images.landscape} alt={name} />
      </motion.picture>

      <ul className={styles.nav}>
        {technology.map((_, index) => (
          <li
            key={index}
            onClick={() => setNavIndex(index)}
            className={index === navIndex ? styles.active : null}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <div className={styles.info}>
        <p className=".navText">THE TERMINOLOGY…</p>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </motion.main>
  );
};

export default TechPage;
