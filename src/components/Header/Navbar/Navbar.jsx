import React from "react";
import './navbar.css';
import  logo  from '../../../assets/MOVIER.png';

const Navbar = () => {
  return (
    <div className="navbar__container">
      <a href="#"><img src={logo} alt="logo" /></a>
      <nav className="navbar">
        <ul>
            <li><a href="#Lupa"><i class="uil uil-search"></i></a> </li>
            <li><a href="#Home">Home</a> </li>
            <li><a href="#Trending">Trending</a> </li>
            <li><a href="#Campana"><i class="uil uil-bell"></i></a> </li>
            <li><a href="#Cuenta"><i class="uil uil-user"></i></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
