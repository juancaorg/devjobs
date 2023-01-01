import "./CompanyDetail.css";

function CompanyDetail({ company, logo, logoBackground, website }) {
  return (
    <div className="company__detail">
      <div
        className="company__detail--logo"
        style={{ backgroundColor: logoBackground }}
      >
        <img
          src={logo}
          alt={company + " logo"}
          className="company__detail--logo-img"
        />
      </div>
      <div className="company__detail--all-wrapper">
        <div className="company__detail--info-wrapper">
          <h1 className="company__detail--name">{company}</h1>
          <p className="company__detail--website">
            {company.split(" ").join("").toLowerCase() + ".com"}
          </p>
        </div>
        <a
          href={website}
          rel="noopener"
          target="_blank"
          className="company__detail--link"
        >
          Company Site
        </a>
      </div>
    </div>
  );
}

export default CompanyDetail;
