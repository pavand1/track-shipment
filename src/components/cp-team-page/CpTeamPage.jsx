import { useEffect, useRef } from "react";
import Aos from "aos";
import styles from "./cpTeamPageTrack.module.scss";
import { mockData1 } from "./CpTeamPage_data";

const CpTeam1 = ({isCurrent}) => {
  const ref = useRef();
  useEffect(() => {
    if (ref.current && isCurrent) ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className={styles.section} ref={ref}>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-left">
            <img
              src={mockData1.imageSrc}
              alt={mockData1.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h4 className={styles.name}>{mockData1.name}</h4>
              <p className={styles.designation}>{mockData1.designation}</p>
              <p className={styles.description}>{mockData1.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CpTeam1;
