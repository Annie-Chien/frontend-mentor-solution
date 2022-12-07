//Styles
import styles from './Crew.module.scss';
import { data } from '../data/data';
import { useState } from 'react';
//Framer motion
import { motion } from 'framer-motion';
import { containerVariants } from '../animation';

//========================================================//

const CrewPage = () => {
  const [navIndex, setNavIndex] = useState(0);
  const { crew } = data;
  const { bio, images, name, role } = crew[navIndex];

  return (
    <motion.main
      className={styles.container}
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <h5 className="title">
        <span>02</span>Meet your crew
      </h5>
      <picture className={styles.pic}>
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={name} />
      </picture>
      <hr className={styles.hr} />
      <ul className={styles.nav}>
        {crew.map((_, index) => (
          <li
            key={index}
            onClick={() => setNavIndex(index)}
            className={index === navIndex ? styles.active : null}
          ></li>
        ))}
      </ul>
      <div className={styles.info}>
        <h4>{role}</h4>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </motion.main>
  );
};

export default CrewPage;
