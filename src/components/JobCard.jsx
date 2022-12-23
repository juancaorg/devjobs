import jobLogo from "../assets/logos/scoot.svg";
import "./JobCard.css";

function JobCard() {
  return (
    <div class="main__job">
      <div className="main__job--logo">
        <img src={jobLogo} alt="" class="main__job--logo-img" />
      </div>
      <div className="main__job--info-wrapper">
        <p class="main__job--posted-at">5h ago</p>
        <p> • </p>
        <p class="main__job--contract">Full Time</p>
      </div>
      <h1 class="main__job--position">Senior Software Engineer</h1>
      <p class="main__job--company">Scoot</p>
      <p class="main__job--location">United Kingdom</p>
    </div>
  );
}

export default JobCard;
