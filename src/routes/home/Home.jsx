import Styles from "./Home.module.scss";
import CpTestimonials from "../../components/cp-testimonials/CpTestimonials";
import HomeComponent from "../../components/home";
// import CpOurClients from "../../components/cp-our-clients/CpOurClients";
// import CpGetInTouch from "../../components/cp-getin-touch/CpGetInTouch";
import CpAboutBuckle from "../../components/cp-about-buckle/CpAboutBuckle";
import CpWhyBuckle from "../../components/cp-why-buckle/CpWhyBuckle";
import CpCounter from "../../components/cp-counter/CpCounter";
import ServicesHome from "../../components/home/Services";
import CaseStudies from "../../components/home/CaseStudies";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";

const Home = ({ setRouteChange }) => {
  const ref=useRef();
    useEffect(() => {
      if (ref.current)
        ref.current.scrollIntoView({ behavior: "smooth" });
    }, []);
  return (
    <div className={Styles.container}ref={ref}>
      <Helmet>
        <title>Buckletrack Home</title>
        <meta
          name="description"
          content="This is the home page of my React app."
        />
        <meta property="og:title" content="Buckletrack Home Page" />
        <meta
          property="og:description"
          content="This is the home page for Buckletrack"
        />
      </Helmet>
      <HomeComponent />
      <CpWhyBuckle />
      <ServicesHome />
      <CpCounter />
      <CpAboutBuckle setRouteChange={setRouteChange} />
      {/* <CpGetInTouch />
        <CpOurClients /> */}
      <CaseStudies />
      <CpTestimonials />
      {/* <div className={Styles.doodle}>
            <img src="../../images/Home/whybucklet/testimonialbg.png" alt="" />
        </div> */}
    </div>
  );
};

export default Home;
