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
        <div className="section-blog">
          {/* <img
            className="blog-featured-img"
            src="../../images/blog/b2b-logistics.png"
          /> */}
          <h1>Smart Route Planning with Real-Time Tracking</h1>
          <p className="specialHeading">Problem Statement</p>
          <p>
            A leading e-commerce company struggled with timely deliveries due to
            fluctuating demand and last-mile inefficiencies. These challenges
            led to delayed shipments, increased operational costs, and declining
            customer satisfaction.
          </p>
          <p className="specialHeading">Solution</p>
          <p>
            BuckleTrack implemented a data-driven route optimization system
            integrated with real-time tracking. This solution streamlined
            delivery operations, improved route planning, and enhanced
            visibility across the supply chain.
          </p>

          <h2 className="blog-head">Benefits</h2>
          <p>
            <strong>1. Faster and more reliable deliveries.</strong>
          </p>
          <p>
            <strong>
              2. Reduced operational costs through optimized routes.
            </strong>
          </p>
          <p>
            <strong>3. Improved last-mile efficiency.</strong>
          </p>
          <p>
            <strong>4. Enhanced customer satisfaction.</strong>
          </p>
          <p>
            <strong>5. Real-time tracking for better decision-making.</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Case3;
