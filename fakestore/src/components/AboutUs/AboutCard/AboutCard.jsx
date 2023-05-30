import "./styles.css";

const AboutCard = ({ title, subtitle, icone }) => {
  const Icone = icone;
  return (
    <div className="AboutUsCards">
      <div>
        <Icone />
      </div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default AboutCard;
