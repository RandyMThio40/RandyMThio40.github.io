import resume from '../resume/Randy\'s_resume.pdf';
import code_symbol from '../images/code.svg';
import css from '../images/CSS.svg';
import Figma from '../images/Figma.svg';
import HTML from '../images/HTML.svg';
import Javascript from '../images/Javascript.svg';
import React_js from '../images/React_JS.svg';
import SCSS from '../images/SCSS.svg';
import Typrscript from '../images/Typescript.svg';
import React,{useState,useEffect,useRef} from 'react';
import './Home.css';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { GetTheme } from '../components/useContext/provideTheme';



init(process.env.REACT_APP_EMAIL_JS_USER_ID);


export default function Home(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const form = useRef();
    const count = useRef(1);
    const theme = GetTheme();

    useEffect(()=>{
        console.log("home Theme: " , theme); 
        // if(theme === "dark"){
        //     const home_container = document.querySelector(".home-page-container");
        //     home_container.classList.toggle()
        // }
    },[theme])

    const form_type ={
        Name:"name",
        Email:"email",
        Message:"message"
    } 
    const handleChange = (e,type) => {
        // console.log(name.length ,name);
        if((!e.target.parentElement.classList.contains("active") && e.target.value.length) || !e.target.value.length) {
            e.target.parentElement.classList.toggle("active");
        }
        switch(type){
            case form_type.Name:{
                setName(e.target.value);
                break;
            }
            case form_type.Email:{
                setEmail(e.target.value);
                break;
            }
            default:{
                break;
            }
        }
    }

    const handleName = (e) => {
        handleChange(e,"name");
    }
    
    const handleEmail = (e) => {
        handleChange(e,"email");
    }

    const handleMessage = (e) => {
        if((!e.target.classList.contains("active") && e.target.value.length) || !e.target.value) e.target.classList.toggle("active");
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.current);
        const form_block = {
            name:name,
            email:email,
            message:message,
            reply_to:email
        }
        emailjs.send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID,process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,form_block,process.env.REACT_APP_EMAIL_JS_USER_ID)
        .then(res=>console.log(res.text))
        .catch(err=>console.log(err.text));

       
        setEmail("");
        setName("");
        setMessage("");
    }

    const setCounter = () => {
        count.current = ++count.current%3;
    }

    const recursiveSetTimeout = () => {
        const element = document.getElementsByClassName("secondary-title")[0];
        if(document.querySelector(".alt1")) element.classList.remove("alt1");
        if(document.querySelector(".alt2")) element.classList.remove("alt2");
        console.log(count.current,element);
        switch(count.current){
            case 0:{
                setTimeout(recursiveSetTimeout,12000);
                break;
            }
            case 1:{
                element.classList.add("alt1");
                console.log(document.querySelector(".alt1").style)

                setTimeout(recursiveSetTimeout,9900);
                break;
            }
            case 2:{
                element.classList.add("alt2");
                setTimeout(recursiveSetTimeout,9240);
                break;
            }
            default:{
                break;
            }
        }
        setCounter();
    }

    useEffect(()=>{
        setTimeout(recursiveSetTimeout,12000);
    },[])
    
    return(
        <main className={`home-page-container ${(theme === "dark")? "dark" : ""}`}>
            <div className="notification"> website is still under development </div>
            <section id="home" className="hero-landing">
                {/* <img className="symbol-bg" id="code_symbol" src={code_symbol} alt="code_symbole" /> */}
                <svg className="symbol-bg" id="code_symbol" width="394" height="438" viewBox="0 0 394 438" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.37791 386.225L124.026 335.494L161.588 373.886L-20.9414 437.13L-50.7753 406.638L16.5927 225.69L54.1556 264.082L1.37791 386.225ZM256.24 370.646L227.745 398.526L68.8404 65.1024L97.3356 37.2226L256.24 370.646ZM341.951 51.4609L214.662 105.805L177.717 68.0451L364.121 0.701672L393.955 31.194L322.558 216.083L285.614 178.323L341.951 51.4609Z" fill="black" fill-opacity="0.1"/>
                </svg>

                <img className="symbol-bg" id="css_symbol" src={css} alt="css.png" />
                <img className="symbol-bg" id="figma_symbol" src={Figma} alt="figma.png" />
                <img className="symbol-bg" id="html_symbol" src={HTML} alt="HTML.png" />
                <img className="symbol-bg" id="javascript_symbol" src={Javascript} alt="Javascript.png" />
                <img className="symbol-bg" id="react_symbol" src={React_js} alt="react_js.png" />
                <img className="symbol-bg" id="SCSS_symbol" src={SCSS} alt="scss.png" />
                <img className="symbol-bg" id="typescript_symbol" src={Typrscript} alt="typescript.png" />
                <h3 className="opening-tag custom-tag">Home</h3>
                <div className="hero-headers">
                    <h1 className="title-name indent"><span className="opening-tag">h1</span>Randy Thio<span className="closing-tag">h1</span></h1>
                    <h3 className="secondary-title-container closed-tag indent"><span className="secondary-title"/></h3>
                </div>
                <div className="clickable-links-container">
                    <a tabIndex="-1" rel="noreferrer" href="#portfolio" className="Portfolio closed-tag indent custom-tag">Portfolio <span className="attr"><button> onClick </button></span><span className="curly-brackets">View</span></a>
                    <a tabIndex="-1" rel="noreferrer" href={resume} className="Resume closed-tag indent custom-tag" download>Resume <span className="attr"><button>onClick</button></span><span className="curly-brackets">Download</span></a>
                    <a tabIndex="-1" rel="noreferrer" href="https://www.linkedin.com/in/randy-thio-b9990518a" className="Link closed-tag indent custom-tag" target="_blank">Link <span className="attr"><button>to</button></span><span className="curly-brackets">LinkedIn</span> <span className="attr">target</span><span className="quotation">_blank</span></a>
                    <a tabIndex="-1" rel="noreferrer" href="https://github.com/RandyMThio40" className="Link closed-tag indent custom-tag" target="_blank">Link <span className="attr"><button>to</button></span><span className="curly-brackets">Github</span> <span className="attr">target</span><span className="quotation">_blank</span></a>
                </div>
                <h3 className="closing-tag custom-tag">Home</h3>
            </section>
            <section id="about" className="about-container">
                <h3 className="opening-tag custom-tag">About</h3>
                    <div className="about-me-wrapper">
                        <h3 className="about-me-title indent"><span className="opening-tag">h3</span>ABOUT ME<span className="closing-tag">h3</span></h3>
                        <div className="about-me-para indent">
                            <h3 className="opening-tag ">p</h3>
                            <p className="indent about-me-para-content">
                                I am a front end developer who passionate in building web apps. 
                                I enjoy using javascript/typescript and css to bring amazing designs to life. 
                                I look forward to furthering my skills and deepening my knowledge on web development.
                            </p>
                            <h3 className="closing-tag ">p</h3>
                        </div>
                    </div>
                <h3 className="closing-tag custom-tag">About</h3>
            </section>
            <section id="portfolio" className="portfolio-container">
                <h3 className="opening-tag custom-tag">Portfolio</h3>
                <div className="portfolio-wrapper">
                    <aside className="comment indent curly-brackets">/* These are some projects I’ve worked on for the past year */</aside>
                    <div className="portfolio-content">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                </div>
                <h3 className="closing-tag custom-tag">Portfolio</h3>
            </section>
            <section id="contact-me" className="contact-me-container">
                <h3 className="opening-tag custom-tag">Contact me</h3>
                <div className="contact-me-wrapper">
                    <div className="final-message-container">
                        <span className="opening-tag">p</span>
                        <p className="indent">
                            Want to get in touch with me. Send me a message. 
                            Like the site? Let me know.
                        </p>
                        <span className="closing-tag">p</span>
                    </div>
                    <form ref={form} className="send-email-form" onSubmit={handleSubmit}>
                        <h3 className="opening-tag">form</h3>
                        <div className="input-container" >
                            <input name="name" type="text" id="name" onChange={handleName} value={name} required />
                            <label htmlFor="name" >name</label>
                            <div className="label-bg">name</div>
                        </div>
                        <div className="input-container">
                            <input type="email" id="email" name="email" onChange={handleEmail} value={email} required />
                            <label htmlFor="email" >email</label>
                            <div className="label-bg">email</div>
                        </div>
                        <textarea id="message-input" name="body" placeholder="leave me a message..." rows="9" value={message} onChange={handleMessage} />
                        <div className="closed-tag submit-butt"><input type="submit" id="submit-form" /></div>
                        <h3 className="closing-tag">form</h3>
                    </form>
                </div>
                <h3 className="closing-tag custom-tag">Contact me</h3>
            </section>
        </main>
    );
}   