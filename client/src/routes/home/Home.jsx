import CpAboutBuckle from "../../components/cp-about-buckle/CpAboutBuckle";
import CpHomeBanner from "../../components/cp-home-banner/CpHomeBanner";
import CpOurClients from "../../components/cp-our-clients/CpOurClients";
//import CpOurServices from "../../components/cp-our-services/CpOurServices";
import CpOurSolution from "../../components/cp-our-solution/CpOurSolution";
import CpTestimonials from "../../components/cp-testimonials/CpTestimonials";
import CpWhyBuckle from "../../components/Cp-why-buckle/CpWhyBuckle";


const Home = () => {
    return <div>
        <CpHomeBanner />
        {/* <CpOurServices />  */}
        <CpWhyBuckle /> 
        <CpOurSolution />
        <CpAboutBuckle />
        <CpOurClients />
        <CpTestimonials />
    </div>
}

export default Home;