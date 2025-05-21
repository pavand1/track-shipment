import { useState } from "react";
import styles from "./cpFaq.module.scss";
import { faqData, faqData1, faqData2, faqData3 } from "./CpFaq_data";
import { Helmet } from "react-helmet-async";

const CpFaq = () => {
  const [activeIndexes, setActiveIndexes] = useState({
    general: 0,
    pricing: 0,
    shipment: 0,
    services: 0,
  });

  const toggleAccordion = (section, index) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  return (
    <>
      <Helmet>
        <title>BuckleTrack FAQs | Your Questions Answered​</title>
        <meta
          name="description"
          content="Get quick answers to common questions about BuckleTrack’s transport, delivery & logistics services to better understand how we support your business."
        />
        <meta property="og:title" content="Buckletrack FAQ's Page" />
        <meta
          property="og:description"
          content="This is the FAQ's page for Buckletrack"
        />
        <link rel="canonical" href="https://buckletrack.com/resources/faqs" />
      </Helmet>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>FAQs</h2>
        <h3 className={styles.subHeading}>General Questions</h3>
        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={`${styles.faqQuestionBox} ${
                  activeIndexes.general === index ? styles.active : ""
                }`}
                onClick={() => toggleAccordion("general", index)}
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndexes.general === index ? styles.open : ""
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndexes.general === index ? styles.active : ""
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
                  activeIndexes.pricing === index ? styles.active : ""
                }`}
                onClick={() => toggleAccordion("pricing", index)}
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndexes.pricing === index ? styles.open : ""
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndexes.pricing === index ? styles.active : ""
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
                  activeIndexes.shipment === index ? styles.active : ""
                }`}
                onClick={() => toggleAccordion("shipment", index)}
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndexes.shipment === index ? styles.open : ""
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndexes.shipment === index ? styles.active : ""
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
                  activeIndexes.services === index ? styles.active : ""
                }`}
                onClick={() => toggleAccordion("services", index)}
              >
                <div className={styles.faqQuestion}>
                  {item.question}
                  <span
                    className={`${styles.arrow} ${
                      activeIndexes.services === index ? styles.open : ""
                    }`}
                  >
                    &#9654;
                  </span>
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndexes.services === index ? styles.active : ""
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
