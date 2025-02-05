import Styles from "../home/Home.module.scss";
import HomeComponent from "../../components/home";
import CpWhyBuckle from "../../components/cp-why-buckle/CpWhyBuckle";
import CpServicesComp from "../../components/cp-services-comp/CpServicesComp";
import { useEffect, useRef } from "react";
import ServicesHome from "../../components/home/Services";
import Blogs from "../resource/Blogs";

const Services = ({ isRoot }) => {
  const ref = useRef();
  return (
    <div className={Styles.container} ref={ref}>
      <HomeComponent />
      <CpWhyBuckle />
      {!isRoot ? <CpServicesComp /> : <ServicesHome />}
      {
        <div className={Styles.doodle}>
          <img src="../../images/Home/Doodle Background-1.svg" alt="" async />
          <div
            className={Styles.subContainer}
            style={{
              flexDirection: "column",
              gap: "2rem",
              padding: "4rem 8rem",
            }}
          >
            <h1
              style={{
                fontSize: "4rem",
                fontFamily: "Poppins-Bold",
                color: "#000000",
                margin: "0",
              }}
            >
              Latest Blogs
            </h1>
            <Blogs notBlogsPage />
          </div>
        </div>
      }
    </div>
  );
};

export default Services;
