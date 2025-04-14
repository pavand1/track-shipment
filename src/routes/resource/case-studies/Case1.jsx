import "./style.css";
import HomeComponent from "../../../components/home";
import { useRef, useEffect } from "react";

const Case1 = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <HomeComponent />
      <div className="blog" ref={ref}>
        <div className="main-body">
          <h2 className="case-heading">BuckleTrack TMS Boosts Efficiency</h2>

          <div className="custom-box-container">
            <div className="custom-box-column-left">
              <div className="custom-box">
                <div className="custom-box-icon">
                  <img
                    className="custom-box-img"
                    src="../../images/Case-study/idea.png"
                  />
                </div>
                <div className="custom-box-heading">Problem Statement</div>
                <div className="custom-box-content">
                  A major retailer faced challenges in optimizing its supply
                  chain operations, including inefficient logistics management,
                  prolonged lead times, and declining customer satisfaction. The
                  lack of an integrated system hindered real-time tracking and
                  coordination, impacting overall efficiency.
                </div>
              </div>
              <div className="custom-box">
              <div className="custom-box-icon">
                  <img
                    className="custom-box-img"
                    src="../../images/Case-study/solutions.png"
                  />
                </div>
                <div className="custom-box-heading">Solution</div>
                <div className="custom-box-content">
                  BuckleTrack implemented an advanced Transportation Management
                  System (TMS) tailored to the retailer’s needs. The integrated
                  solution streamlined logistics operations enabled real-time
                  tracking, and enhanced coordination across the supply chain.
                </div>
              </div>
            </div>

            <div className="custom-box-column-right">
              <div className="custom-box">
              <div className="custom-box-icon">
                  <img
                    className="custom-box-img"
                    src="../../images/Case-study/benefit.png"
                  />
                </div>
                <div className="custom-box-heading">Benefits</div>
                <div className="custom-box-content">
                  1. Streamlined logistics management.
                  <br />
                  2. Reduced lead times. <br />
                  3. Increased customer satisfaction. <br />
                  4. Real-time tracking and coordination. <br />
                  5. Cost savings and operational efficiency.
                </div>
              </div>
              {/* <div className="custom-box">
                <div className="custom-box-icon">📞</div>
                <div className="custom-box-heading">24/7 Support</div>
                <div className="custom-box-content">
                  We're here to assist you anytime with your questions or
                  issues.
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case1;
