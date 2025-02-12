import { useState } from 'react';
import styles from './cpFaq.module.scss';
import { faqData, faqData1, faqData2, faqData3 } from './CpFaq_data';

const CpFaq = () => {
    const [activeIndex, setActiveIndex] = useState(0); // First accordion is open by default
  
    const toggleAccordion = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the accordion
    };
  
    return (
      <>
      <section className={styles.section}> 
        <h2 className={styles.mainHeading}>FAQs</h2>
        <h3 className={styles.subHeading}>General Questions</h3>
        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.faqQuestionBox} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => toggleAccordion(index)} // Handles clicks for each box
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndex === index ? styles.open : ''
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqHeading}`}>
        <h5 className={styles.subHeading}>Pricing & Payment</h5>
        <div className={styles.faqContainer}>
          {faqData1.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.faqQuestionBox} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => toggleAccordion(index)} // Handles clicks for each box
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndex === index ? styles.open : ''
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqHeading}`}>
        <h5 className={styles.subHeading}>Shipment & Tracking</h5>
        <div className={styles.faqContainer}>
          {faqData2.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.faqQuestionBox} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => toggleAccordion(index)} // Handles clicks for each box
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndex === index ? styles.open : ''
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqHeading}`}>
        <h5 className={styles.subHeading}>Special Services & Policies</h5>
        <div className={styles.faqContainer}>
          {faqData3.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.faqQuestionBox} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => toggleAccordion(index)} // Handles clicks for each box
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndex === index ? styles.open : ''
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.active : ''
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
      </>
    );
  };

export default CpFaq;
