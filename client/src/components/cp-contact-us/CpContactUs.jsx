import React from 'react'
import styles from './cpContacUs.module.scss';
import { contactInfo } from './CpContactUs_data';
import { mockData } from '../cp-getin-touch/CpGetInTouch_data';

const CpContactUs = () => {
  return (
    <>
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Contact Us</h2>
      <div className={styles.about}>
        <div className={styles.column}>
          <div className={styles.description}>
                <h4 className={styles.Heading}>Reach Us</h4>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <img src={contactInfo.address.icon} alt="Location" />
                    <span>{contactInfo.address.text}</span>
                  </div>
                  <div className={styles.contactItem}>
                    <img src={contactInfo.email.icon} alt="Email" />
                    <span>{contactInfo.email.text}</span>
                  </div>
                  <div className={styles.contactItem}>
                    <img src={contactInfo.phone.icon} alt="Phone" />
                    <span>{contactInfo.phone.text}</span>
                  </div>
                </div>
          </div>
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
    </>
  );
};

export default CpContactUs