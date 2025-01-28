import React, {createContext, useEffect, useState, ReactNode} from 'react';

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const getInitialTheme = (): string => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState<string>(getInitialTheme());

    useEffect(() => {
        document.documentElement.classList.add(theme);
        return () => {
            document.documentElement.classList.remove(theme);
        };
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
