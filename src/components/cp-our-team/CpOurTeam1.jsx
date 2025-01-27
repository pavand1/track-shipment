import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpOurTeam.module.scss";
import teamData from "./CpOurTeam_data";

const CpOurTeam1 = () => {
  useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.about}>
        <div className={styles.column} data-aos="fade-left">
            <img
              src={teamData[0].photo}
              className={styles.image}
            />
          </div>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <h4 className={styles.name}>{teamData[0].name}</h4>
              <p className={styles.designation}>{teamData[0].designation}</p>
              <p className={styles.description}>{teamData[0].descriptionMain}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CpOurTeam1;
