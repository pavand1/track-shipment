import React from 'react'
import styles from './cpAboutBuckle.module.scss';
import { mockData } from './CpAboutBuckle_data';

const CpAboutBuckle = () => {
  return (
    <section className={styles.section}>
      <h2 class={styles.mainHeading}>About Buckle</h2>
      <div className={styles.about}>
        <div className={styles.column}>
          <div className={styles.description}>
            <p>{mockData.description}</p>
            <button className="btn-default">{mockData.buttonText}</button>
          </div>
        </div>
        <div className={styles.column}>
          <img src={mockData.imageSrc} alt={mockData.imageAlt} className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default CpAboutBuckle