import React,{useState,useEffect,useRef} from 'react';
import './Nav.css';
import ToggleTheme from '../components/toggle/toggle.js';


export default function Nav(){
    const base_url = "/my-portfolio/";

    return(
        <nav className="nav-bar">
            <div className="nav-bar-wrapper">
                <a tabIndex="1" href={`http://localhost:3000${base_url}`}><button><h1 className="logo">Randy Thio</h1></button></a>

                <div className="nav-links" role="tablist">
                    <span><a tabIndex="1" href={`${base_url}#home`}> <button>Home</button></a></span>
                    <span><a tabIndex="1" href={`${base_url}#about`}><button>About</button></a></span>
                    <span><a tabIndex="1" href={`${base_url}#portfolio`}><button>Portfolio</button></a></span>
                    <span><a tabIndex="1" href={`${base_url}#contact-me`}><button>Contact Me</button></a></span>
                    <ToggleTheme/>
                </div>
            </div>
        </nav>
    );
}