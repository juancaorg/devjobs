import ApplyButton from "./ApplyButton";
import "./JobDetail.css";

function JobDetail({
  position,
  postedAt,
  contract,
  location,
  apply,
  description,
  requirements,
  role,
  className,
}) {
  return (
    <div className={`job__detail ${className}`}>
      <div className="job__detail--apply-wrapper">
        <div className="job__detail--info-wrapper">
          <div className="job__detail--posted-wrapper">
            <p className="job__detail--posted-at">{postedAt}</p>
            <p> • </p>
            <p className="job__detail--contract">{contract}</p>
          </div>
          <h1 className="job__detail--position">{position}</h1>
          <p className="job__detail--location">{location}</p>
        </div>
        <ApplyButton apply={apply} className="job__detail--apply" />
      </div>
      <p className="job__detail--description">{description}</p>
      <h2>Requirements</h2>
      <p className="job__detail--requirements-content">
        {requirements.content}
      </p>
      <ul className="job__detail--requirements-items">
        {/* Render a collection of elements inside a component: 
        Reference:
        https://www.digitalocean.com/community/conceptual-articles/understanding-how-to-render-arrays-in-react#rendering-a-collection-of-elements-inside-a-component
      */}
        {requirements.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>What You Will Do</h2>
      <p className="job__detail--role-content">{role.content}</p>
      <ol className="job__detail--role-items">
        {role.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default JobDetail;
