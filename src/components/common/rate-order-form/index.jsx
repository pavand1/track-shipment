import React, { useEffect, useRef, useState } from "react";
import Styles from "./Styles.module.scss";
import emailjs from "@emailjs/browser";
import Loading from "react-fullscreen-loading";

const trackOrderURL = import.meta.env.VITE_TRACK_ORDER_URL;

const RateOrderForm = () => {
  const [orderType, setOrderType] = useState("ftl");
  const [orderDetail, setOrderDetail] = useState("order");
  const [activeTab, setActiveTab] = useState("calc");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [dataSubmitted, setDataSubmitted] = useState(false);

  const [mobileNumber, setMobileNumber] = useState("");
  const [startPin, setStartPin] = useState("");
  const [endPin, setEndPin] = useState("");
  const [weight, setWeight] = useState("");
  const [vehicalType, setVehicalType] = useState("");
  const ref = useRef();
  const form = useRef();

  const handleRadioChange = (e) => {
    if (e?.target?.name === "orderDetail") setOrderDetail(e.target.id);
    else setOrderType(e?.target?.id);
  };

  const handleSendOtp = async () => {
    if (mobileNumber.length !== 10) {
      setError("Mobile number is invalid");
      return;
    }
    setError("");
    const payload = {
      MobileNo: mobileNumber,
      OTPlen: 5,
      UserName: "otpuser@ifb.com",
      password: "123@ifb",
    };
    //call API to send user OTP
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://nol.ifreightbox.net/api/StepVerification/GenerateOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
      setIsOtpSent(true);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleValidateOTP = async () => {
    if (!otp) {
      setError("Enter OTP");
      return;
    }
    setError("");
    const payload = {
      MobileNo: mobileNumber,
      OTP: otp,
    };
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://nol.ifreightbox.net/api/StepVerification/ValidateOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      setIsLoading(false);
      if (data === "Invalid OTP!" || data === "Invalid MobileNo") {
        setError("OTP or Mobile number you entered is invalid");
        setTimeout(() => setError(""), 5000);
        return;
      }
      setError("We got your details, Our representative will call you.");
      setTimeout(() => setError(""), 5000);
      clearStates();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    if (!startPin || !endPin) {
      setError("Start Pin & Destination Pin can not be empty");
      return;
    }
    if (orderType === "ftl" && !vehicalType) {
      setError("Enter Vehical type");
      return;
    }
    if (orderType !== "ftl" && !weight) {
      setError("Enter Weight");
      return;
    }
    setError("");
    setIsLoading(true);
    emailjs
      .sendForm("service_f5bl48g", "template_0i4e6ha", form.current, {
        publicKey: "UwYDiQ1gdS6YNU1C-",
      })
      .then(() => {
        setIsLoading(false);
        setDataSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setError("Something went wrong, please try later!");
        setTimeout(() => setError(""), 5000);
      });
  };

  const clearStates = () => {
    setStartPin("");
    setEndPin("");
    setIsOtpValid(false);
    setVehicalType("");
    setWeight("");
    setMobileNumber("");
    setOtp("");
    setIsOtpSent(false);
    setDataSubmitted(false);
  };

  const handleFormSumbit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (ref.current) ref.current.focus();
  // }, []);
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.heading}>
          <div
            className={`${Styles.calculator} ${
              activeTab === "calc" ? Styles.activeCalculator : ""
            }`}
            onClick={() => setActiveTab("calc")}
          >
            Get Your Freight
          </div>
          {/* <div
            className={`${Styles.order} ${
              activeTab === "order" ? Styles.activeOrder : ""
            }`}
            onClick={(e) => {
              window.open(trackOrderURL, "_blank");
              e.preventDefault();
            }}
          >
            Track Your Order
          </div> */}
        </div>
        {activeTab === "calc" ? (
          <form onSubmit={(e) => handleFormSumbit(e)} ref={form}>
            <div className={Styles.radio}>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="ftl"
                  name="orderType"
                  onChange={handleRadioChange}
                  checked={orderType === "ftl"}
                />
                <label htmlFor="ftl">FTL</label>
              </div>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="ptl"
                  name="orderType"
                  onChange={handleRadioChange}
                  checked={orderType === "ptl"}
                />
                <label htmlFor="ptl">PTL</label>
              </div>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="express"
                  name="orderType"
                  checked={orderType === "express"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="express">EXPRESS</label>
              </div>
            </div>
            <div className={Styles.row}>
              <input
                type="text"
                className={Styles.textBox}
                placeholder="Start Pincode"
                value={startPin}
                name="startPin"
                onChange={(e) => setStartPin(e.target.value)}
              />
              <input
                type="text"
                className={Styles.textBox}
                placeholder="Destination Pincode"
                value={endPin}
                name="endPin"
                onChange={(e) => setEndPin(e.target.value)}
              />
            </div>
            <div className={Styles.row}>
              {orderType === "ftl" ? (
                <input
                  type="text"
                  className={Styles.textBox}
                  placeholder="Vehicle Type"
                  value={vehicalType}
                  name="vehicalType"
                  onChange={(e) => setVehicalType(e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className={Styles.textBox}
                  placeholder="Weight"
                  value={weight}
                  name="weight"
                  onChange={(e) => setWeight(e.target.value)}
                />
              )}
              <div
                className={Styles.button}
                onClick={!dataSubmitted ? handleSubmit : () => {}}
                style={{ cursor: !dataSubmitted ? "pointer" : "not-allowed" }}
              >
                Submit
              </div>
            </div>
            {dataSubmitted && (
              <div className={Styles.row}>
                <input
                  type="text"
                  className={Styles.textBox}
                  ref={ref}
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <div
                  className={Styles.button}
                  onClick={mobileNumber ? handleSendOtp : () => {}}
                  style={{ cursor: mobileNumber ? "pointer" : "not-allowed" }}
                >
                  Get OTP
                </div>
              </div>
            )}
            {isOtpSent && (
              <div className={Styles.row}>
                <input
                  type="text"
                  className={Styles.textBox}
                  placeholder="Enter Valid OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <div
                  className={Styles.button}
                  onClick={isOtpSent ? handleValidateOTP : () => {}}
                  style={{ cursor: isOtpSent ? "pointer" : "not-allowed" }}
                >
                  Validate OTP
                </div>
              </div>
            )}

            {error && <p className={Styles.error}>{error}</p>}

            {/* {isOtpValid && (
              <>
                <div className={Styles.row}>
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Start Pincode"
                  />
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Destination Pincode"
                  />
                </div>
                <div className={Styles.row}>
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Weight"
                  />
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Size (Length/Width/Height)"
                  />
                </div>
                <div className={Styles.row}>
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Item/Package Count"
                  />
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Declared Value"
                  />
                </div>
                <div className={Styles.row}>
                  <input
                    type="text"
                    className={Styles.textBox}
                    placeholder="Item/Package Count"
                  />
                  <button
                    type="text"
                    className={Styles.textBox}
                    placeholder="Declared Value"
                  >
                    Get A Quote
                  </button>
                </div>
              </>
            )} */}
          </form>
        ) : (
          <form onSubmit={(e) => handleFormSumbit(e)}>
            <div className={Styles.radio}>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="order"
                  name="orderDetail"
                  onChange={handleRadioChange}
                  checked={orderDetail === "order"}
                />
                <label htmlFor="order">Order No.</label>
              </div>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="lrn"
                  name="orderDetail"
                  onChange={handleRadioChange}
                  checked={orderDetail === "lrn"}
                />
                <label htmlFor="lrn">LRN No.</label>
              </div>
              <div style={{ flex: "33%" }}>
                <input
                  type="radio"
                  id="trip"
                  name="orderDetail"
                  checked={orderDetail === "trip"}
                  onChange={handleRadioChange}
                />
                <label htmlFor="trip">Trip No.</label>
              </div>
            </div>
            <div className={Styles.row}>
              <input
                type="text"
                className={Styles.orderNoText}
                placeholder="Enter Your Order No."
              />
            </div>
            <div className={Styles.row}>
              <button
                type="submit"
                className={Styles.orderNoButton}
                name="track order"
              >
                Track Your Order
              </button>
            </div>
          </form>
        )}
      </div>
      <Loading
        loading={isLoading}
        background="transparent"
        loaderColor="#3498db"
      />
    </>
  );
};

export default RateOrderForm;
