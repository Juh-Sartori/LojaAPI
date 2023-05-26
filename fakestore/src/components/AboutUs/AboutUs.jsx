import AboutCard from "./AboutCard/AboutCard";
import { TbPlant } from "react-icons/tb";
import { BsTelephoneOutbound, BsBoxSeam } from "react-icons/bs";

import "./styles.css";

const AboutUs = () => {
  return (
    <div className="containerAboutUs">
      <h1>About us</h1>
      Order now and appreciate the beauty of nature
      <div className="cards">
        <TbPlant />
        <AboutCard
          title="Large Assortment"
          subtitle="we offer many different types of products with fewer variations in each
        category."
        />
        <BsTelephoneOutbound />
        <AboutCard
          title="Fast & Free Shipping"
          subtitle="4-day or less delivery time, free shipping and an expedited delivery option."
        />
        <BsBoxSeam />
        <AboutCard
          title="24/7 Support"
          subtitle="answers to any business related inquiry 24/7 and in real-time."
        />
      </div>
      {/* <div className="boxCenter">

            </div>

            <div className="boxRight">

            </div> */}
    </div>
  );
};

export default AboutUs;
