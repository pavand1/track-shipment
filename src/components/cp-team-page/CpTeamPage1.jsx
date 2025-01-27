import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpTeamPageTrack.module.scss";
import { mockData2 } from "./CpTeamPage_data";

const CpTeam2 = () => {
  useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.about}>
        <div className={styles.column} data-aos="fade-left">
            <img
              src={mockData2.imageSrc}
              alt={mockData2.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h4 className={styles.name}>{mockData2.name}</h4>
              <p className={styles.designation}>{mockData2.designation}</p>
              <p className={styles.description}>{mockData2.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CpTeam2;
