import { useEffect, useRef, useState } from "react";
import RateOrderForm from "../common/rate-order-form";
import Styles from "./Home.module.scss";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";
import { useLocation } from "react-router-dom";

const HomeComponent = () => {
  const { pathname } = useLocation();
  const [showSocial, setShowSocial] = useState(false);

  const getImgURL = () => {
    if (pathname === "/") return "../../images/Home/Doodle Background.png";
    if (pathname.includes("/resources"))
      return "../../images/Home/Resource.png";
    if (pathname.includes("services"))
      return "../../images/Home/Our services.png";
    if (pathname.includes("partner"))
      return "../../images/Home/Partner with us.png";
    if (pathname.includes("support")) return "../../images/Home/Support.png";
    if (pathname.includes("about")) return "../../images/Home/About Us.png";
    return "../../images/Our-service-bg.svg";
  };

  return (
    <>
      <div className={Styles.doodle}>
        {pathname === "/" ? (
          <img
            src="../../images/Home/Doodle Background.png"
            alt=""
            style={{ width: "105%" }}
          />
        ) : (
          <img src={getImgURL()} alt="" />
        )}
        <div className={Styles.subContainer}>
          <div className={Styles.mojo}>
            <div>
              {/* <img src="../../images/Home/Buckle Track Option.svg" alt="" /> */}
            </div>
            <div className={Styles.theme}>
              {"Surface Transport  |  Express Delivery  |  Project Transport"}
            </div>
          </div>
          {pathname === "/" ? (
            <div className={Styles.calculator}>
              <RateOrderForm />
            </div>
          ) : (
            <div className={Styles.calculator}>
              {/* <div className={Styles.pageHeading}>
                {pathname?.slice(1)?.toUpperCase()?.split("-")?.join(" ")}
              </div> */}
            </div>
          )}
        </div>
        <div
          className={Styles.share}
          onClick={() => setShowSocial((prev) => !prev)}
        >
          <img src="../../images/Home/share.svg" alt="" />
        </div>
        <div
          className={Styles.shareItems}
          style={{ display: showSocial ? "flex" : "none" }}
        >
          <div
            style={{ height: "48px", width: "48px" }}
            onClick={(e) => {
              window.location.href = `tel:hi`;
              e.preventDefault();
            }}
            title={"+91-022-2821-3835"}
          >
            <img src="../../images/share/call.svg" alt="" />
          </div>
          <div
            style={{ height: "48px", width: "48px" }}
            onClick={(e) => {
              window.location.href = `mailto:hi`;
              e.preventDefault();
            }}
            title="sales@buckletrack.in"
          >
            <img src="../../images/share/email.svg" alt="" />
          </div>
          <div
            style={{ height: "48px", width: "48px" }}
            onClick={(e) => {
              window.location.href = `whatsapp://send?text=Hi`;
              e.preventDefault();
            }}
            title={"+91-022-2821-3835"}
          >
            <img src="../../images/share/whatsapp.svg" alt="" />
          </div>
        </div>
      </div>
      {/* <div className={Styles.trackInfo}>
        <div className={Styles.info}>
          <img src="../../images/Home/info.svg" alt="" />
        </div>
      </div> */}
    </>
  );
};

export default HomeComponent;
