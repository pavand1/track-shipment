import React from "react";
import HomeComponent from "../../components/home";
import CpContactUs from "../../components/cp-contact-us/CpContactUs";
import { Helmet } from "react-helmet-async";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Buckletrack Contacts Page</title>
        <meta
          name="description"
          content="This is the Contacts page of Buckletrack"
        />
        <meta property="og:title" content="Buckletrack Contacts Page" />
        <meta
          property="og:description"
          content="This is the Contacts page for Buckletrack"
        />
      </Helmet>
      <HomeComponent />
      <CpContactUs />
    </>
  );
};

export default Contacts;
