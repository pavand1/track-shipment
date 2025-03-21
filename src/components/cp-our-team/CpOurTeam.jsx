import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpOurTeam.module.scss";
import teamData, { restTeam } from "./CpOurTeam_data";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
const CpOurTeam = () => {
  const navigate = useNavigate();
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
                      onClick={() => navigate(member.moreInfo)}
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
      <section className={styles.section}>
        {window.innerWidth < 768 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {restTeam.map((member) => (
              <SwiperSlide key={member.id}>
                <div className={styles.teamCard}>
                  <div className={styles.photoWrapper}>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className={styles.photo}
                    />
                    <div className={styles.overlay}>
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
                  <div
                    className={styles.info}
                    style={{ padding: "1rem", background: "#ef4136" }}
                  >
                    <h3
                      className={styles.name}
                      style={{ color: "#FFFFFF", fontSize: "18px" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={styles.designation}
                      style={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    >
                      {member.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {restTeam.map((member) => (
              <SwiperSlide key={member.id}>
                <div className={styles.teamCard}>
                  <div className={styles.photoWrapper}>
                    <img
                      src={member.photo}
                      alt={member.name}
                      className={styles.photo}
                    />
                    <div className={styles.overlay}>
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
                  <div
                    className={styles.info}
                    style={{ padding: "1rem", background: "#ef4136" }}
                  >
                    <h3
                      className={styles.name}
                      style={{ color: "#FFFFFF", fontSize: "18px" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={styles.designation}
                      style={{
                        color: "#FFFFFF",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    >
                      {member.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </>
  );
};

export default CpOurTeam;
