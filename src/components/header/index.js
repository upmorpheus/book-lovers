import React from "react";
import Logo from "../../assets/logo.png";
import './Header.scss';

const Header = () => {
    return (
      <div className="header">
        <div className="baner">
          <img className="logo" src={Logo} />
          <div className="auth">
            <a href="/login" className="">Login</a>
            <a>|</a>
            <a href="/register" className="">Register</a>
          </div>
        </div>

        <div className="menu">
          <a href="/home">Home</a>
          <a href="/books">Books</a>
          <a href="/books">Management</a>
          <a href="/users">Users</a>
        </div>
      </div>
    )
}

export default Header;