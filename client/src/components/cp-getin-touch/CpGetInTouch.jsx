import React from 'react'
import styles from './cpGetInTouch.module.scss';
import { mockData } from './CpGetInTouch_data';

const CpGetInTouch = () => {
  return (
    <section className={styles.section}>
      <div className={styles.about}>
        <div className={styles.column}>
          <img src={mockData.imageSrc} alt={mockData.imageAlt} className={styles.image} />
        </div>
        <div className={styles.column}>
          <form className={styles.form}>
            <h2 className={styles.heading}>{mockData.form.heading}</h2>
              {mockData.form.fields.map((field) => (
                <div key={field.id} className={`${styles.formGroup} ${styles.formGroupNew}`}>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      rows="4"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
              <button type="submit" className={styles.submitButton}>
                {mockData.form.submitButtonText}
              </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CpGetInTouch