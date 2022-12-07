//Data
import { useEffect, useState } from 'react';
import { data } from '../data/data.js';
//Styles
import styles from './Destination.module.scss';
//Framer motion
import { motion, useAnimationControls } from 'framer-motion';
import { containerVariants } from '../animation';

//========================================================//

const DestinationPage = () => {
  const [navIndex, setNavIndex] = useState(0);
  const { destinations } = data;
  const navList = destinations.map((des) => des.name);

  const { name, description, travel, distance, images } =
    destinations[navIndex];

  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ x: '150%' });
    controls.start({ x: '0%', transition: { duration: 1, ease: 'easeOut' } });
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
        <span>01</span>Pick your destination
      </h5>
      <motion.picture className={styles.pic} animate={controls}>
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={name} />
      </motion.picture>
      <div className={styles.content}>
        <ul className={styles.nav}>
          {navList.map((name, index) => (
            <li
              className={`${index === navIndex && styles.active} navText`}
              key={index}
              onClick={() => setNavIndex(index)}
            >
              {name}
            </li>
          ))}
        </ul>
        <div className={styles.info}>
          <h2>{name}</h2>
          <p>{description}</p>
          <hr className={styles.br} />
          <div className={styles.detail}>
            <div>
              <h6 className="subheading-2">AVG. DISTANCE</h6>
              <p className="subheading-1">{distance}</p>
            </div>
            <div>
              <h6 className="subheading-2">Est. travel time</h6>
              <p className="subheading-1">{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default DestinationPage;
