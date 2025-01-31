import { useLocation, useNavigate } from "react-router-dom";
import HomeComponent from "../../components/home";
import "./style.css";
import {
  BLOG1,
  BLOG2,
  FAQ_ROUTE,
  RESOURCE_BLOGS,
  RESOURCE_CAREER,
  RESOURCE_CASE_STUDIES,
} from "../../utils/constants";
import { useRef, useEffect, useState } from "react";
import Styles from "./Resource.module.scss";
import AllResources from "./AllResources";
import Blogs from "./Blogs";
import CpFaq from "../../components/cp-faq/CpFaq";
import Career from "./Career";

const Resource = ({ setRouteChange }) => {
  const ref = useRef();
  const [breadcrumb, setBreadcrumb] = useState("Home");
  const [targetPage, setTargetPage] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const routes = pathname.split("/").slice(1);
    let newBreadcrumb = "";
    routes.forEach((r) => (newBreadcrumb = newBreadcrumb + " > " + r));
    setBreadcrumb("Home" + newBreadcrumb);
    setTargetPage(routes[routes.length - 1]);
    if (setRouteChange) setRouteChange(routes[routes.length - 1]);
  }, [pathname]);

  return (
    <>
      <HomeComponent />
      <div className={Styles.resourceSection} ref={ref}>
        <div className={Styles.breadcrumbDiv}>
          <div className={Styles.breadcrumb}>
            {breadcrumb.split(" ").map((item, index) => (
              <span
                key={item + index}
                onClick={() =>
                  item !== ">" && index !== breadcrumb.split(" ").length - 1
                    ? navigate(`/${item}`)
                    : null
                }
                style={{
                  cursor:
                    index === breadcrumb.split(" ").length - 1
                      ? "default"
                      : "pointer",
                  color:
                    index === breadcrumb.split(" ").length - 1
                      ? "black"
                      : "rgb(4, 107, 210)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={Styles.resources}>
          <div className={Styles.heading}>
            {targetPage === "resources" && "Resources"}
            {targetPage === "blogs" && "Logistic Blogs"}
            {targetPage === "faqs" && "FAQs"}
            {targetPage === "career" && "Career"}
            {targetPage === "case-studies" && "Case Studies"}
          </div>
        </div>
        {targetPage === "resources" && <AllResources />}
        {targetPage === "blogs" && <Blogs setRouteChange={setRouteChange} />}
        {targetPage === "faqs" && <CpFaq />}
        {targetPage === "career" && <Career />}
        {targetPage === "case-studies" && <AllResources />}
      </div>
    </>
  );
};

export default Resource;
