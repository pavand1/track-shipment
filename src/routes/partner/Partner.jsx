import HomeComponent from "../../components/home";
import "./style.css";

const accountURL = import.meta.env.VITE_ACCOUNT_URL;
const Partner = () => {
  return (
    <>
      <HomeComponent />
      <div className="partner">
        <div className="container">
          <h2 className="mainHeading">Partner with Us</h2>
          <p>
            Our program for delivery partners allows agents to join us to do
            both pick-up and delivery services across India. It is a great
            opportunity to earn a sustainable income flexibly and provide our
            customers the best experience.
          </p>
          <p>
            This program has enabled our partners to reach across India. To
            start working with India’s integrated logistics company, join us and
            start earning today.
          </p>
          <p>
            Sign up with your Aadhaar, bank account details and start earning!
          </p>
          <div
            className="cta"
            onClick={(e) => {
              window.open(accountURL, "_blank");
              e.preventDefault();
            }}
          >
            <span>Sign Up Now</span>
          </div>
          <div className="contact">
            <p>
              For more information, call on the number below to start delivering
              with <strong>BuckleTrack</strong>!
            </p>
            <p>
              <strong>Mobile:</strong> <span><a style={{color: "#093966"}}href="tel:7039004442">7039004442</a></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
