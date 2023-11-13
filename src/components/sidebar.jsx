import React from "react";
import "../assets/styles.css";

const Sidebar = () => {
  return (
    <div className="left">
      <img className="effects" alt="Effects" src="effects.png" />
      <div className="top">
        <img className="logo" alt="Logo" src="logo.svg" />
        <div className="wizard">
          <div className="item">
            <img className="img" alt="Left" src="left.svg" />
            <div className="text">
              <div className="text-wrapper">Account Type</div>
              <div className="div">Select your account type</div>
            </div>
          </div>
          <div className="item">
            <div className="div-2">
              <div className="icon-wrapper">
                <img className="icon" alt="Icon" src="icon.svg" />
              </div>
              <img className="sep" alt="Sep" src="sep.svg" />
            </div>
            <div className="text">
              <div className="text-wrapper-2">Account Details</div>
              <div className="div">Add your personal info</div>
            </div>
          </div>
          <div className="item">
            <div className="div-2">
              <div className="icon-wrapper">
                <img className="icon" alt="Icon" src="image.svg" />
              </div>
              <div className="sep-2" />
            </div>
            <div className="text">
              <div className="frame">
                <div className="text-wrapper-3">Creator Info</div>
              </div>
              <div className="div">Setup your business details</div>
            </div>
          </div>
          <div className="item">
            <div className="icon-wrapper">
              <img className="icon" alt="Icon" src="icon-2.svg" />
            </div>
            <div className="text-2">
              <div className="frame">
                <div className="text-wrapper-4">Completed</div>
              </div>
              <div className="div">Your account is created</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="text-wrapper-5">Terms</div>
        <div className="text-wrapper-5">Plans</div>
        <div className="text-wrapper-5">Contact Us</div>
      </footer>
    </div>
  );
};
export default Sidebar;