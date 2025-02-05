import { useEffect } from "react";
import styles from "./cpAboutBuckle.module.scss";
import { mockData } from "./CpAboutBuckle_data";
import Aos from "aos";
import { useNavigate } from "react-router-dom";

const CpAboutBuckle = ({setRouteChange}) => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className={styles.section} data-aos="fade-up">
        <h2 className={styles.mainHeading}>About BuckleTrack</h2>
        <div className={styles.about}>
          <div className={styles.column}>
            <div className={styles.description}>
              <p>{mockData.description}</p>
              <p>{mockData.description1}</p>
              <button
                className="btn-default"
                onClick={() => {
                  navigate("/about-us");
                  setRouteChange("/about-us")
                }}
              >
                {mockData.buttonText}
              </button>
            </div>
          </div>
          <div className={styles.column}>
            <img
              src={mockData.imageSrc}
              alt={mockData.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </section>
      {/* <section className={styles.sectionbg}>
      <div className={styles.bgImg}>
        <div className={styles.imageWrap}>
            <img src={mockData.imageBG} alt={mockData.imageAlt} className={styles.imageBg} />
        </div>
      </div>
    </section> */}
    </>
  );
};

export default CpAboutBuckle;
