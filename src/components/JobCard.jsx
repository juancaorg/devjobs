import { Link } from "react-router-dom";

import "./JobCard.css";

function JobCard({
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
  linkTo,
}) {
  return (
    <div className="main__job">
      <div
        className="main__job--logo"
        style={{ backgroundColor: logoBackground }}
      >
        <img
          src={logo}
          alt={company + " logo"}
          className="main__job--logo-img"
        />
      </div>
      <div className="main__job--info-wrapper">
        <p className="main__job--posted-at">{postedAt}</p>
        <p> • </p>
        <p className="main__job--contract">{contract}</p>
      </div>
      <Link className={"main__job--link"} to={linkTo}>
        <h1 className="main__job--position">{position}</h1>
      </Link>
      <p className="main__job--company">{company}</p>
      <p className="main__job--location">{location}</p>
    </div>
  );
}

export default JobCard;
