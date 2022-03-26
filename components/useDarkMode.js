import { useEffect, useState } from 'react'

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light')

    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light');
    }, []);
    return [theme, themeToggler];
};