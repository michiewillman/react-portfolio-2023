import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="flex-row">
      <div className="headerLogo">
        <h1>Michie Willman</h1>
        <p>Web Developer</p>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
