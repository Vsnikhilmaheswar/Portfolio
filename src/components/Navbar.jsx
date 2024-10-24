import React from "react";

function  Navbar(){

    return(<nav className="navbar">
    <a href="/" className="navbar_title">Portfolio</a>
    <div className="navbar_menu">
        <ul className ="navbar_menuitems">
            <li> <a href="#About">About</a></li>
            <li> <a href="#Experience">Experience</a></li>
            <li> <a href="#project">Project</a></li>
            <li> <a href="#contact">Contact</a></li>
        </ul>
    </div>
    </nav>)
}

export default Navbar