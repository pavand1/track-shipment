import { useEffect, useRef } from "react";
import Aos from "aos";
import styles from "./cpTeamPageTrack.module.scss";
import { mockData3 } from "./CpTeamPage_data";

const CpTeam3 = ({ isCurrent }) => {
  const ref = useRef();
  useEffect(() => {
    console.log(isCurrent);
    if (ref.current && isCurrent)
      ref.current.scrollIntoView({ behavior: "smooth" });
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
              src={mockData3.imageSrc}
              alt={mockData3.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h4 className={styles.name}>{mockData3.name}</h4>
              <p className={styles.designation}>{mockData3.designation}</p>
              <p className={styles.description}>{mockData3.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CpTeam3;
