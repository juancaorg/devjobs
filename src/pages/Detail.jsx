import HeaderDetail from "../components/HeaderDetail";
import JobDetail from "../components/JobDetail";
import ApplyDetail from "../components/ApplyDetail";
import "./Detail.css";

function Detail({
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
  website,
  apply,
  description,
  requirements,
  role,
}) {
  return (
    <div className="page__detail">
      <HeaderDetail
        company={company}
        logo={logo}
        logoBackground={logoBackground}
        website={website}
      />
      <JobDetail
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
        apply={apply}
        description={description}
        requirements={requirements}
        role={role}
      />
      <ApplyDetail company={company} position={position} apply={apply} />
    </div>
  );
}

export default Detail;
