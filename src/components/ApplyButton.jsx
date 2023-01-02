import "./ApplyButton.css";

function ApplyButton({ apply }) {
  return (
    <a href={apply} rel="noopener" target="_blank" className="apply__button">
      Apply Now
    </a>
  );
}

export default ApplyButton;
