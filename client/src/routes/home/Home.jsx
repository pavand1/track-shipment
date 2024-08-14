import CpAboutBuckle from "../../components/cp-about-buckle/CpAboutBuckle";
import CpHomeBanner from "../../components/cp-home-banner/CpHomeBanner";
import CpOurServices from "../../components/cp-our-services/CpOurServices";
import CpOurSolution from "../../components/cp-our-solution/CpOurSolution";
import CpWhyBuckle from "../../components/cp-why-buckle/cpWhyBuckle";

const Home = () => {
    return <div>
        <CpHomeBanner />
        <CpOurServices /> 
        <CpWhyBuckle /> 
        <CpOurSolution />
        <CpAboutBuckle />
    </div>
}

export default Home;