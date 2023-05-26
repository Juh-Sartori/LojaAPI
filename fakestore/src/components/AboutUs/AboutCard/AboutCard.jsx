import "./styles.css";

const AboutCard = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="cardss">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default AboutCard;
