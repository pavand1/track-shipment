import { useRef, useEffect } from "react";
import HomeComponent from "../../components/home";
import Styles from "./Ourteam.module.scss";
import CpOurTeam from "../../components/cp-our-team/CpOurTeam";
import { useLocation } from "react-router-dom";
import Kiranwakde from "../kiranWakde/kiranWakde";
import SinjuPaulose from "../sinjuPaulose/sinjuPaulose";
import ViralDesai from "../viralDesai/viralDesai";
import VinayakSukhdare from "../vinayakSukhdare/vinayakSukhdare";

const Ourteam = () => {
  const ref = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <HomeComponent />
      <div className={Styles.resourceSection} ref={ref}>
        {pathname.includes("kiran") ? (
          <Kiranwakde />
        ) : pathname.includes("sinju") ? (
          <SinjuPaulose />
        ) : pathname.includes("viral") ? (
          <ViralDesai />
        ) : pathname.includes("vinayak") ? (
          <VinayakSukhdare />
        ) : (
          <CpOurTeam />
        )}
      </div>
    </>
  );
};

export default Ourteam;
