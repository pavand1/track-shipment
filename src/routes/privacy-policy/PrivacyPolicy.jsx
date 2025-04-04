import { Helmet } from "react-helmet-async";
import CpPrivacyPolicy from "../../components/cp-privacy-policy/CpPrivacyPolicy";
import HomeComponent from "../../components/home";

const privacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Buckletrack Privacy Policy</title>
        <meta
          name="description"
          content="This is the Privacy Policy page of Buckletrack"
        />
        <meta property="og:title" content="Buckletrack Privacy Policy Page" />
        <meta
          property="og:description"
          content="This is the Privacy Policy page for Buckletrack"
        />
      </Helmet>
      <HomeComponent />
      <CpPrivacyPolicy />
    </>
  );
};

export default privacyPolicy;
