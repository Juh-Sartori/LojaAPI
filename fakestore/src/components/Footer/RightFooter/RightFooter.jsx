import "./styles.css";

const RightFooter = (props) => {
  const { title, subtitle1, subtitle2, subtitle3 } = props;
  return (
    <div className="textRight">
      <h1>{title}</h1>
      <h2>{subtitle1}</h2>
      <h2>{subtitle2}</h2>
      <h2>{subtitle3}</h2>
    </div>
  );
};

export default RightFooter;
