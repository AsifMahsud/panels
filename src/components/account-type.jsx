import React from "react";
import  ArrowRight  from "./arrow-right";
import  Briefcase  from "./briefcase";
import  UserSquare  from "./usersquare";
import "../assets/styles.css";

export const AccountType = () => {
  return (
    <div className="right">
      <div className="choose-account-type">
        <div className="title">
          <div className="text-wrapper">Choose an account type</div>
          <p className="if-you-need-more">
            <span className="span">If you need more info, please visit our </span>
            <span className="text-wrapper-2">help page.</span>
          </p>
        </div>
        <div className="clickables">
          <div className="account-types">
            <div className="card">
              <div className="inner">
                <UserSquare className="icon-instance-node" />
                <div className="content">
                  <div className="div">Creator</div>
                  <div className="text-wrapper-3">Sign-up as a creator</div>
                </div>
              </div>
            </div>
            <div className="inner-wrapper">
              <div className="inner">
                <Briefcase className="icon-instance-node" />
                <div className="content">
                  <div className="div">Agency</div>
                  <div className="text-wrapper-3">Sign-up as an agency</div>
                </div>
              </div>
            </div>
          </div>
          <button className="button">
            <div className="large">Continue</div>
            <ArrowRight className="arrow-right" color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
