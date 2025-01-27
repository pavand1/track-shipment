import CpAboutBuckleTrack from "../../components/cp-about-buckle-track/CpAboutBuckleTrack";
import CpStory from "../../components/cp-story/CpStory";
import CpVisionMission from "../../components/cp-vision-mission/CpVisionMission";
import HomeComponent from "../../components/home";
import CpOurTeam from "../../components/cp-our-team/CpOurTeam";

const About = () => {
    return <>
        <HomeComponent />
        <CpAboutBuckleTrack />
        <CpVisionMission />
        <CpStory />
        <CpOurTeam />
    </>
}

export default About;