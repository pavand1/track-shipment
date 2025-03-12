import { useEffect } from "react";
import Styles from "./Home.module.scss";
import Aos from "aos";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CASE1,
  CASE2,
  CASE3,
  RESOURCE_CASE_STUDIES,
} from "../../utils/constants";

const CaseStudies = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={`${Styles.doodle} ${Styles.caseStudyDoodle}`} style={{ background: "rgb(241 238 238)" }}>
        <img
          src="../../images/Home/Doodle Background-1.svg"
          alt=""
          style={{
            visibility: "hidden",
            display:"none",
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
            height: "765px",
            backgroundColor: "#f1eeee"
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
            <div style={{backgroundColor:"#ffffff", padding:"15px", borderRadius:"10px"}} className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/Boosts-Efficiency.jpg" alt="" />
                <div className={Styles.tag}>
                  <p
                    style={{
                      marginBottom: "0rem",
                      fontSize: "1.6rem",
                      lineHeight: "2rem",
                    }}
                  >
                    BuckleTrack TMS Boosts Efficiency
                  </p>
                </div>
              </div>
              <div className={Styles.text}>
                A major retailer faced challenges in optimizing its supply chain
                operations, including inefficient logistics management
              </div>

              <div className={Styles.button} onClick={() => navigate(CASE1)}>
                Read More
              </div>
            </div>
            <div style={{backgroundColor:"#ffffff", padding:"15px", borderRadius:"10px"}} className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/Secure-Packaging.jpg" alt="" />
                <div className={Styles.tag}>
                  <p
                    style={{
                      marginBottom: "0rem",
                      fontSize: "1.6rem",
                      lineHeight: "2rem",
                    }}
                  >
                    Sustainable & Secure Packaging by BuckleTrack
                  </p>
                </div>
              </div>
              <div className={Styles.text}>
                A giant logistics provider faced challenges in protecting
                products during transit and streamlining handling processes
              </div>
              <div className={Styles.button} onClick={() => navigate(CASE2)}>
                Read More
              </div>
            </div>
            <div style={{backgroundColor:"#ffffff", padding:"15px", borderRadius:"10px"}} className={Styles.card} data-aos="fade-up">
              <div className={Styles.image}>
                <img src="../../images/services/real-time-tracking.jpg" alt="" />
                <div className={Styles.tag}>
                  <p
                    style={{
                      marginBottom: "0rem",
                      fontSize: "1.6rem",
                      lineHeight: "2rem",
                    }}
                  >
                    Smart Route Planning with Real-Time Tracking
                  </p>
                </div>
              </div>
              <div className={Styles.text}>
                A leading e-commerce company struggled with timely deliveries
                due to fluctuating demand and last-mile inefficiencies
              </div>
              <div className={Styles.button} onClick={() => navigate(CASE3)}>
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
