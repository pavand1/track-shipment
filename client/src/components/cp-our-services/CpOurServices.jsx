import styles from "./cpOurServices.module.scss";
import { servicesData } from './CpOurServices_data';

const CpOurServices = () => {
  return (
    <>
     <div className="container">
      <h2 className={styles.sectionHeading}>Our Services</h2>
      <div className={styles.servicesContainer}>
        <div className={`${styles["column"]}`}>
          <a href={servicesData[0].link} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{servicesData[0].title}</h3>
              </div>
              <img src={servicesData[0].leftImage} alt="Left" className={styles.cardImageLeft} />
              <img src={servicesData[0].rightImage} alt="Right" className={styles.cardImageRight} />
            </div>
          </a>
        </div>
        <div className={`${styles["column"]} ${styles["column2"]}`}>
          <a href={servicesData[1].link} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{servicesData[1].title}</h3>
              </div>
              <img src={servicesData[1].leftImage} alt="Left" className={styles.cardImageLeft} />
              <img src={servicesData[1].rightImage} alt="Right" className={styles.cardImageRight} />
            </div>
          </a>
          <a href={servicesData[2].link} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{servicesData[2].title}</h3>
                <p>{servicesData[2].description}</p>
              </div>
              <img src={servicesData[2].leftImage} alt="Left" className={styles.cardImageLeft} />
              <img src={servicesData[2].rightImage} alt="Right" className={styles.cardImageRight} />
            </div>
          </a>
        </div>
        <div className={`${styles["column"]} ${styles["column3"]}`}>
          <a href={servicesData[3].link} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{servicesData[3].title}</h3>
                <p>{servicesData[3].description}</p>
              </div>
              <img src={servicesData[3].leftImage} alt="Left" className={styles.cardImageLeft} />
              <img src={servicesData[3].rightImage} alt="Right" className={styles.cardImageRight} />
            </div>
          </a>
          <a href={servicesData[0].link} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{servicesData[0].title}</h3>
                <p>{servicesData[0].description}</p>
              </div>
              <img src={servicesData[0].leftImage} alt="Left" className={styles.cardImageLeft} />
              <img src={servicesData[0].rightImage} alt="Right" className={styles.cardImageRight} />
            </div>
          </a>
        </div>
        <div className={`${styles["column"]} ${styles["column2"]}`}>
          <a href={servicesData[1].link} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{servicesData[1].title}</h3>
                <p>{servicesData[1].description}</p>
              </div>
              <img src={servicesData[1].leftImage} alt="Left" className={styles.cardImageLeft} />
              <img src={servicesData[1].rightImage} alt="Right" className={styles.cardImageRight} />
            </div>
          </a>
          <a href={servicesData[2].link} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{servicesData[2].title}</h3>
                <p>{servicesData[2].description}</p>
              </div>
              <img src={servicesData[2].leftImage} alt="Left" className={styles.cardImageLeft} />
              <img src={servicesData[2].rightImage} alt="Right" className={styles.cardImageRight} />
            </div>
          </a>
        </div>
      </div>
     </div>
    </>
  );
};

export default CpOurServices;
