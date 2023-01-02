import ApplyButton from "./ApplyButton";
import "./ApplyDetail.css";

function ApplyDetail({ company, position, apply }) {
  return (
    <>
      <div className="apply__detail--wrapper">
        <h1 className="apply__detail--position">{position}</h1>
        <p className="apply__detail--company">{company}</p>
      </div>
      {/* <ApplyButton apply={apply} /> */}
    </>
  );
}

export default ApplyDetail;
