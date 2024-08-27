import React from 'react'
import styles from './cpAboutBuckleTrack.module.scss';
import { mockData } from './CpAboutBuckleTrack_data';

const CpAboutBuckleTrack = () => {
  return (
    <>
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>About Buckle Track</h2>
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

export default CpAboutBuckleTrack