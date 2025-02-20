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

const Ourteam = () => {
  const ref = useRef();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  // }, []);
  return (
    <>
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
