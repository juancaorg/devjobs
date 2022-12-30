import { Link } from "react-router-dom";

import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="header__logo">
      devjobs
    </Link>
  );
}

export default Logo;
