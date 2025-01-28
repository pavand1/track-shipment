import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpOurTeam.module.scss";
import teamData from "./CpOurTeam_data";
const CpOurTeam = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>Our Team</h2>
        <div className={styles.teamSection}>
          <div className={styles.teamGrid}>
            {teamData.map((member) => (
              <div key={member.id} className={styles.teamCard}>
                <div className={styles.photoWrapper}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={styles.photo}
                  />
                  <div className={styles.overlay}>
                    <p className={styles.description}>{member.description}</p>
                    <button
                      className={styles.readMore}
                      onClick={() => window.open(member.moreInfo, "_blank")}
                    >
                      Read More
                    </button>
                    <div className={styles.linkdinProfile}>
                      <a href={member.linkdinHref}>
                        <img
                          src={member.linkdinSrc}
                          className={styles.linkdin}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.designation}>{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CpOurTeam;
