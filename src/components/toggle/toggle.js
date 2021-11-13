import React from 'react';
import "./toggle.css";
// import UseLocalStorage from '../useLocalStorage/useLocalStorage';
import { GetThemeUpdater, GetTheme } from '../useContext/provideTheme';


export const ToggleTheme = () => {
    const theme = GetTheme();
    const toggleTheme = GetThemeUpdater();
    const THEMES ={
        DARK:"dark",
        LIGHT:"light",
    }
    
    const handleClick = () => {
        const butt = document.querySelector(".toggle-container")
        toggleTheme();
        butt.classList.toggle("active");
    }
    React.useEffect(()=>{
        console.log("current theme: ",theme);
    },[theme])

    return(
        <>

            <button className={`toggle-container ${(theme === THEMES.DARK)? "active" : ""}`} onClick={handleClick}>
                <div className="toggle-wrapper">
                    <div className="toggle-butt"></div>
                </div>
            </button>
        </>
    );
}

export default ToggleTheme;