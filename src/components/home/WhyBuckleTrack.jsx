import Styles from "./Home.module.scss";

const WhyBuckleTrack = () => {
  return (
    <>
      <div className={Styles.doodle}>
        <div className={Styles.application}></div>
        <div
          className={Styles.subContainer}
          style={{
            flexDirection: "column",
            gap: "36px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className={Styles.heading} style={{
              fontSize: "4rem",
              fontFamily: "Poppins-Bold",
            }}>Why BuckleTrac</h2>
          <div className={Styles.image}>
            <img src="../../images/Home/Why-Buckle-Track.png" alt="" />
          </div>
          <div className={Styles.matrix}>
            <div className={Styles.column}>
              <div className={Styles.icon}>
                <img
                  src="../../images/Home/whybucklet/no-of-trips.svg"
                  alt=""
                  style={{ height: "inherit", width: "inherit" }}
                />
              </div>
              <div className={Styles.number}>{"300000+"}</div>
              <div className={Styles.text}>{"No. of Trips"}</div>
            </div>
            <div className={Styles.column}>
              <div className={Styles.icon}>
                <img
                  src="../../images/Home/whybucklet/no-of-pincodes.svg"
                  alt=""
                  style={{ height: "inherit", width: "inherit" }}
                />
              </div>
              <div className={Styles.number}>{"15000+"}</div>
              <div className={Styles.text}>{"No. of Pincode Served"}</div>
            </div>
            <div className={Styles.column}>
              <div className={Styles.icon}>
                <img
                  src="../../images/Home/whybucklet/no-of-customers.svg"
                  alt=""
                  style={{ height: "inherit", width: "inherit" }}
                />
              </div>
              <div className={Styles.number}>{"250+"}</div>
              <div className={Styles.text}>{"No. of Customers Served"}</div>
            </div>
            <div className={Styles.column}>
              <div className={Styles.icon}>
                <img
                  src="../../images/Home/whybucklet/distance.svg"
                  alt=""
                  style={{ height: "inherit", width: "inherit" }}
                />
              </div>
              <div className={Styles.number}>{"75 Mn KM+"}</div>
              <div className={Styles.text}>{"Distance Covered"}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyBuckleTrack