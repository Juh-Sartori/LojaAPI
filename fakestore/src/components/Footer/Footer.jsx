import RightFooter from "./RightFooter/RightFooter";
import "./styles.css";

const Footer = () => {
  return (
    <div className="ContainerFooter">
      <div className="Left">
        <div className="LeftThings">
          <h1>GREENMIND</h1>
          <p>We help you find your dream plant</p>
          <div className="SocialMedia">
            <img src="/SocialMedia/facebook.svg" alt="" />
            <img src="/SocialMedia/instagram.svg" alt="" />
            <img src="/SocialMedia/twitter.svg" alt="" />
          </div>
        </div>
        <div className="LeftText">
          <h3> 2023 all Right Reserved Term of use GREENMIND</h3>
        </div>
      </div>
      <div className="Right">
        <div className="InformationRight">
          <RightFooter
            title="Information"
            subtitle1="About"
            subtitle2="Product"
            subtitle3="Blog"
          />
          <RightFooter
            title="Company"
            subtitle1="Community"
            subtitle2="Career"
            subtitle3="Our story"
          />
          <RightFooter
            title="Contact"
            subtitle1="Getting Started"
            subtitle2="Pricing"
            subtitle3="Resources"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
