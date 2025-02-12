import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import CpHeader from "./components/common/cp-header/CpHeader";
import CpFooter from "./components/common/cp-footer/CpFooter";
import HomeRoute from "./routes/home/Home.jsx";
import ContactsRoute from "./routes/contacts/Contacts.jsx";
import AboutRoute from "./routes/about/About.jsx";
import FeaturesRoute from "./routes/features/Features.jsx";
import ServicesRoute from "./routes/services/Services.jsx";
import TrackOrderRoute from "./routes/track-order/TrackOrder.jsx";
import TestimonialsRoute from "./routes/testimonials/Testimonials.jsx";
import PrivacyPolicy from "./routes/privacy-policy/PrivacyPolicy";
import "../src/styles/main.scss";
import {
  ABOUT_US_ROUTE,
  CONTACTS_ROUTE,
  FEATURES_ROUTE,
  SERVICES_ROUTE,
  TESTIMONIALS_ROUTE,
  TRACK_ORDER_ROUTE,
  PRIVACY_POLICY_ROUTE,
  TERMS_CONDITION_ROUTE,
  RETURN_CANCELLATION_ROUTE,
  REFUND_POLICY_ROUTE,
  FAQ_ROUTE,
  SUPPORT,
  RESOURCE,
  PARTNER,
  BLOG1,
  BLOG2,
  BLOG3,
  KIRANWAKDE,
  VIRALDESAI,
  SINJUPAULOSE,
  VINAYAKSUKHDARE,
  RESOURCE_BLOGS,
  RESOURCE_CASE_STUDIES,
  RESOURCE_CAREER,
  RESOURCE_FAQs,
} from "./utils/constants.js";
import Faqs from "./routes/faqs/Faqs";
import RefundPolicy from "./routes/refund-policy/RefundPolicy";
import ReturnConcellation from "./routes/return-concellation/ReturnConcellation";
import TermsCondition from "./routes/terms-condition/TermsCondition";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Support from "./routes/support/Support.jsx";
import Resource from "./routes/resource/Resource.jsx";
import Partner from "./routes/partner/Partner.jsx";
import Blog1 from "./routes/resource/blog/logistics-solution-streamlining-your-business-oerations.jsx";
import Blog2 from "./routes/resource/blog/B2B-logistics-the-backbone-of-efficient-business-operations.jsx";
import Blog3 from "./routes/resource/blog/when-to-use-full-truckload-vs-partial-truckload-for-cost-effective-freight-management.jsx";
import Kiranwakde from "./routes/kiranWakde/kiranWakde.jsx";
import VinayakSukhdare from "./routes/vinayakSukhdare/vinayakSukhdare.jsx";
import ViralDesai from "./routes/viralDesai/viralDesai.jsx";
import SinjuPaulose from "./routes/sinjuPaulose/sinjuPaulose.jsx";

const App = () => {
  const ref = useRef();
  const [routeChange, setRouteChange] = useState(null);
  const [outsideClick, setOutsideClick] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    if (routeChange && ref.current)
      ref.current.scrollIntoView({ behavior: "smooth" });
  }, [routeChange]);
  return (
    <Router>
      <div
        className={styles.app}
        ref={ref}
        onClick={() => setOutsideClick((prev) => !prev)}
      >
        <CpHeader
          setRouteChange={setRouteChange}
          outsideClick={outsideClick}
          setOutsideClick={setOutsideClick}
        />
        <main className={styles.content}>
          <Routes>
            <Route
              path="/"
              exact
              element={<HomeRoute setRouteChange={setRouteChange} />}
            />
            <Route path={ABOUT_US_ROUTE} exact element={<AboutRoute />} />
            <Route path={FEATURES_ROUTE} exact element={<FeaturesRoute />} />
            <Route
              path={`${SERVICES_ROUTE}`}
              element={<ServicesRoute isRoot={true} />}
            />
            <Route
              path={`${SERVICES_ROUTE}/:surface-transport`}
              element={<ServicesRoute />}
            />
            <Route
              path={`${SERVICES_ROUTE}/:express-delivery`}
              element={<ServicesRoute />}
            />
            <Route
              path={`${SERVICES_ROUTE}/:project-transport`}
              element={<ServicesRoute />}
            />
            <Route path={SUPPORT} element={<Faqs />} />
            <Route path={RESOURCE} element={<Resource />} />
            <Route path={PARTNER} element={<Partner />} />
            <Route path={BLOG1} element={<Blog1 />} />
            <Route path={BLOG2} element={<Blog2 />} />
            <Route path={BLOG3} element={<Blog3 />} />
            <Route path={KIRANWAKDE} element={<Kiranwakde />} />
            <Route path={VIRALDESAI} element={<ViralDesai />} />
            <Route path={SINJUPAULOSE} element={<SinjuPaulose />} />
            <Route path={VINAYAKSUKHDARE} element={<VinayakSukhdare />} />
            <Route
              path={PRIVACY_POLICY_ROUTE}
              exact
              element={<PrivacyPolicy />}
            />
            <Route
              path={TERMS_CONDITION_ROUTE}
              exact
              element={<TermsCondition />}
            />
            <Route
              path={RETURN_CANCELLATION_ROUTE}
              exact
              element={<ReturnConcellation />}
            />
            <Route
              path={REFUND_POLICY_ROUTE}
              exact
              element={<RefundPolicy />}
            />
            <Route path={FAQ_ROUTE} exact element={<Faqs />} />
            <Route path={CONTACTS_ROUTE} exact element={<ContactsRoute />} />
            <Route path={RESOURCE_BLOGS} element={<Resource setRouteChange={setRouteChange}/>} />
            <Route path={RESOURCE_CASE_STUDIES} element={<Resource setRouteChange={setRouteChange}/>} />
            <Route path={RESOURCE_CAREER} element={<Resource setRouteChange={setRouteChange}/>} />
            <Route path={RESOURCE_FAQs} element={<Resource setRouteChange={setRouteChange}/>} />
            <Route path="*" exact element={<HomeRoute />} />
          </Routes>
        </main>
        <CpFooter setRouteChange={setRouteChange} />
      </div>
    </Router>
  );
};

export default App;
