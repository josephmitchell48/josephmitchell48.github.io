import React, { useEffect, createContext } from "react";
import { DarkTheme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme] = "dark";



    useEffect(() => {
        typeof localStorage !== "undefined" &&
            localStorage.setItem("dark", JSON.stringify(theme === "dark"));
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme
            }}
        >
            <MuiThemeProvider
                theme={DarkTheme}
            >
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
