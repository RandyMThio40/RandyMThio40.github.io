import resume from '../resume/Randy\'s_resume.pdf';
import code_symbol from '../images/code.png';
import css from '../images/CSS.png';
import Figma from '../images/Figma.png';
import HTML from '../images/HTML.png';
import Javascript from '../images/Javascript.png';
import React_js from '../images/React_JS.png';
import SCSS from '../images/SCSS.png';
import Typrscript from '../images/Typescript.png';
import React,{useState,useEffect,useRef} from 'react';
import './Home.css';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';



init(process.env.REACT_APP_EMAIL_JS_USER_ID);


export default function Home(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const form = useRef();
    const count = useRef(1);

    const getBrowserName = () => {
        let user_agent = navigator.userAgent;
         
        if(user_agent.match(/chrome|chromium|crios/i)){
            return "chrome";
        }
        else if(user_agent.match(/firefox|fxios/i)){
            return "firefox";
        } 
        else if(user_agent.match(/safari/i)){
            return "safari";
        }
        else if(user_agent.match(/opr\//i)){
            return "opera";
        }
        else if(user_agent.match(/edg/i)){
            return "edge";
        }
        else{
            return null;
        }
         
    }
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
        // console.log(getBrowserName());
        // console.log("userInterface".length)
        // console.log("userExperience".length)
        console.log(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,process.env.REACT_APP_EMAIL_JS_USER_ID)

    },[])

    
    
    return(
        <main className="home-page-container">
            <div className="notification"> website is still under development </div>
            <section className="hero-landing">
                <img className="symbol-bg" id="code_symbol" src={code_symbol} alt="code_symbole" />
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
                    <a href="#portfolio" className="Portfolio closed-tag indent custom-tag">Portfolio <span className="attr">onClick</span><span className="curly-brackets">View</span></a>
                    <a href={resume} className="Resume closed-tag indent custom-tag" download>Resume <span className="attr">onClick</span><span className="curly-brackets">Download</span></a>
                    <a href="https://www.linkedin.com/in/randy-thio-b9990518a" className="Link closed-tag indent custom-tag" target="_blank">Link <span className="attr">to</span><span className="curly-brackets">LinkedIn</span> <span className="attr">target</span><span className="parenthesis">_blank</span></a>
                    <a href="https://github.com/RandyMThio40" className="Link closed-tag indent custom-tag" target="_blank">Link <span className="attr">to</span><span className="curly-brackets">Github</span> <span className="attr">target</span><span className="parenthesis">_blank</span></a>
                </div>
                <h3 className="closing-tag custom-tag">Home</h3>
            </section>
            <section className="about-container">
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
            <section className="contact-me-container">
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