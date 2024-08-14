import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import styles from './App.module.scss';
import CpHeader from './components/common/cp-header/CpHeader';
import CpFooter from './components/common/cp-footer/CpFooter';
import HomeRoute from "./routes/home/Home.jsx";
import ContactsRoute from "./routes/contacts/Contacts.jsx";
import AboutRoute from "./routes/about/About.jsx";
import FeaturesRoute from "./routes/features/Features.jsx";
import ServicesRoute from "./routes/services/Services.jsx";
import TrackOrderRoute from "./routes/track-order/TrackOrder.jsx";
import TestimonialsRoute from "./routes/testimonials/Testimonials.jsx";
import { ABOUT_US_ROUTE, CONTACTS_ROUTE, FEATURES_ROUTE, SERVICES_ROUTE, TESTIMONIALS_ROUTE, TRACK_ORDER_ROUTE } from "./utils/constants.js";
const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <CpHeader />
        <main className={styles.content}>
          <Routes>
          <Route path="/" exact element={<HomeRoute />}/>
          <Route path={ABOUT_US_ROUTE} exact element={<AboutRoute />}/>
          <Route path={FEATURES_ROUTE} exact element={<FeaturesRoute />}/>
          <Route path={SERVICES_ROUTE} exact element={<ServicesRoute />}/>
          <Route path={CONTACTS_ROUTE} exact element={<ContactsRoute />}/>
          <Route path={TRACK_ORDER_ROUTE} exact element={<TrackOrderRoute />}/>
          <Route path={TESTIMONIALS_ROUTE} exact element={<TestimonialsRoute />}/>
          <Route path="*" exact element={<HomeRoute />}/>
          </Routes>
        </main>
        <CpFooter />
      </div>
    </Router>
  );
};

export default App;
