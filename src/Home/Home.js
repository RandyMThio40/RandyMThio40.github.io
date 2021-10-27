import React,{useState,useEffect,useRef,useReducer} from 'react';
import './Home.css';



export default function Home(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");


    const form_type ={
        Name:"name",
        Email:"email",
        Message:"message"
    } 
    const handleChange = (e,type) => {
        console.log(name.length ,name);
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
        }
    }

    const handleName = (e) => {
        handleChange(e,"name");
    }
    
    const handleEmail = (e) => {
        handleChange(e,"email");
    }


    return(
        <main className="home-page-container">
            <section className="hero-landing">
                <h3 className="opening-tag custom-tag">Home</h3>
                <div className="hero-headers">
                    <h1 className="title-name indent"><span className="opening-tag">h1</span>Randy Thio<span className="closing-tag">h1</span></h1>
                    <h3 className="secondary-title-container closed-tag indent"><span className="secondary-title"/></h3>
                </div>
                <div className="clickable-links-container">
                    <a href="/" className="Portfolio closed-tag indent custom-tag">Portfolio <span className="attr">onClick</span><span className="curly-brackets">View</span></a>
                    <a href="/" className="Resume closed-tag indent custom-tag">Resume <span className="attr">onClick</span><span className="curly-brackets">Download</span></a>
                    <a href="/" className="Link closed-tag indent custom-tag">Link <span className="attr">to</span><span className="curly-brackets">LinkedIn</span> <span className="attr">target</span><span className="parenthesis">_blank</span></a>
                    <a href="/" className="Link closed-tag indent custom-tag">Link <span className="attr">to</span><span className="curly-brackets">Github</span> <span className="attr">target</span><span className="parenthesis">_blank</span></a>
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
            <section className="portfolio-container">
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
                    <form className="send-email-form" >
                        <h3 className="opening-tag">form</h3>
                        <div className="input-container" >
                            <input type="text" id="name" onChange={handleName} value={name} required />
                            <label htmlFor="name" >name</label>
                            <div className="label-bg">name</div>
                        </div>
                        <div className="input-container">
                            <input type="email" id="email" onChange={handleEmail} required />
                            <label htmlFor="name" >email</label>
                            <div className="label-bg">email</div>
                        </div>
                        <textarea id="message-input" name="message-input" placeholder="leave me a message..." rows="9"/>
                        <div className="closed-tag submit-butt"><input type="submit" id="submit-form" /></div>
                        <h3 className="closing-tag">form</h3>
                    </form>
                </div>
                <h3 className="closing-tag custom-tag">Contact me</h3>
            </section>
        </main>
    );
}   