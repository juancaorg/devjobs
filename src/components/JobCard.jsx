import jobLogo from "../assets/logos/scoot.svg";
import "./JobCard.css";

function JobCard() {
  return (
    <div class="main__job">
      <img src={jobLogo} alt="" class="main__job--logo" />
      <p class="main__job--posted-at">5h ago</p>
      <p class="main__job--contract">Full Time</p>
      <h1 class="main__job--position">Senior Software Engineer</h1>
      <p class="main__job--company">Scoot</p>
      <p class="main__job--location">United Kingdom</p>
    </div>
  );
}

export default JobCard;
