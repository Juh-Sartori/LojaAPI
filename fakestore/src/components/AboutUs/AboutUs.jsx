import AboutCard from "./AboutCard/AboutCard";
import { TbPlant } from "react-icons/tb";
import { BsTelephoneOutbound, BsBoxSeam } from "react-icons/bs";
import TitleSection from "../TitleSection/TitleSection";

import "./styles.css";

const AboutUs = () => {
  return (
    <div className="containerAboutUs">
      <div className="text">
        <TitleSection
          title="About us"
          subtitle="Order now and appreciate the beauty of nature"
        />
        {/* <h1>About us</h1>
        <p>Order now and appreciate the beauty of nature</p> */}
      </div>
      <div className="cards">
        {/* <div className="iconPlant">
          <TbPlant />
        </div>  */}
        <AboutCard
          icone={TbPlant}
          title="Large Assortment"
          subtitle="we offer many different types of products with fewer variations in each
        category."
        />

        <AboutCard
          icone={BsTelephoneOutbound}
          title="Fast & Free Shipping"
          subtitle="4-day or less delivery time, free shipping and an expedited delivery option."
        />

        <AboutCard
          icone={BsBoxSeam}
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
