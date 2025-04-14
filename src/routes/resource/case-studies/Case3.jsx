import { useRef, useEffect } from "react";
import HomeComponent from "../../../components/home";

const Case3 = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <HomeComponent />
      <div className="blog" ref={ref}>
      <div className="main-body2">
          <h2 className="case-heading">Smart Route Planning with Real-Time Tracking</h2>

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
                A leading e-commerce company struggled with timely deliveries due to fluctuating demand 
                and last-mile inefficiencies. These challenges led to delayed shipments, increased operational 
                costs, and declining customer satisfaction.
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
                BuckleTrack implemented a data-driven route optimization system integrated with real-time tracking. 
                This solution streamlined delivery operations, improved route planning, and enhanced visibility across 
                the supply chain.
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
                  1. Faster and more reliable deliveries.
                  <br />
                  2. Reduced operational costs through optimized routes. <br />
                  3. Improved last-mile efficiency. <br />
                  4. Enhanced customer satisfaction. <br />
                  5. Real-time tracking for better decision-making.
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

export default Case3;
