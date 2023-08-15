import React from 'react';
import smallLogo from "../res/logo-sahyog-small.png";
import '../style/navbar.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import navLinks from "../data/navbar";

export default function Navbar() {
    // setting admin state
    let [admin, setAdmin] = React.useState(false);

    const navigate = useNavigate();
    let iterate = 0;
    const showNavBar = () => {
        document.querySelector(".nav-links").classList.toggle("active");
    }

    const dropdownTemplate = [
        `
        <div className="dropdown">
            <li>
                {ele.name}
            </li>
            <div className="dropdown-content">
        `, `
                <div onClick={() => navigate("/about-jalaram-bappa")}>About Jalaram Bappa</div>
                <div onClick={() => navigate("/about-temple")}>About Temple</div>
            </div>
        </div>
    `];

    function getNavLinks(i) {
        // console.log(navLinks[0]);
        let navLinksArray = navLinks[0];
        let dropdownNames = [];
        let dropdownLinks = [];
        navLinksArray.map((link) => {
            if (link[0][0] == i) {
                if (link[0][1] == "0" && link[0][2] == "0") {
                    dropdownNames.push(link[1]);
                }
                else {
                    dropdownLinks.push(link[2]);
                    dropdownNames.push(link[1]);
                }
            }
        });
        console.log(dropdownNames.slice(1));
        console.log(dropdownLinks);
        return `
        <div className="dropdown">
            <li>
                <p>${dropdownNames[0]}</p>
                {dropdownNames.slice(1)}
            </li>
            <div className="dropdown-content">
                ${dropdownNames.map((name) => {
            formLink(dropdownLinks[iterate], name);
            iterate += 1;
        })}
            </div>
        </div>
        `
        // console.log(template);
    }

    function formLink(link, name) {
        let formlink = `<div onClick={() => navigate(${link})}>${name}</div>`;
        return formlink;
    }

    return (
        <>
            <section className="nav">
                <nav>
                    <div className="nav-items">
                        <img src={smallLogo} className="logo"></img>
                        <div className="nav-links">
                            <li>
                                <div onClick={() => navigate("/")}>Home</div>
                            </li>

                            <div className="dropdown">
                                <li>
                                    <p href="#main">About</p>
                                </li>
                                <div className="dropdown-content">
                                    <div onClick={() => navigate("/vision-and-mission")}>Our Values and Mission</div>
                                    <div onClick={() => navigate("/values")}>Our Values</div>
                                    <div onClick={() => navigate("/our-trestees")}>Our Trustees</div>
                                    <div onClick={() => navigate("/how-we-began")}>How we began</div>
                                    <div onClick={() => navigate("/photo-gallery")}>Photo Gallery</div>
                                    <div onClick={() => navigate("/our-team")}>Our Team</div>
                                    <div onClick={() => navigate("/our-partners-and-supporters")}>Our Partners and Supporters</div>
                                    <div onClick={() => navigate("/stories-of-change")}>Stories of Change</div>
                                    {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                                </div>
                            </div>

                            <div className="dropdown">
                                <li>
                                    <p href="#main">Programs</p>
                                </li>
                                <div className="dropdown-content">
                                    <div onClick={() => navigate("/sahyog-sangharsh")}>Sahyog Sangharsh</div>
                                    <div onClick={() => navigate("/sahyog-roshan")}>Sahyog Roshan</div>
                                    <div onClick={() => navigate("/sahyog-scholarship-and-mentorship-program")}>Sahyog Scholarship Mentorship Program</div>
                                    <div onClick={() => navigate("/sahyog-jhula")}>Sahyog Jhula</div>
                                    <div onClick={() => navigate("/add-element")}>Sahyog Jhula</div>
                                    {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                                </div>
                            </div>

                            <div className="dropdown">
                                <li>
                                    <p href="#main">Reports</p>
                                </li>
                                <div className="dropdown-content">
                                    <div onClick={() => navigate("/reports")}>Annual Reports</div>
                                    <div onClick={() => navigate("/financials")}>Financials</div>
                                    {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                                </div>
                            </div>

                            <div className="dropdown">
                                <li>
                                    <div onClick={() => navigate("/sangarsh-campaign")}>Sangarsh Campaign</div>
                                </li>
                                <div className="dropdown-content">
                                    {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                                </div>
                            </div>

                            <div className="dropdown">
                                <li>
                                    <div onClick={() => navigate("/covid-19-relief")}>Covid-19 Relief</div>
                                </li>
                                <div className="dropdown-content">
                                    {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                                </div>
                            </div>

                            <div className="dropdown">
                                <li>
                                    <div onClick={() => navigate("/donate")}>Donate Now</div>
                                </li>
                                <div className="dropdown-content">
                                    {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                                </div>
                            </div>

                            <div className="dropdown login-hide">
                                <li className="nav-button" onClick={() => navigate("/login")}>
                                    <div>
                                        Login
                                    </div>
                                </li>
                            </div>

                            {/* {admin ? 
                                <div className="dropdown add-item add-nav-item">
                                    <li>
                                        <div onClick={() => navigate("/add-list-item")}>+ Add Item</div>
                                    </li>
                                    <div className="dropdown-content">
                                    </div>
                                </div> : ""} */}
                        </div>
                    </div>

                    <div className="nav-buttons login-display">
                        <li className="nav-button" onClick={() => navigate("/login")}>
                            <div>
                                Login
                            </div>
                        </li>
                        {/* {admin ? 
                        <li className="nav-button" onClick={() => navigate("/admin-dashboard")}>
                            <div>
                                Admin Dashboard
                            </div>
                        </li> : ""} */}

                    </div>
                    <div className="nav-lines" onClick={showNavBar}>
                        <div className='Bar'></div>
                        <div className='Bar'></div>
                        <div className='Bar'></div>
                    </div>
                </nav>
            </section>
        </>
    );
}