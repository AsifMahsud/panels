import React from "react";
import "../assets/styles-top.css";
import  Icon from '../assets/Icon.svg'
import  Logo from '../assets/Logo.svg'
import NumTwoIcon from '../assets/progress_num_2.svg'
import NumThreeIcon from '../assets/progress_num_3.svg'
import NumFourIcon from '../assets/progress_num_4.svg'

export const Top = () => {
  return (
    <div className="top">
      <img className="logo" alt="Logo" src={Logo} />
      
      <div className="wizard">
        <div className="item">
          <img className="icon" alt="Left" src={Icon} />
          <div className="text">
            <div className="text-wrapper">Account Type</div>
            <div className="div">Select your account type</div>
          </div>
        </div>
        <div className="item">
          <div className="left-2">
            <div className="icon-wrapper">
              <img className="icon" alt="Icon" src={NumTwoIcon} />
            </div>
            <div className="sep-2" />

          </div>
          <div className="text">
            <div className="text-wrapper-2">Account Details</div>
            <div className="div">Add your personal info</div>
          </div>
        </div>
        <div className="item">
          <div className="left-2">
            <div className="icon-wrapper">
              <img className="icon" alt="Icon" src={NumThreeIcon} />
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
            <img className="icon" alt="Icon" src={NumFourIcon} />
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
  );
};
