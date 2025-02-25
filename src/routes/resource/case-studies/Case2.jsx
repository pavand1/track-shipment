import { useRef, useEffect } from "react";
import HomeComponent from "../../../components/home";

const Case2 = () => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <HomeComponent />
      <div className="blog" ref={ref}>
        <div className="section-blog">
          <img
            className="blog-featured-img"
            src="../../images/blog/b2b-logistics.png"
          />
          <h1>Sustainable & Secure Packaging by BuckleTrack</h1>
          <p className="specialHeading">Proble Statement</p>
          <p>
            A giant logistics provider faced challenges in protecting products
            during transit and streamlining handling processes. Existing
            packaging solutions were inefficient, leading to increased waste,
            higher costs, and sustainability concerns.
          </p>
          <p className="specialHeading">Solution</p>
          <p>
            Our team designed tailored packaging solutions optimized for product
            protection, handling efficiency, and sustainability. BuckleTrack
            ensured the packaging met operational and environmental goals using
            advanced materials and innovative designs.
          </p>

          <h2 className="blog-head">Benefits</h2>
          <p>
            <strong>1. Enhanced product protection during transit.</strong>
          </p>
          <p>
            <strong>2. Streamlined handling processes.</strong>
          </p>
          <p>
            <strong>3. Reduced packaging waste.</strong>
          </p>
          <p>
            <strong>4. Improved cost-effectiveness.</strong>
          </p>
          <p>
            <strong>5. Sustainable packaging solutions.</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Case2;
