import jobLogo from "../assets/logos/scoot.svg";
import "./JobCard.css";

function JobCard() {
  return (
    <div className="main__job">
      <div className="main__job--logo">
        <img src={jobLogo} alt="" className="main__job--logo-img" />
      </div>
      <div className="main__job--info-wrapper">
        <p className="main__job--posted-at">5h ago</p>
        <p> • </p>
        <p className="main__job--contract">Full Time</p>
      </div>
      <h1 className="main__job--position">Senior Software Engineer</h1>
      <p className="main__job--company">Scoot</p>
      <p className="main__job--location">United Kingdom</p>
    </div>
  );
}

export default JobCard;
