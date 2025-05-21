import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CASE1, CASE2, CASE3 } from "../../utils/constants";
import { Helmet } from "react-helmet-async";

const CaseStudies = ({ setRouteChange = () => {}, notBlogsPage = false }) => {
  const navigator = useNavigate();
  const ref = useRef();

  useEffect(() => {
    setRouteChange(ref);
  }, []);

  return (
    <>
      <Helmet>
        <title>BuckleTrack Case Studies | Transport & Supply Chain Success​</title>
        <meta
          name="description"
          content="Explore BuckleTrack’s case studies highlighting successful transport and supply chain solutions that improved efficiency and client satisfaction."
        />
        <meta property="og:title" content="Buckletrack Case Studies Page" />
        <meta
          property="og:description"
          content="This is the Case Studies page for Buckletrack"
        />
      </Helmet>
      <link rel="canonical" href="https://buckletrack.com/resources/case-studies" />
      <div
        className="blog-section"
        ref={ref}
        // style={{
        //   padding: notBlogsPage ? "0" : "3rem 9rem",
        // }}
      >
        <div className="blog-card">
          <img src="../../images/services/Boosts-Efficiency.jpg" alt="Blog Image" />
          <div className="blogs-content">
            <h3>BuckleTrack TMS Boosts <br/>Efficiency</h3>
            <p>
              {notBlogsPage
                ? `A major retailer faced challenges in optimizing its supply chain operations, including inefficient logistics management`.slice(
                    0,
                    150
                  ) + "..."
                : `A major retailer faced challenges in optimizing its supply chain operations, including inefficient logistics management`}
            </p>
            {/* <a href="#" className="btn">Read More</a> */}
            <span className="btn" onClick={() => navigator(CASE1)}>
              Read More
            </span>
          </div>
        </div>
        <div className="blog-card">
          <img src="../../images/services/Secure-Packaging.jpg" alt="Blog Image" />
          <div className="blogs-content">
            <h3>
            Sustainable & Secure Packaging by BuckleTrack
            </h3>
            <p>
              {notBlogsPage
                ? `A giant logistics provider faced challenges in protecting products during transit and streamlining handling processes`.slice(0, 150)
                : `A giant logistics provider faced challenges in protecting products during transit and streamlining handling processes`}
            </p>
            {/* <a href="#" className="btn">Read More</a> */}
            <span className="btn" onClick={() => navigator(CASE2)}>
              Read More
            </span>
          </div>
        </div>

        <div className="blog-card">
          <img src="../../images/services/real-time-tracking.jpg" alt="Blog Image" />
          <div className="blogs-content">
            <h3>
            Smart Route Planning with Real-Time Tracking
            </h3>
            <p>
              {notBlogsPage
                ? `A leading e-commerce company struggled with timely deliveries due to fluctuating demand and last-mile inefficiencies`.slice(0, 150)
                : `A leading e-commerce company struggled with timely deliveries due to fluctuating demand and last-mile inefficiencies`}
            </p>
            {/* <a href="#" className="btn">Read More</a> */}
            <span
        
              className="btn"
              onClick={() => navigator(CASE3)}
            >
              Read More
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
