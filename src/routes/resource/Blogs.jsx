import { useNavigate } from "react-router-dom";
import "./style.css";
import { BLOG1, BLOG2, BLOG3 } from "../../utils/constants";
import { useRef, useEffect } from "react";

const Blogs = ({ setRouteChange = () => {}, notBlogsPage = false }) => {
  const navigator = useNavigate();
  const ref = useRef();

  useEffect(() => {
    setRouteChange(ref);
  }, []);

  return (
    <>
      <div
        className="blog-section"
        ref={ref}
        style={{
          gridTemplateColumns: notBlogsPage
            ? "repeat(3, 1fr)"
            : "repeat(3, 1fr)",
          padding: notBlogsPage ? "0" : "3rem 9rem",
        }}
      >
        <div className="blog-card">
          <img src="../../images/blog/blog-1.png" alt="Blog Image" />
          <div className="blogs-content">
            <h3>Logistics Solution: Streamlining Your Business Operations</h3>
            <p style={{paddingBottom:"30px"}}>
              {notBlogsPage
                ? `The right logistics solution is the backbone of the organization,
              is cost-effective and aids in customer satisfaction in today’s
              dynamic business environment. Whether you’re a small business or
              an international operator, working with a logistics partner and
              strategy you can count on to transport goods and services is
              important for any organization. The article outlines how a
              logistics solution can be a game-changer for your business...`.slice(
                    0,
                    150
                  ) + "..."
                : `The right logistics solution is the backbone of the organization,
              is cost-effective and aids in customer satisfaction in today’s
              dynamic business environment. Whether you’re a small business or
              an international operator, working with a logistics partner and
              strategy you can count on to transport goods and services is
              important for any organization. The article outlines how a
              logistics solution can be a game-changer for your business...`}
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
            <p style={{paddingBottom:"30px"}}>
              {notBlogsPage
                ? `B2B logistics & Transportation refers to the part of the supply
              chain that synchronises the flow of products between businesses
              and users, one of the most important components in today’s
              persistently shifting landscape of commerce. No matter if the
              company you are dealing with is a manufacturer, a retailer, or a
              wholesaler, the core of a well-organized B2B logistics system, is
              to deliver products at their scheduled destinations and the lowest
              price.`.slice(0, 150)
                : `B2B logistics & Transportation refers to the part of the supply
              chain that synchronises the flow of products between businesses
              and users, one of the most important components in today’s
              persistently shifting landscape of commerce. No matter if the
              company you are dealing with is a manufacturer, a retailer, or a
              wholesaler, the core of a well-organized B2B logistics system, is
              to deliver products at their scheduled destinations and the lowest
              price.`}
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
          <h3>When to Use Full Truckload (FTL) vs. Partial Truckload (PTL) for Cost-Effective Freight Management</h3>
          <p>
            {notBlogsPage
              ? `Efficient freight management is important for businesses that depend 
              on transportation to move goods from one location to another. 
              Choosing the right shipping method—Full Truckload (FTL) or Partial 
              Truckload (PTL)—can significantly impact cost, delivery speed, and 
              overall logistics efficiency. Knowing when to use Full Truckload 
              (FTL) or Part Truckload (PTL) ensures cost-effective freight management 
              while optimising operations.`.slice(0, 150)
              : `Efficient freight management is important for businesses that depend 
              on transportation to move goods from one location to another. 
              Choosing the right shipping method—Full Truckload (FTL) or Partial 
              Truckload (PTL)—can significantly impact cost, delivery speed, and 
              overall logistics efficiency. Knowing when to use Full Truckload 
              (FTL) or Part Truckload (PTL) ensures cost-effective freight management 
              while optimising operations.`}
          </p>
          {/* <a href="#" className="btn">Read More</a> */}
          <span style={{paddingBottom:"20px"}} className="btn" onClick={() => navigator(BLOG3)}>
            Read More
          </span>
        </div>
      </div>
        
      </div>
    </>
  );
};

export default Blogs;
