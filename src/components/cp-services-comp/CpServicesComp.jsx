import { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Aos from "aos";
import styles from "./cpServicesComp.module.scss";
import { mockData, mockData1, mockData2 } from "./CpServicesComp_data";

const CpServicesComp = () => {
  const surfaceRef = useRef(null);
  const expressRef = useRef(null);
  const projectRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    if (pathname) {
      const id = pathname.split("/")[2];
      if (id) {
        if (id === "surface-transport" && surfaceRef.current) {
          surfaceRef.current.scrollIntoView({ behavior: "smooth", screenX: 0 });
          // window.scroll({behavior: "smooth", top: 700});
        }
        if (id === "express-delivery" && expressRef.current) {
          expressRef.current.scrollIntoView({ behavior: "smooth" });
          // window.scroll({ behavior: "smooth", top: 1300 });
        }
        if (id === "project-transport" && projectRef.current) {
          projectRef.current.scrollIntoView({ behavior: "smooth" });
          // window.scroll({ behavior: "smooth", top: 1900 });
        }
      }
    }
  }, [pathname]);
  return (
    <>
      <section
        className={styles.section}
        id="surface-transport"
        ref={surfaceRef}
      >
        {/* first services */}
        <div className={styles.borderMain}>
          <div className={styles.borderDiv}></div>
        </div>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h3>{mockData.title}</h3>
              <p>{mockData.description}</p>
            </div>
          </div>
          <div className={styles.column} data-aos="fade-left">
            <img
              src={mockData.imageSrc}
              alt={mockData.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </section>
      <section
        className={styles.section}
        id="express-delivery"
        ref={expressRef}
      >
        {/* Second services */}
        <div className={styles.borderMainRight}>
          <div className={styles.borderDiv}></div>
        </div>
        <div className={styles.about}>
          <div className={styles.columnSecond} data-aos="fade-right">
            <img
              src={mockData1.imageSrc}
              alt={mockData1.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.columnSecond} data-aos="fade-left">
            <div className={styles.description}>
              <h3>{mockData1.title}</h3>
              <p>{mockData1.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={styles.section}
        id="project-transport"
        ref={projectRef}
      >
        {/* Third services */}
        <div className={styles.borderMain}>
          <div className={styles.borderDiv}></div>
        </div>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h3>{mockData2.title}</h3>
              <p>{mockData2.description}</p>
            </div>
          </div>
          <div className={styles.column} data-aos="fade-left">
            <img
              src={mockData2.imageSrc}
              alt={mockData2.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CpServicesComp;
