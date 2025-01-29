import Styles from "./Home.module.scss"
import CpTestimonials from "../../components/cp-testimonials/CpTestimonials";
import HomeComponent from "../../components/home";
// import CpOurClients from "../../components/cp-our-clients/CpOurClients";
// import CpGetInTouch from "../../components/cp-getin-touch/CpGetInTouch";
import CpAboutBuckle from "../../components/cp-about-buckle/CpAboutBuckle";
import CpWhyBuckle from "../../components/cp-why-buckle/CpWhyBuckle";
import CpCounter from "../../components/cp-counter/CpCounter";
import ServicesHome from "../../components/home/Services";

const Home = ({setRouteChange}) => {
    return <div className={Styles.container}>
        <HomeComponent />
        <CpWhyBuckle />
        <ServicesHome />
        <CpCounter />
        <CpAboutBuckle setRouteChange={setRouteChange}/>
        {/* <CpGetInTouch />
        <CpOurClients /> */}
        <CpTestimonials />
        {/* <div className={Styles.doodle}>
            <img src="../../images/Home/whybucklet/testimonialbg.png" alt="" />
        </div> */}
    </div>
}

export default Home;