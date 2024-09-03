import React from 'react'
import styles from './cpTermsCondition.module.scss';
import { mockData } from './CpTermsCondition_data';

const CpTermsCondition = () => {
  return (
    <>
        <section className={styles.section}>
            <h2 className={styles.mainHeading}>Terams & Condition</h2>
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

export default CpTermsCondition