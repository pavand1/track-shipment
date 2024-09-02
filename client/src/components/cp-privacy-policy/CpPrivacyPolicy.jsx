import React from 'react'
import styles from './cpPrivacyPolicy.module.scss';
import { mockData } from './CpPrivacyPolicy_data';

const CpPrivacyPolicy = () => {
  return (
    <>
        <section className={styles.section}>
            <h2 className={styles.mainHeading}>Privacy Policy</h2>
            <div className={styles.description}>
                <p>{mockData.description}</p>
                <p>{mockData.description1}</p>
                <p>{mockData.description2}</p>
                <p>{mockData.description3}</p>
            </div>
        </section>
    </>
  )
}

export default CpPrivacyPolicy