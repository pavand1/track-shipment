import { useEffect } from "react";
import Styles from "./Home.module.scss";
import Aos from "aos";
import { useLocation, useNavigate } from "react-router-dom";
import { RESOURCE_CASE_STUDIES } from "../../utils/constants";

const CaseStudies = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={Styles.doodle} style={{ background: "rgb(241 238 238)" }}>
        <img
          src="../../images/Home/Doodle Background-1.svg"
          alt=""
          style={{
            visibility: "hidden",
          }}
        />
        <div
          className={Styles.subContainer}
          style={{
            flexDirection: "column",
            gap: "2rem",
            // alignItems: "center",
            // justifyContent: "center",
            padding: "4rem 8rem",
          }}
        >
          <h2 className={Styles.serviceMobHeading}>Our Case Studies</h2>
          <p
            style={{
              fontFamily: "Poppins-Regular",
              color: "#000000",
            }}
          >
            Our client's success reflects the impact of our tech-driven
            solutions and exceptional service. Here are some examples:
          </p>
          <div className={Styles.services}>
            <div className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/Surface Transport.png" alt="" />
                <div className={Styles.tag}>
                  <p style={{ marginBottom: "0rem" }}>Case Study 1</p>
                </div>
              </div>
              <div className={Styles.text}>
                A major retailer sought to enhance its supply chain efficiency
                through advanced technology. BuckleTrack implemented an
                integrated TMS, resulting in improved logistics management,
                reduced lead times, and higher customer satisfaction.
              </div>
              {/* <div
                className={Styles.button}
                onClick={() => navigate(RESOURCE_CASE_STUDIES)}
              >
                Read More
              </div> */}
            </div>
            <div className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/Express Delivery.png" alt="" />
                <div className={Styles.tag}>
                  <p style={{ marginBottom: "0rem" }}>Case Study 2</p>
                </div>
              </div>
              <div className={Styles.text}>
                A giant logistics provider needed a solution for tailored
                packaging solutions designed to protect the products and
                streamline handling. Our experience-rich team ensures that
                packaging is optimized for both efficiency and sustainability,
                reducing waste and improving cost-effectiveness.
              </div>
              {/* <div
                className={Styles.button}
                onClick={() => navigate(RESOURCE_CASE_STUDIES)}
              >
                Read More
              </div> */}
            </div>
            <div className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/Project Transport.png" alt="" />
                <div className={Styles.tag}>
                  <p style={{ marginBottom: "0rem" }}>Case Study 3</p>
                </div>
              </div>
              <div className={Styles.text}>
                A giant logistics provider needed a solution for tailored
                packaging solutions designed to protect the products and
                streamline handling. Our experience-rich team ensures that
                packaging is optimized for both efficiency and sustainability,
                reducing waste and improving cost-effectiveness.
              </div>
              {/* <div
                className={Styles.button}
                onClick={() => navigate(RESOURCE_CASE_STUDIES)}
              >
                Read More
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
