import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpTeamPageTrack.module.scss";
import { mockData4 } from "./CpTeamPage_data";

const CpTeam4 = () => {
  useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.about}>
        <div className={styles.column} data-aos="fade-left">
            <img
              src={mockData4.imageSrc}
              alt={mockData4.imageAlt}
              className={styles.image}
            />
          </div>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h4 className={styles.name}>{mockData4.name}</h4>
              <p className={styles.designation}>{mockData4.designation}</p>
              <p className={styles.description}>{mockData4.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CpTeam4;
