import React,{useState,useEffect,useRef} from 'react';
import './Nav.css';

export default function Nav(){

    return(
        <nav className="nav-bar">
            <div className="nav-bar-wrapper">
                <h1 className="logo">Randy Thio</h1>

                <div className="nav-links">
                    <span><a href="/">Home</a></span>
                    <span><a href="/">About</a></span>
                    <span><a href="/">Portfolio</a></span>
                    <span><a href="/">Contact Me</a></span>
                </div>
            </div>
        </nav>
    );
}