import ApplyButton from "./ApplyButton";
import "./ApplyDetail.css";

function ApplyDetail({ company, position, apply, className }) {
  return (
    <div className={`apply__detail ${className}`}>
      <div className="apply__detail--wrapper">
        <h1 className="apply__detail--position">{position}</h1>
        <p className="apply__detail--company">{company}</p>
      </div>
      <ApplyButton apply={apply} className={"apply__detail--button"} />
    </div>
  );
}

export default ApplyDetail;
