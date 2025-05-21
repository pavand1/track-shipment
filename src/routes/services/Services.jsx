import Styles from "../home/Home.module.scss";
import HomeComponent from "../../components/home";
import CpWhyBuckle from "../../components/cp-why-buckle/CpWhyBuckle";
import CpServicesComp from "../../components/cp-services-comp/CpServicesComp";
import { useEffect, useRef } from "react";
import ServicesHome from "../../components/home/Services";
import Blogs from "../resource/Blogs";
import { Helmet } from "react-helmet-async";

const Services = ({ isRoot }) => {
  const ref = useRef();
  return (
    <div className={Styles.container} ref={ref}>
      <Helmet>
        <title>BuckleTrack Logistics | Surface, Express & Project Transport</title>
        <meta
          name="description"
          content="Discover BuckleTrack’s services: surface transport, express delivery, and project logistics—tailored to boost efficiency and meet your business needs."
        />
        <meta property="og:title" content="Buckletrack Services Page" />
        <meta
          property="og:description"
          content="This is the Services page for Buckletrack"
        />
                <link rel="canonical" href="https://buckletrack.com/our-services" />
      </Helmet>
      <HomeComponent />
      <CpWhyBuckle />
      {!isRoot ? <CpServicesComp /> : <ServicesHome />}
      {
        <div className={`${Styles.doodle} ${Styles.homeServices}`}>
          {/* {window.innerWidth > 768 && (
            <img src="../../images/Home/Doodle Background-1.svg" alt="" async />
          )} */}
          <div className={`${Styles.subContainer} ${Styles.blogs}`}>
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
