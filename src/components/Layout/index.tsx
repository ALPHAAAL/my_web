import { useState } from 'react';
import { Outlet } from "react-router-dom";
import clsx from 'clsx';

import MyIcon from '../../assets/icon.svg?react';
import DarkMode from '../../assets/theme-light-dark.svg?react';

import NavigationBar from "../NavigationBar";
import NavigationMenu from '../NavigationMenu';
import { AppContext } from '../../contexts/AppContext';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const value = {
        isMenuOpen,
        setIsMenuOpen,
    };
    const blurClassName = isMenuOpen ? 'transition-[filter] duration-[500ms] blur-[3px]' : 'blur-[0px] transition-[filter] duration-[500ms]';

    return (
        <AppContext.Provider value={value}>
            <div className="h-max md:px-[10%] lg:px-[15%] bg-slate-800 text-green-300">
                <div className={clsx("h-full flex flex-col bg-slate-900 px-5", blurClassName)}>
                    <div className="flex flex-col min-h-screen py-3">
                        <div className="flex justify-between mb-5">
                            <MyIcon className='text-white cursor-pointer' width={48} height={48} />
                            <div className='flex'>
                                <DarkMode className='text-white cursor-pointer' width={48} height={48} />
                                <NavigationMenu />
                            </div>
                        </div>
                        <div className="grow">
                            <Outlet />
                        </div>
                    </div>
                    <div className="pb-3 border-t border-green-300" />
                    <div className="flex sm:px-5 sm:justify-between justify-around">
                        <h1 className="hidden sm:block sm:w-[40%] text-center">Wisdom has been chasing me, but I have alawys been faster.</h1>
                        <h1 className="sm:w-[40%] text-center">
                            Built with React & Tailwind CSS <br />
                            2024 Alex Lau. All rights reserved.
                        </h1>
                    </div>
                </div>
                <NavigationBar />
            </div>
        </AppContext.Provider>
    )
}