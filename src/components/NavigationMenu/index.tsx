import { useContext } from "react"
import { createPortal } from "react-dom";
import clsx from "clsx";

import { AppContext } from "../../contexts/AppContext";
import { useAnimationEndUnmmount } from "../../hooks/useAnimationEndUnmount";

function Menu({ onMenuClose, isMenuOpen } : {
    onMenuClose: () => void,
    isMenuOpen: boolean,
}) {
    const shouldRender = useAnimationEndUnmmount('menu', isMenuOpen);

    // TODO: Check why enter-effect cannot use transition, but have to rely on `animate-open-menu`
    return shouldRender && createPortal(
        (
            <div id='menu' className={clsx(isMenuOpen ? '' : 'scale-y-0', "animate-open-menu transition-all duration-[150ms] flex flex-col justify-around fixed border-2 rounded-2xl w-[90%] top-4 left-[5%] bg-slate-300 p-3")}>
                <div className="flex justify-between">
                    <p>Navigation</p>
                    <p onClick={() => onMenuClose()}>X</p>
                </div>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </div>
        ),
        document.body,
    );
}

export default function NavigationMenu() {
    const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);

    return (
        <>
            <div className='sm:hidden w-[75px] border-2 rounded-2xl border-slate-800' onClick={() => setIsMenuOpen(true)}>
                Menu
            </div>
            {<Menu onMenuClose={() => setIsMenuOpen(false)} isMenuOpen={isMenuOpen} />}
        </>
    )
}