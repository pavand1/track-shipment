import CpAboutBuckleTrack from "../../components/cp-about-buckle-track/CpAboutBuckleTrack";
import CpStory from "../../components/cp-story/CpStory";
import CpVisionMission from "../../components/cp-vision-mission/CpVisionMission";
import HomeComponent from "../../components/home";
import CpOurTeam from "../../components/cp-our-team/CpOurTeam";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Buckletrack About Page</title>
        <meta
          name="description"
          content="This is the About page of Buckletrack"
        />
        <meta property="og:title" content="Buckletrack About Page" />
        <meta
          property="og:description"
          content="This is the About page for Buckletrack"
        />
      </Helmet>
      <HomeComponent />
      <CpAboutBuckleTrack />
      <CpVisionMission />
      <CpStory />
      <CpOurTeam />
    </>
  );
};

export default About;
