import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

import { LOGO_URI } from "../utils/constants";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  const navigate = useNavigate();

  const callLoginUser = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URI}></img>
        <h3>Akhilesh Da Dhaba</h3>
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li className="nav-item">
            {/*to link to other page we should not use anchor tag , because anchor tag will reload the whole page */}
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <a href="#">Cart</a>
          </li>
          <button className="login-button" onClick={() => callLoginUser()}>
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
