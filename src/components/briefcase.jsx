import React from "react";
import "../assets/styles.css";
import Education from '../assets/briefcase.svg'

 const Briefcase = () => {
  return (
    <div className="briefcase-screen">
      <img className="education" alt="Education" src={Education} />
    </div>
  );
};
export default Briefcase;