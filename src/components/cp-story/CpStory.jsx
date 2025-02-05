import { useEffect } from "react";
import Aos from "aos";
import styles from "./cpStory.module.scss";
import { mockData } from "./CpStory_data";

const CpStory = () => {
  useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.mainHeading}>Why Choose BuckleTrack?</h2>
        <div className={styles.about}>
          <div className={styles.column} data-aos="fade-right">
            <div className={styles.description}>
              <p>{"Choosing BuckleTrack means partnering with a logistics provider that is committed to technological innovation and superior service. Here’s why we stand out differently:"}</p>
             <ul className={styles.list}>
              <li><b>{"Technological Leadership:"}</b> {"We are at the forefront of bringing cutting-edge tech to logistics operations. Our solutions tap into the newest breakthroughs to boost productivity, precision, and oversight."}</li>
              <li><b>{"Data-Driven Excellence:"}</b> :{"We use data analysis and machine learning to make smart choices and provide useful insights. This approach based on data ensures top-notch performance and keeps things getting better."}</li>
              <li><b>{"Seamless Integration:"}</b> :{"Our tech fits right in with your current systems giving you a smooth and straightforward logistics experience. We team up with you to make sure our solutions line up with what your business aims to achieve."}</li>
              <li><b>{"Future-Ready Solutions:"}</b> :{"We aim to stay one step ahead of industry shifts and tech breakthroughs. Our drive to break new ground means we offer solutions that are not just cutting-edge and spot-on, but also prepare for tomorrow's challenges."}</li>
             </ul>
            </div>
          </div>
          <div className={styles.column} data-aos="fade-left">
            <img
              src={mockData.imageSrc}
              alt={mockData.imageAlt}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CpStory;
