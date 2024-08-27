import CpHomeBanner from "../../components/common/cp-banner/CpHomeBanner";
import CpAboutBuckle from "../../components/cp-about-buckle/CpAboutBuckle";
import CpGetInTouch from "../../components/cp-getin-touch/CpGetInTouch";
import CpOurClients from "../../components/cp-our-clients/CpOurClients";
import CpOurServices from "../../components/cp-our-services/CpOurServices";
import CpOurSolution from "../../components/cp-our-solution/CpOurSolution";
import CpTestimonials from "../../components/cp-testimonials/CpTestimonials";
import CpWhyBuckle from "../../components/cp-why-buckle/CpWhyBuckle";


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