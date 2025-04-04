import React from "react";
import CpFaqsBanner from "../../components/common/cp-banner/CpFaqsBanner";
import CpFaq from "../../components/cp-faq/CpFaq";
import HomeComponent from "../../components/home";
import { Helmet } from "react-helmet-async";

const Faqs = () => {
  return (
    <>
      <Helmet>
        <title>Buckletrack FAQ's</title>
        <meta
          name="description"
          content="This is the FAQ's page of Buckletrack"
        />
        <meta property="og:title" content="Buckletrack FAQ's Page" />
        <meta
          property="og:description"
          content="This is the FAQ's page for Buckletrack"
        />
      </Helmet>
      <HomeComponent />
      <CpFaq />
    </>
  );
};

export default Faqs;
