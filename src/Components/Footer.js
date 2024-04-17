import React, { useState } from "react";
import coral_logo from "../assets/Coral_Academy.png";
import "./Footer.css";
import DownIcon from "../assets/down.png";
import UpIcon from "../assets/up.png";
import {
  CORAL_FEEDBACK_FORM,
  support_mail,
  safety_mail,
  content_guidelines,
  code_of_conduct,
  privacy,
  parents,
  about_us,
  safety,
} from "./utils/constant";

const Footer = () => {
  const [dropdownStates, setDropdownStates] = useState({
    contact: false,
    about: false,
    parents: false,
  });

  const isMobile = window.innerWidth < 599;

  const toggleDropdown = (dropdown) => {
    if (isMobile) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [dropdown]: !prevState[dropdown],
      }));
    }
  };

  return (
    <div className="footer_content">
      <div className="footer_block">
        <div className="footer_heading">
          <p>About Us</p>
          {isMobile ? (
            dropdownStates.about ? (
              <img
                src={UpIcon}
                alt="upicon"
                className="drop-down-icon"
                onClick={() => toggleDropdown("about")}
              />
            ) : (
              <img
                src={DownIcon}
                alt="dropDown"
                className="drop-down-icon"
                onClick={() => toggleDropdown("about")}
              />
            )
          ) : (
            ""
          )}
        </div>
        {(!isMobile || dropdownStates.about) && (
          <div>
            <a href={about_us}> About Coral Academy </a>
            <a href={privacy}> Privacy Policy </a>
            <a href={safety}> Safety </a>
          </div>
        )}
      </div>

      <div className="footer_block">
        <div className="footer_heading">
          <p>Parents & Learners</p>
          {isMobile ? (
            dropdownStates.parents ? (
              <img
                src={UpIcon}
                alt="upicon"
                className="drop-down-icon"
                onClick={() => toggleDropdown("parents")}
              />
            ) : (
              <img
                src={DownIcon}
                alt="dropDown"
                className="drop-down-icon"
                onClick={() => toggleDropdown("parents")}
              />
            )
          ) : (
            ""
          )}
        </div>
        {(!isMobile || dropdownStates.parents) && (
          <div>
            <a href={code_of_conduct}> Code of Conduct </a>
            <a href={content_guidelines}> Content Guidelines </a>
          </div>
        )}
      </div>

      <div className="footer_block">
        <div className="footer_heading">
          <p> Contact us at:</p>
          {isMobile ? (
            dropdownStates.contact ? (
              <img
                src={UpIcon}
                alt="upicon"
                className="drop-down-icon"
                onClick={() => toggleDropdown("contact")}
              />
            ) : (
              <img
                src={DownIcon}
                alt="dropDown"
                className="drop-down-icon"
                onClick={() => toggleDropdown("contact")}
              />
            )
          ) : (
            ""
          )}
        </div>
        {(!isMobile || dropdownStates.contact) && (
          <div>
            <a
              href="mailto:support@coralacademy.com"
              id="coral_email"
              className="footer_email"
            >
              {support_mail}
            </a>
            <a
              href="mailto:safety@coralacademy.com"
              id="coral_safety_email"
              className="footer_email"
            >
              {safety_mail}
            </a>
            <a> +91 9988776655</a>
          </div>
        )}
      </div>

      <div className="footer_logo">
        <img src={coral_logo} alt="coral_logo" />
        <p>
          Please share in detail how we can improve your overall experience
          &nbsp;
          <a href={CORAL_FEEDBACK_FORM}>here</a>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
