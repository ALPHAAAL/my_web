import { useLayoutEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import clsx from 'clsx';

import MyIcon from '../../assets/icons/icon.svg?react';
// import DarkMode from '../../assets/icons/theme-light-dark.svg?react';
import LightMode from '../../assets/icons/light-mode.svg?react';
import DarkMode from '../../assets/icons/dark-mode.svg?react';

import NavigationBar from "../NavigationBar";
import NavigationMenu from '../NavigationMenu';
import { AppContext } from '../../contexts/AppContext';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(window?.matchMedia('(prefers-color-scheme: dark)')?.matches ?? true);
    const value = {
        isMenuOpen,
        isDarkMode,
        setIsMenuOpen,
        setIsDarkMode,
    };
    const blurClassName = isMenuOpen ? 'transition-[filter] duration-[500ms] blur-[3px]' : 'blur-[0px] transition-[filter] duration-[500ms]';

    useLayoutEffect(() => {
        if (isDarkMode) {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <AppContext.Provider value={value}>
            <div onClick={() => isMenuOpen && setIsMenuOpen(false)} className="h-max md:px-[10%] lg:px-[15%] bg-stone-300 dark:bg-slate-800 text-red-300 dark:text-green-300 overflow-hidden font-mono">
                <div className={clsx("h-full flex flex-col bg-stone-200 dark:bg-slate-900 px-5", blurClassName)}>
                    <div className="flex flex-col min-h-screen py-3">
                        <div className="flex justify-between mb-5 h-[40px]">
                            <Link to='/'><MyIcon className='text-black dark:text-white cursor-pointer' width={40} height={40} /></Link>
                            <div className='flex'>
                                <span className='flex justify-center w-[50px] border-2 rounded-3xl border-stone-300 dark:border-slate-800 p-2 mr-3'>
                                    {
                                        isDarkMode ?
                                            <LightMode onClick={() => setIsDarkMode((val) => !val)} className='text-black dark:text-white cursor-pointer' width={20} height={20} /> :
                                            <DarkMode onClick={() => setIsDarkMode((val) => !val)} className='text-black dark:text-white cursor-pointer' width={20} height={20} />
                                    }
                                </span>
                                <NavigationMenu />
                            </div>
                        </div>
                        <div className="grow mt-16 sm:mt-24">
                            <Outlet />
                        </div>
                    </div>
                    <div className="pb-3 border-t border-red-300 dark:border-green-300" />
                    <div className="flex text-xs text-center mt-5 mb-8 sm:px-5 sm:justify-between justify-around">
                        <h1 className="hidden sm:block sm:w-[30%]">Wisdom has been chasing me, but I have alawys been faster.</h1>
                        <h1 className="sm:w-[30%]">
                            Built and designed by me, with React & Tailwind CSS <br />
                            2024 Alex Lau. All rights reserved.
                        </h1>
                    </div>
                </div>
                <NavigationBar />
            </div>
        </AppContext.Provider>
    )
}