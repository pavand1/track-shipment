import React from 'react'
import styles from './cpAboutBuckle.module.scss';
import { mockData } from './CpAboutBuckle_data';

const CpAboutBuckle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.description}>
          <p>{mockData.description}</p>
          <button className={styles.readMoreButton}>{mockData.buttonText}</button>
        </div>
      </div>
      <div className={styles.column}>
        <img src={mockData.imageSrc} alt={mockData.imageAlt} className={styles.image} />
      </div>
    </div>
  
  );
};

export default CpAboutBuckle