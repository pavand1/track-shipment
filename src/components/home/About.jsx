import Styles from "./Home.module.scss";

const About = () => {
  return (
    <>
      <div className={Styles.doodle}>
        <img src="../../images/Home/Doodle Background-1.svg" alt="" />
        <div
          className={Styles.subContainer}
          style={{
            flexDirection: "column",
            gap: "36px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>About BuckleTrack</h1>
          <div className={Styles.about}>
            <div className={Styles.info}>
              <div className={Styles.text}>
              BuckleTrack, transport and supply chain solutions meets top-notch technology to drive exceptional customer service to shape the future of transportation services.
Our aim is to revolutionize the transportation outsourcing process by strategically leveraging technology, thus enhancing this vital aspect of the supply chain. We are committed to offering our clients increased efficiencies in planning and execution, enabling them to optimize their transport operations while concentrating on their core business activities. At the same time, we handle and execute the complex nuances of their transport requirements. Our objective is to provide an exceptional customer experience, heralding a new era in logistics defined by technological innovations that foster efficiency, accuracy, and expansion. the printing and
              </div>
              <div className={Styles.button}>Read More</div>
            </div>
            <div className={Styles.icon}>
              <img src="../../images/Home/about/about.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
