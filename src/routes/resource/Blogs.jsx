import { useNavigate } from "react-router-dom";
import "./style.css";
import { BLOG1, BLOG2, BLOG3 } from "../../utils/constants";
import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Blogs = ({ setRouteChange = () => {}, notBlogsPage = false }) => {
  const navigator = useNavigate();
  const ref = useRef();

  useEffect(() => {
    setRouteChange(ref);
  }, []);

  return (
    <>
      <Helmet>
        <title>Buckletrack Blogs</title>
        <meta
          name="description"
          content="This is the Blogs page of my React app."
        />
        <meta property="og:title" content="Buckletrack Blogs Page" />
        <meta
          property="og:description"
          content="This is the Blogs page for Buckletrack"
        />
      </Helmet>
      <div
        className="blog-section"
        ref={ref}
        // style={{
        //   padding: notBlogsPage ? "0" : "3rem 9rem",
        // }}
      >
        <div className="blog-card">
          <img src="../../images/blog/blog-1.png" alt="Blog Image" />
          <div className="blogs-content">
            <h3>Logistics Solution: Streamlining Your Business Operations</h3>
            <p style={{ paddingBottom: "0px" }}>
              {notBlogsPage
                ? `The right logistics solution is the backbone of the organization,
              is cost-effective and aids in customer satisfaction in today’s
              dynamic business environment. Whether you’re a small business or
              an international operator, working with a logistics partner...`.slice(
                    0,
                    150
                  ) + "..."
                : `The right logistics solution is the backbone of the organization,
              is cost-effective and aids in customer satisfaction in today’s
              dynamic business environment. Whether you’re a small business or
              an international operator, working with a logistics partner...`}
            </p>
            {/* <a href="#" className="btn">Read More</a> */}
            <span className="btn" onClick={() => navigator(BLOG1)}>
              Read More
            </span>
          </div>
        </div>
        <div className="blog-card">
          <img src="../../images/blog/b2b-logistics.png" alt="Blog Image" />
          <div className="blogs-content">
            <h3>
              B2B Logistics: The Backbone of Efficient Business Operations
            </h3>
            <p style={{ paddingBottom: "0px" }}>
              {notBlogsPage
                ? `B2B logistics & Transportation refers to the part of the supply
              chain that synchronises the flow of products between businesses
              and users, one of the most important components in today’s
              persistently shifting landscape of commerce.`.slice(0, 150)
                : `B2B logistics & Transportation refers to the part of the supply
              chain that synchronises the flow of products between businesses
              and users, one of the most important components in today’s
              persistently shifting landscape of commerce.`}
            </p>
            {/* <a href="#" className="btn">Read More</a> */}
            <span className="btn" onClick={() => navigator(BLOG2)}>
              Read More
            </span>
          </div>
        </div>

        <div className="blog-card">
          <img src="../../images/blog/blog-3.png" alt="Blog Image" />
          <div className="blogs-content">
            <h3>
              When to Use FTL vs. PTL for
              Cost-Effective Freight Management
            </h3>
            <p>
              {notBlogsPage
                ? `Efficient freight management is important for businesses that depend 
              on transportation to move goods from one location to another. 
              Choosing the right shipping method—Full Truckload (FTL) or Partial 
              Truckload (PTL)—can significantly...`.slice(0, 150)
                : `Efficient freight management is important for businesses that depend 
              on transportation to move goods from one location to another. 
              Choosing the right shipping method—Full Truckload (FTL) or Partial 
              Truckload (PTL)—can significantly...`}
            </p>
            {/* <a href="#" className="btn">Read More</a> */}
            <span
              style={{ paddingBottom: "20px" }}
              className="btn"
              onClick={() => navigator(BLOG3)}
            >
              Read More
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
