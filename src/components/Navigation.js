import React from "react";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="#">
        <img src="img/logo.png" alt="Logo" className="logo" />
      </a>
      <ul>
        <li>
          <a href="#">Loja</a>
        </li>
        <li>
          <a href="#">Mac</a>
        </li>
        <li>
          <a href="#">iPad</a>
        </li>
        <li>
          <a href="#">iPhone</a>
        </li>
        <li>
          <a href="#">Watch</a>
        </li>
        <li>
          <a href="#">Airpods</a>
        </li>
        <li>
          <a href="#">TV e Casa</a>
        </li>
        <li>
          <a href="#">Entretenimento</a>
        </li>
        <li>
          <a href="#">Acessórios</a>
        </li>
        <li>
          <a href="#">Suporte</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
