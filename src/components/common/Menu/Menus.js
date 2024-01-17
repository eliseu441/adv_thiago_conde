import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li className="">
        <Link to="/">Home</Link>
        
      </li>
      <li>
        <Link to="/about">NOSSO TRABALHO</Link>
      </li>
      
     
    </ul>
  );
};

export default Menus;
