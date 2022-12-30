import Logo from "./Logo";
import ToggleSwitch from "./ToggleSwitch";
import CompanyDetail from "./CompanyDetail";
import "./HeaderDetail.css";

function HeaderDetail({ company, logo, logoBackground, website }) {
  return (
    <header className="header__detail">
      <div className="header__detail--wrapper">
        <Logo />
        <ToggleSwitch />
      </div>
      <CompanyDetail
        company={company}
        logo={logo}
        logoBackground={logoBackground}
        website={website}
      />
    </header>
  );
}

export default HeaderDetail;
