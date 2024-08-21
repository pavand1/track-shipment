import CpAboutBuckle from "../../components/cp-about-buckle/CpAboutBuckle";
import CpGetInTouch from "../../components/cp-getin-touch/CpGetInTouch";
import CpHomeBanner from "../../components/cp-home-banner/CpHomeBanner";
import CpOurClients from "../../components/cp-our-clients/CpOurClients";
// import CpOurSolution from "../../components/cp-our-solution/CpOurSolution";
import CpOurServices from "../../components/cp-services/CpOurServices";
import CpOurSolution from "../../components/cp-solution/CpOurSolution";
import CpTestimonials from "../../components/cp-testimonials/CpTestimonials";
import CpWhyBuckle from "../../components/Cp-why-buckle/CpWhyBuckle";


const Home = () => {
    return <div>
        <CpHomeBanner />
        <CpOurServices />
        <CpWhyBuckle /> 
        <CpOurSolution  />
        <CpOurClients />
        <CpAboutBuckle />
        <CpGetInTouch />
        <CpTestimonials />
    </div>
}

export default Home;