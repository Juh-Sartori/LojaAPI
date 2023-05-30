import "./styles.css";

const TitleSection = ({ title, subtitle }) => {
  return (
    <div id="text">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default TitleSection;
