// Section.js
import React from 'react';
import styles from './cpOurSolution.module.scss';
import { listItems } from './CpOurSolution_data'; // Import the mock data

const CpOurSolution = () => {
  return (
    <div className={styles.section}>
      <div className={styles.centerColumn}>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CpOurSolution