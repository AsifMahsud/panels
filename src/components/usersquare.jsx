import React from "react";
import "../assets/styles.css";
import UsersThumb from '../assets/users.png'
const UserSquare = () => {
  return (
    <div className="user-square-screen">
      <img className="users" alt="Users" src={UsersThumb} />
    </div>
  );
};
export default UserSquare;