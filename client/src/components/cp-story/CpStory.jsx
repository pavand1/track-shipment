import React from 'react'
import styles from './cpStory.module.scss';
import { mockData } from './CpStory_data';

const CpStory = () => {
  return (
    <>
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Story</h2>
      <div className={styles.about}>
        <div className={styles.column}>
          <div className={styles.description}>
            <p>{mockData.description}</p>
          </div>
        </div>
        <div className={styles.column}>
          <img src={mockData.imageSrc} alt={mockData.imageAlt} className={styles.image} />
        </div>
      </div>
    </section>
    </>
  );
};

export default CpStory