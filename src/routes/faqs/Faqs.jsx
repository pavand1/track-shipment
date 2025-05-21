import React from "react";
import CpFaqsBanner from "../../components/common/cp-banner/CpFaqsBanner";
import CpFaq from "../../components/cp-faq/CpFaq";
import HomeComponent from "../../components/home";
import { Helmet } from "react-helmet-async";

const Faqs = () => {
  return (
    <>
      <Helmet>
        <title>BuckleTrack FAQs | Your Questions Answered</title>
        <meta
          name="description​"
          content="Get quick answers to common questions about BuckleTrack’s transport, delivery & logistics services to better understand how we support your business."
        />
        <meta property="og:title" content="BuckleTrack FAQs | Your Questions Answered" />
        <meta
          property="og:description"
          content="Get quick answers to common questions about BuckleTrack’s transport, delivery & logistics services to better understand how we support your business."
        />
      </Helmet>
      <HomeComponent />
      <CpFaq />
    </>
  );
};

export default Faqs;
