import { createContext } from "react";

export const AppContext = createContext({
    isMenuOpen: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setIsMenuOpen: (_: boolean) => {},
});