import React from "react";
import HomeComponent from "../../components/home";
import CpContactUs from "../../components/cp-contact-us/CpContactUs";
import { Helmet } from "react-helmet-async";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Contact BuckleTrack | Logistics & Transport Support</title>
        <meta
          name="description"
          content="Reach out to BuckleTrack for expert logistics support. Find our contact details for quick assistance with transport and supply chain solutions."
        />
        <meta property="og:title" content="Buckletrack Contacts Page" />
        <meta
          property="og:description"
          content="This is the Contacts page for Buckletrack"
        />
        <link rel="canonical" href="https://buckletrack.com/contact-us" />
      </Helmet>
      <HomeComponent />
      <CpContactUs />
    </>
  );
};

export default Contacts;
