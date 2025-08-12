import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import { Link } from "react-scroll";
import white_menu_burger from "../../assets/white-menu-burger.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 700 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
     <Link to="hero" smooth={true} offset={0} duration={500}>
      <img  src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className={menuOpen ? "" : "mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="programs" smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to="about" smooth={true} offset={-80} duration={500}>About</Link></li>
        <li><Link to="plans-container" smooth={true} offset={-200} duration={500}>Plans</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact</Link></li>
      </ul>
      <img src={white_menu_burger} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
