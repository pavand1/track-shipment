import CpAboutBanner from "../../components/common/cp-banner/CpAboutBanner";
import CpAboutBuckleTrack from "../../components/cp-about-buckle-track/CpAboutBuckleTrack";
import CpStory from "../../components/cp-story/CpStory";
import CpTeam from "../../components/cp-team/CpTeam";
import CpVisionMission from "../../components/cp-vision-mission/CpVisionMission";

const About = () => {
    return <>
        <CpAboutBanner />
        <CpAboutBuckleTrack />
        <CpVisionMission />
        <CpStory />
        <CpTeam />
    </>
}

export default About;