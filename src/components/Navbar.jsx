
import React from 'react';
import './Navbar.css'

const Navbar = () => {
return (
    <div>
        {/*  animated nav bar */}
        <div className="navBar" id="nv">
            <nav>
            <i className="bi bi-justify" onclick="alert('heelo')" id="hamMenu" />
            <ul>
                {/* main nav section */}
                <li>
                <a href="?page=home">HOME </a>
                </li>
                <li>
                <a href="?page=menu">MENU </a>
                </li>
                <li>
                <a href="?page=ourstory">OUR STORY</a>
                </li>
                <li>
                <a href="?page=contactus">CONTACT US </a>
                </li>
                {/* icons social and phone */}
                <li className="socialIcon">
                <a href="call:111-111-111">
                    <i className="bi bi-telephone-forward" />
                </a>
                </li>
                <li className="socialIcon">
                <a href="instgram.com/example">
                    <i className="bi bi-instagram" />
                </a>
                </li>
                <li className="socialIcon">
                <a href="mailto:example@example.com">
                    <i className="bi bi-envelope-fill" />
                </a>
                </li>
            </ul>
            </nav>
        </div>
        <div className="header"></div>

    </div>
)
}

export default Navbar

