import { Modal } from "antd";
import HomeComponent from "../../components/home";
import "./style.css";
import CpContactUs from "../../components/cp-contact-us/CpContactUs";
import { useState } from "react";
import GetQuote from "../../components/get-quote/GetQuote";
import { Helmet } from "react-helmet-async";

const accountURL = import.meta.env.VITE_ACCOUNT_URL;
const Partner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Buckletrack Partner with us</title>
        <meta
          name="description"
          content="This is the Partner with us page of Buckletrack"
        />
        <meta property="og:title" content="Buckletrack Partner with us Page" />
        <meta
          property="og:description"
          content="This is the Partner with us page for Buckletrack"
        />
      </Helmet>
      <HomeComponent />
      <div className="partner">
        <div className="container">
          <h2 className="mainHeading">
            Partner with BuckleTrack – Drive Growth, Maximize Earnings
          </h2>
          <h3 className="subHeading">
            Join Our Network & Unlock Lucrative Opportunities
          </h3>
          <p>
            At BuckleTrack, we believe in building strong, mutually beneficial
            partnerships. Whether you're looking to expand your logistics
            business, enhance service offerings, or maximize earnings through
            referrals, our partnership program is designed to fuel growth for
            both of US!
          </p>
          <h4 className="sec-heading">Who Can Partner with BuckleTrack?</h4>

          <div className="associates-container">
            <div className="associate-box new-associate">
              <img
                className="asso-img"
                src="../../images/partner/associate.png"
              />
              <div className="associate-title">New Associate</div>
              <p className="associate-description">
                Expand your logistics capabilities
              </p>
            </div>
            <div className="associate-box existing-associate">
              <img
                className="asso-img"
                src="../../images/partner/first-associate.png"
              />
              <div className="associate-title">Existing Associate</div>
              <p className="associate-description">
                Earn more through referrals
              </p>
            </div>
            <div className="associate-box dsa-associate">
              <img className="asso-img" src="../../images/partner/dsa.png" />
              <div className="associate-title">DSA Associate</div>
              <p className="associate-description">
                Grow earnings with inside sales
              </p>
            </div>
            <div className="associate-box ambassador-associate">
              <img
                className="asso-img"
                src="../../images/partner/Ambassador.png"
              />
              <div className="associate-title">Ambassador Associate</div>
              <p className="associate-description">
                Refer & earn exciting rewards
              </p>
            </div>
          </div>
          <div className="custom-two-column-container">
            <div className="custom-column">
              {/* <img src="../../images/partner/partner-with-us.jpg" /> */}
              <h4 className="sec-heading">
                New Associate – Unlock Exclusive Benefits
              </h4>
              <p>
                Join BuckleTrack and gain access to premium logistics solutions
                tailored to your business needs.
              </p>

              <ul className="associate-list">
                <li>
                  <span className="associate-description">
                    Preferential pricing on Full Truckload (FTL), Part Truckload
                    (PTL), Express Delivery, and Project Transport services.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Dedicated support from our logistics specialists for
                    seamless operations.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Reliable, tech-driven supply chain solutions to ensure
                    optimized freight movement.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Fast, transparent, and hassle-free shipment handling.
                  </span>
                </li>
              </ul>
              <p className="register-txt">
              Become a BuckleTrack partner
                <span
                  className="partner-btn"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  Register now
                </span>{" "}
               
              </p>
            </div>
            <div className="custom-column1">
              <img src="../../images/partner/new-associate.png" />
            </div>
          </div>

          <div className="custom-two-column-container">
            <div className="custom-column1">
              <img src="../../images/partner/Existing-Associate.png" />
            </div>
            <div className="custom-column">
              <h4 className="sec-heading">
                Existing Associate – Earn More with Every Referral
              </h4>
              <p>
                Already working with BuckleTrack? Take advantage of our referral
                program and maximize your earnings
              </p>

              <ul className="associate-list">
                <li>
                  <span className="associate-description">
                    Receive a unique referral code to invite new clients to
                    BuckleTrack.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Earn up to X % of Referral orders per successful referral.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Gain access to our exclusive Ambassador Program and unlock
                    additional incentives.
                  </span>
                </li>
              </ul>
              <p className="register-txt">
              Become a BuckleTrack partner
                <span
                  className="partner-btn"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  Register now
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="custom-two-column-container">
            <div className="custom-column">
              <h4 className="sec-heading">
                DSA Associate – Grow Your Business with BuckleTrack
              </h4>
              <p>As a DSA Associate, you are key in expanding our network.</p>

              <ul className="associate-list">
                <li>
                  <span className="associate-description">
                    Acquisition & renewal payouts for every successful
                    onboarding.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Special pricing and tailored logistics deals for your
                    customers.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Dedicated support for shipment tracking, service inquiries,
                    and business growth strategies.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Advanced training on BuckleTrack's logistics solutions to
                    enhance service delivery.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Access to marketing materials, support guides, and expert
                    resources to accelerate conversions.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Revenue generation from qualified leads referred by your
                    agency.
                  </span>
                </li>
              </ul>
              <p className="register-txt">
              Become a BuckleTrack partner
                <span
                  className="partner-btn"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  Register now
                </span>{" "}
              </p>
            </div>
            <div className="custom-column1">
              <img src="../../images/partner/dsa-partner.png" />
            </div>
          </div>
          <div className="custom-two-column-container">
            <div className="custom-column1">
              <img src="../../images/partner/Ambassador-Partner.png" />
            </div>
            <div className="custom-column">
              <h4 className="sec-heading">
                Ambassador Associate – Refer & Earn Big!
              </h4>
              <p>
                The BuckleTrack Ambassador Associate program is an exciting
                referral opportunity for individuals and businesses to generate
                passive income:
              </p>

              <ul className="associate-list">
                <li>
                  <span className="associate-description">
                    Earn up to{" "}
                    <b>X % of Referral orders per successful referral.</b>
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Join a community of logistics influencers, content creators,
                    and industry professionals.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Monetize your audience by directing traffic to BuckleTrack.
                  </span>
                </li>
                <li>
                  <span className="associate-description">
                    Get rewarded for every qualified lead that converts into a
                    BuckleTrack customer.
                  </span>
                </li>
              </ul>
              <p className="register-txt">
              Become a BuckleTrack partner
                <span
                  className="partner-btn"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  Register now
                </span>{" "}
              </p>
            </div>
          </div>
          {/* <div
            className="cta"
            onClick={(e) => {
              window.open(accountURL, "_blank");
              e.preventDefault();
            }}
          >
            <span>Sign Up Now</span>
          </div> */}
          {/* <div className="contact">
            <p>
             <strong>Start Your Journey with BuckleTrack Today!</strong>!
            </p>
            <p>
            Seize this opportunity to grow your business, enhance logistics solutions, and maximize earnings.
            </p>
            <p>
             <strong>Register now and become a BuckleTrack partner!</strong>!
            </p>
          </div> */}
        </div>
      </div>
      <Modal
        open={isModalOpen}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
        okButtonProps={false}
        cancelButtonProps={false}
        onCancel={() => setIsModalOpen(false)}
      >
        <GetQuote partnerWithUs={true} close={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Partner;
