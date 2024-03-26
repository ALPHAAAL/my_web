import { useContext, useRef } from "react"
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import clsx from "clsx";

import CaretIcon from '../../assets/icons/caret-icon.svg?react';
import CrossIcon from '../../assets/icons/cross-icon.svg?react';

import { AppContext } from "../../contexts/AppContext";
import { useAnimationEndUnmmount } from "../../hooks/useAnimationEndUnmount";

function Menu({ onMenuClose, isMenuOpen }: {
    onMenuClose: () => void,
    isMenuOpen: boolean,
}) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldRender = useAnimationEndUnmmount(ref, isMenuOpen, 'menu');

    return shouldRender && createPortal(
        (
            <div ref={ref} id='menu' className={clsx(isMenuOpen ? 'animate-open-menu-corner' : 'animate-close-menu-corner', "font-mono flex flex-col justify-around fixed ring-1 ring-slate-800 rounded-2xl w-[90%] top-4 left-[5%] bg-slate-900 p-7")}>
                <div className="h-[30px] flex justify-between">
                    <p className="text-sm self-center text-slate-500">Navigation</p>
                    <button onClick={onMenuClose}><CrossIcon className="text-slate-500" width={20} height={20} /></button>
                </div>
                <nav>
                    <ul className="divide-y-[1px] py-2 divide-slate-800 text-base text-slate-300">
                        <li className="py-1"><Link onClick={onMenuClose} to="/about">About</Link></li>
                        <li className="py-1"><Link onClick={onMenuClose} to="/about">Gallery</Link></li>
                        <li className="py-1"><Link onClick={onMenuClose} to="/about">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        ),
        document.body,
    );
}

export default function NavigationMenu() {
    const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);

    return (
        <>
            <div className='sm:hidden flex flex-row justify-center w-[90px] border-2 rounded-3xl border-slate-800' onClick={() => setIsMenuOpen(true)}>
                <span className="self-center">Menu</span>
                <span className="self-center"><CaretIcon /></span>
            </div>
            {<Menu onMenuClose={() => setIsMenuOpen(false)} isMenuOpen={isMenuOpen} />}
        </>
    )
}