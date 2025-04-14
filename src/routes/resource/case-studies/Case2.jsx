import { useRef, useEffect } from "react";
import HomeComponent from "../../../components/home";

const Case2 = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <HomeComponent />
      <div className="blog" ref={ref}>
      <div className="main-body1">
          <h2 className="case-heading">Sustainable & Secure Packaging by BuckleTrack</h2>

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
                A giant logistics provider faced challenges in protecting products during transit and 
                streamlining handling processes. Existing packaging solutions were inefficient, leading to 
                increased waste, higher costs, and sustainability concerns.
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
                Our team designed tailored packaging solutions optimized for product protection, handling 
                efficiency, and sustainability. BuckleTrack ensured the packaging met operational and environmental 
                goals using advanced materials and innovative designs.
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
                  1. Enhanced product protection during transit.
                  <br />
                  2. Streamlined handling processes. <br />
                  3. Reduced packaging waste. <br />
                  4. Improved cost-effectiveness. <br />
                  5. Sustainable packaging solutions.
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

export default Case2;
