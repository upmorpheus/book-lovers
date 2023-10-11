import React from "react";
import Logo from "../../assets/logo.png";
import Logo1 from "../../assets/logo1.png";
import './Header.scss';

const Header = () => {
    return (
      <div className="header">
        <div className="baner">
          <img className="logo" src={Logo} />
          <img className="logo" src={Logo1} />
          <div className="auth">
            <a href="/login" className="">Login</a>
            <a>|</a>
            <a href="/register" className="">Register</a>
          </div>
        </div>

        <div className="menu">
          <a href="/">HOME</a>
          <a href="/books">BOOKS</a>
          <a href="/books">MANAGEMENT</a>
          <a href="/users">USERS</a>
        </div>
      </div>
    )
}

export default Header;