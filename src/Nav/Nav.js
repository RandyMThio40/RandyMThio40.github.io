import React,{useState,useEffect,useRef} from 'react';
import './Nav.css';
import ToggleTheme from '../components/toggle/toggle.js';


export default function Nav(){
    const base_url = "/my-portfolio/";
    useEffect(()=>{
        let sections = ["home","about","portfolio","contact-me"];
        let link_list = document.querySelectorAll(".nav-links > span");
        for(let index in sections){
            let element = document.getElementById(sections[index]);
            link_list[index].addEventListener("click",()=>{
                element.scrollIntoView();
                element.scrollIntoView(false);
                element.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});
            },false)
            // console.log(link_list[index], element);
        }
    },[])

    return(
        <nav className="nav-bar">
            <div className="nav-bar-wrapper">
                <button><h1 className="logo">Randy Thio</h1></button>

                <div className="nav-links" role="tablist">
                    <span><button>Home</button></span>
                    <span><button>About</button></span>
                    <span><button>Portfolio</button></span>
                    <span><button>Contact Me</button></span>
                    <ToggleTheme/>
                </div>
            </div>
        </nav>
    );
}