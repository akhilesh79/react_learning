import { useState } from "react";
import { LOGO_URI } from "../utils/constants";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  const callLoginUser = () => {
    if (loginButton === "Login") {
      setLoginButton("Logout");
    } else {
      setLoginButton("Login");
    }
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
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="#"><i class="fa fa-cart-plus" aria-hidden="true"></i></a>
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
