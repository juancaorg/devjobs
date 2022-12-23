import "./JobCard.css";

function JobCard({
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}) {
  return (
    <div className="main__job">
      <div
        className="main__job--logo"
        style={{ backgroundColor: logoBackground }}
      >
        <img src={logo} alt="" className="main__job--logo-img" />
      </div>
      <div className="main__job--info-wrapper">
        <p className="main__job--posted-at">{postedAt}</p>
        <p> • </p>
        <p className="main__job--contract">{contract}</p>
      </div>
      <h1 className="main__job--position">{position}</h1>
      <p className="main__job--company">{company}</p>
      <p className="main__job--location">{location}</p>
    </div>
  );
}

export default JobCard;
