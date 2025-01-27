import CpAboutBuckleTrack from "../../components/cp-about-buckle-track/CpAboutBuckleTrack";
import CpStory from "../../components/cp-story/CpStory";
import CpTeam from "../../components/cp-team/CpTeam";
import CpVisionMission from "../../components/cp-vision-mission/CpVisionMission";
import HomeComponent from "../../components/home";
import CpOurTeam from "../../components/cp-our-team/CpOurTeam";
import CpTeam1 from "../../components/cp-team-page/CpTeamPage";
import CpTeam2 from "../../components/cp-team-page/CpTeamPage1";
import CpTeam3 from "../../components/cp-team-page/CpTeamPage2";
import CpTeam4 from "../../components/cp-team-page/CpTeamPage.3";

const About = () => {
    return <>
        <HomeComponent />
        <CpAboutBuckleTrack />
        <CpVisionMission />
        <CpStory />
        <CpTeam />
        <CpOurTeam />
        <CpTeam1 />
        <CpTeam2 />
        <CpTeam3 />
        <CpTeam4 />
    </>
}

export default About;