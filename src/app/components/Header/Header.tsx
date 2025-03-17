import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">RECYCLESOUND</h1>
        <nav className="nav">
          <ul>
            <li>Obec</li>
            <li>Občan</li>
            <li>Firma</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;