import React from 'react';
import styles from './cpWhyBuckle.module.scss';
import mockData from './CpWhyBuckle_data';

const CpWhyBuckle = () => {
  return (
    <section className={styles.section}>
      <div className={styles.column1}>
        <h2>Top Heading</h2>
        <div className={styles.headingContainer}>
          {mockData.headings.map((heading, index) => (
            <div key={index} className={styles.headingItem}>
              <h3 className={styles.heading}>{heading}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.column2}>
        <img src={mockData.imageSrc} alt="Description" />
      </div>
    </section>
  );
};
export default CpWhyBuckle