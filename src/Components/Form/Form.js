import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
const Form = () => {
  return (
    <div className="login-form">
      <div className="form-title">Login</div>
      <div className="form-input">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="form-input">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="captcha">
        <label htmlFor="captcha">Enter Captcha</label>
        <div className="preview"></div>
        <div className="captcha-form">
          <input
            type="text"
            id="captcha-form"
            plcaeholder="Enter captcha text"
          />
          <button className="captcha-refresh">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </button>
        </div>
      </div>
      <div className="form-input">
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Form;
