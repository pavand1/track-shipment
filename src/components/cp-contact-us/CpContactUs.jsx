import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./cpContacUs.module.scss";
import { contactInfo } from "./CpContactUs_data";
import { mockData } from "../cp-getin-touch/CpGetInTouch_data";
import Loading from "react-fullscreen-loading";

const CpContactUs = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone1, setPhone1] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message || !phone1) {
      setError("All fields are required, except the secondary phone number");
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm("service_f5bl48g", "template_agxy0jb", form.current, {
        publicKey: "UwYDiQ1gdS6YNU1C-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setError("Our Expert will get in touch with you shortly");
          setName("");
          setEmail("");
          setMessage("");
          setPhone1("");
          setCity("");
          setIsLoading(false);
          setTimeout(() => {
            setError("");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>Contact Us</h2>
        <div className={styles.about}>
          <div className={styles.column}>
            <form
              className={styles.form}
              ref={form}
              onSubmit={handleSendEmail}
              style={{ position: "relative" }}
            >
              <h2 className={styles.heading}>{mockData.form.heading}</h2>
              <div className={`${styles.formGroup} ${styles.formGroupNew}`}>
                <input
                  type={"text"}
                  id={"name"}
                  name={"name"}
                  placeholder={"Name"}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupNew}`}>
                <input
                  type={"email"}
                  id={"email"}
                  name={"email"}
                  placeholder={"email"}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupNew}`}>
                <input
                  type={"text"}
                  id={"phone1"}
                  name={"phone"}
                  placeholder={"primary phone number"}
                  required
                  value={phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupNew}`}>
                <input
                  type={"text"}
                  id={"city"}
                  name={"phone 2"}
                  placeholder={"City"}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupNew}`}>
                <textarea
                  id={"message"}
                  name={"message"}
                  placeholder={"message"}
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                {mockData.form.submitButtonText}
              </button>
              {error && <p className={styles.error}>{error}</p>}
            </form>
          </div>
          <div className={styles.column}>
            <div className={styles.description}>
              <div className={styles.contactInfo}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7540.05365420838!2d72.863317!3d19.106479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c948cafa8117%3A0x86293178cf902e04!2sKSM%20Marine%20Logistics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1738078220533!5m2!1sen!2sin"
                  width="100%"
                  height="370"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
                {/* <div className={styles.contactItem}>
                  <img src={contactInfo.address.icon} alt="Location" />
                  <span>{contactInfo.address.text}</span>
                </div>
                <div className={styles.contactItem}>
                  <img src={contactInfo.email.icon} alt="Email" />
                  <span>{contactInfo.email.text}</span>
                </div>
                <div className={styles.contactItem}>
                  <img src={contactInfo.phone.icon} alt="Phone" />
                  <span>{contactInfo.phone.text}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Loading
          loading={isLoading}
          background="transparent"
          loaderColor="#3498db"
        />

        <div className={styles.contactInfo1}>
          <div className={styles.contactItem1}>
            <img src={contactInfo.address.icon} alt="Location" />
            <span>{contactInfo.address.text}</span>
          </div>
          <div className={styles.contactItem1}>
            <img src={contactInfo.email.icon} alt="Email" />
            <span>{contactInfo.email.text}</span>
          </div>
          <div className={styles.contactItem1}>
            <img src={contactInfo.phone.icon} alt="Phone" />
            <span>{contactInfo.phone.text}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CpContactUs;
