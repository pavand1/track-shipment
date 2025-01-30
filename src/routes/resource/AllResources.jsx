import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  FAQ_ROUTE,
  RESOURCE_BLOGS,
  RESOURCE_CAREER,
  RESOURCE_CASE_STUDIES,
  RESOURCE_FAQs,
} from "../../utils/constants";
import { useRef, useEffect, useState } from "react";
import Styles from "./Resource.module.scss";

const AllResources = () => {
  const ref = useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //     if(ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  //   }, []);

  return (
    <div className={Styles.allResources}>
      <div className={Styles.resource}>
        <div
          className="blog-card"
          onClick={() => navigate(RESOURCE_CASE_STUDIES)}
        >
          <img src="../../images/resource/Case Studies.png" alt="Blog Image" />
          <div
            className="blog-content"
            onClick={() => navigate(RESOURCE_CASE_STUDIES)}
          >
            Case Studies
          </div>
        </div>
      </div>
      <div className={Styles.resource}>
        <div className="blog-card">
          <img src="../../images/resource/blogs.jpg" alt="Blog Image" />
          <div
            className="blog-content"
            onClick={() => navigate(RESOURCE_BLOGS)}
          >
            Logistic Blogs
          </div>
        </div>
      </div>
      <div className={Styles.resource}>
        <div className="blog-card">
          <img src="../../images/resource/FAQs.png" alt="Blog Image" />
          <div className="blog-content" onClick={() => navigate(RESOURCE_FAQs)}>
            FAQs
          </div>
        </div>
      </div>
      <div className={Styles.resource}>
        <div className="blog-card">
          <img src="../../images/resource/career.jpg" alt="Blog Image" />
          <div
            className="blog-content"
            onClick={() => navigate(RESOURCE_CAREER)}
          >
            Career
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllResources;
