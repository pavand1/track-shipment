import { useRef, useEffect } from "react";
import HomeComponent from "../../components/home";
import Styles from "./Ourteam.module.scss";
import CpOurTeam from "../../components/cp-our-team/CpOurTeam";
import { useLocation } from "react-router-dom";
import Kiranwakde from "../kiranWakde/kiranWakde";
import SinjuPaulose from "../sinjuPaulose/sinjuPaulose";
import ViralDesai from "../viralDesai/viralDesai";
import VinayakSukhdare from "../vinayakSukhdare/vinayakSukhdare";
import CpTeam1 from "../../components/cp-team-page/CpTeamPage";
import CpTeam2 from "../../components/cp-team-page/CpTeamPage1";
import CpTeam3 from "../../components/cp-team-page/CpTeamPage2";
import CpTeam4 from "../../components/cp-team-page/CpTeamPage3";
import { Helmet } from "react-helmet-async";

const Ourteam = () => {
  const ref = useRef();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  // }, []);
  return (
    <>
      <Helmet>
        <title>Buckletrack Our Team</title>
        <meta
          name="description"
          content="This is the Our Team page of Buckletrack"
        />
        <meta property="og:title" content="Buckletrack Our Team Page" />
        <meta
          property="og:description"
          content="This is the Our Team page for Buckletrack"
        />
      </Helmet>
      <HomeComponent />
      <div className={Styles.resourceSection} ref={ref}>
        {/* {pathname.includes("kiran") ? (
          <Kiranwakde />
        ) : pathname.includes("sinju") ? (
          <SinjuPaulose />
        ) : pathname.includes("viral") ? (
          <ViralDesai />
        ) : pathname.includes("vinayak") ? (
          <VinayakSukhdare />
        ) : (
          <CpOurTeam />
        )} */}
        <CpTeam1 isCurrent={pathname.includes("kiran")} />
        <CpTeam2 isCurrent={pathname.includes("sinju")} />
        <CpTeam3 isCurrent={pathname.includes("viral")} />
        <CpTeam4 isCurrent={pathname.includes("vinayak")} />
      </div>
    </>
  );
};

export default Ourteam;
