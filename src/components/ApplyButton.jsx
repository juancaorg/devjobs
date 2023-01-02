import "./ApplyButton.css";

function ApplyButton({ apply, className }) {
  return (
    <a
      href={apply}
      rel="noopener"
      target="_blank"
      className={`apply__button ${className}`}
    >
      Apply Now
    </a>
  );
}

export default ApplyButton;
