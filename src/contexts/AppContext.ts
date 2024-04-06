import { createContext } from "react";

export const AppContext = createContext({
    isMenuOpen: false,
    isDarkMode: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setIsMenuOpen: (_: boolean) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setIsDarkMode: (_: boolean) => {},
});