//navigation bar component
//will be visible on each page
import React from "react";
import { useState,useEffect } from "react";
import './Navbar.css'; // Assuming you have a CSS file for styling
import PILogo from './assets/PILogo.jpg'; // Adjust the path as necessary
function Navbar() {
    const[isBlurred, setIsBlurred] = useState(false);

    useEffect(() =>{
        const handleScroll =()=>{
            if(window.scrollY > 10){
                setIsBlurred(true);
            }else{
                setIsBlurred(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);
    return(
        <div className={`navbar ${isBlurred ? "scrolled" : ""}`}>  
                <img src={PILogo} alt="PI Logo" className="logo" />         
                <ul className="nav-links">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Internship">Internship</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
         </div>
         
    );
}
export default Navbar;