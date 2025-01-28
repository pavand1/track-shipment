import Styles from "../home/Home.module.scss"
import HomeComponent from "../../components/home";
import CpWhyBuckle from "../../components/cp-why-buckle/CpWhyBuckle";
import CpServicesComp from "../../components/cp-services-comp/CpServicesComp";
import { useEffect, useRef } from "react";

const Services = () => {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
          }
    },[])
    return <div className={Styles.container} ref={ref}>
        <HomeComponent />
        <CpWhyBuckle />
        <CpServicesComp />
    </div>
}

export default Services;