import React, {createContext, useState, useContext} from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

    };

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme}}>
            <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white textblack'}>
                {children}
            </div>
        
        </ThemeContext.Provider>



    );
}

export function useTheme() {

    return useContext(ThemeContext);
}