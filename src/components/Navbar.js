import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   return (
      <div>
         <nav>
            <div className="navbar-container">
               {/* TROY ZADA HEADER/LOGO */}
               <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  TZ
               </Link>

               {/* FOR MOBILE VIEW, HAVE 3 BARS ICON WITH NAVBAR ITEMS BELOW */}
               <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
               </div>

               {/* LIST OF NAVBAR ITEMS */}
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                     <Link
                        to="/"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        {/* HOME PAGE, ABOUT ME */}
                        HOME
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/resume"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        {/* BUTTON TO DOWNLOAD RESUME, EDUCATION, AWARDS */}
                        RESUME
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/skills"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        {/* PROGRESS BARS OF VARIOUS SOFT/HARD SKILLS */}
                        SKILLS
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/work"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        {/* WORK AND PROJECTS */}
                        EXPERIENCE
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/awards"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        {/* POSTS ABOUT VARIOUS STUFF */}
                        {/* E.G. FIRST POST ABOUT "CREATING THIS WEBSITE" */}
                        BLOG
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        to="/contact"
                        className="nav-links"
                        onClick={closeMobileMenu}
                     >
                        CONTACT
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}

export default Navbar;
