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
        <div className="section-blog">
          <img
            className="blog-featured-img"
            src="../../images/blog/b2b-logistics.png"
          />
          <h1>BuckleTrack TMS Boosts Efficiency</h1>
          <p className="specialHeading">Proble Statement</p>
          <p>
            A major retailer faced challenges in optimizing its supply chain
            operations, including inefficient logistics management, prolonged
            lead times, and declining customer satisfaction. The lack of an
            integrated system hindered real-time tracking and coordination,
            impacting overall efficiency.
          </p>
          <p className="specialHeading">Solution</p>
          <p>
            BuckleTrack implemented an advanced Transportation Management System
            (TMS) tailored to the retailer’s needs. The integrated solution
            streamlined logistics operations enabled real-time tracking, and
            enhanced coordination across the supply chain.
          </p>

          <h2 className="blog-head">Benefits</h2>
          <p>
            <strong>1. Streamlined logistics management.</strong>
          </p>
          <p>
            <strong>2. Reduced lead times.</strong>
          </p>
          <p>
            <strong>3. Increased customer satisfaction.</strong>
          </p>
          <p>
            <strong>4. Real-time tracking and coordination.</strong>
          </p>
          <p>
            <strong>5. Cost savings and operational efficiency.</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Case1;
