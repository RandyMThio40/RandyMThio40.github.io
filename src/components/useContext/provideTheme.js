import React,{ useState, useContext, createContext } from "react";
import UseLocalStorage from "../useLocalStorage/useLocalStorage";

const ThemeContext = createContext();
const SetThemeContext = createContext();

export function GetTheme(){
    return useContext(ThemeContext);
}

export function GetThemeUpdater(){
    return useContext(SetThemeContext);
}

export function GetContext(props) {
    const [theme,setTheme] = UseLocalStorage("theme","dark");
    const toggleTheme = () => {
        setTheme((theme === "dark")? "light" : "dark" )
    }

    return(
        <ThemeContext.Provider value={theme}>
            <SetThemeContext.Provider value={toggleTheme}>
                {props.children}
            </SetThemeContext.Provider>
        </ThemeContext.Provider>

    )

}

