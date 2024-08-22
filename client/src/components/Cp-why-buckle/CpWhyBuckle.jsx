import React from 'react';
import styles from './cpWhyBuckle.module.scss';
import mockData from './CpWhyBuckle_data';

const CpWhyBuckle = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Why Buckle Track?</h2>
      <div className={styles.backlet}>
        <div className={styles.column1}>
          <div className={styles.headingContainer}>
            {mockData.headings.map((heading, index) => (
              <div key={index} className={styles.headingItem}>
                <h3 className={styles.heading}>{heading}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.column2}>
          <img src={mockData.imageSrc} alt="Description" className={styles.trackimg}/>
        </div>
      </div>
    </section>
  );
};
export default CpWhyBuckle