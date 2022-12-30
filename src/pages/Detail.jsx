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
    <div className="detail">
      <h1>Hello!</h1>
      <p>{company}</p>
      <p>{logo}</p>
      <p>{logoBackground}</p>
      <p>{position}</p>
      <p>{postedAt}</p>
      <p>{contract}</p>
      <p>{location}</p>
      <p>{website}</p>
      <p>{apply}</p>
      <p>{description}</p>
      <p>{requirements.content}</p>
      <p>{role.items}</p>
    </div>
  );
}

export default Detail;
