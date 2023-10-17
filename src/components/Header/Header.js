import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="flex-row">
      <h1>Michie Willman</h1>
      <h2>Web Developer</h2>
      {props.children}
    </header>
  );
}

export default Header;
