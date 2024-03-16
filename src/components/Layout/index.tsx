import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="h-max md:px-[10%] lg:px-[15%] bg-slate-800 text-green-300">
            <div className="h-full flex flex-col bg-slate-900 px-5">
                <div className="flex flex-col min-h-screen py-3">
                    <div className="mb-5">
                        Something goes here
                        <br />
                        Something goes here
                        <br />
                        Something goes here
                    </div>
                    <div className="grow">
                        <Outlet />
                    </div>
                </div>
                <div className="pb-3 border-t border-green-300" />
                <div className="flex sm:px-5 sm:justify-between justify-around">
                    <h1 className="hidden sm:block sm:w-[50%] text-center">The greatest glory in living lies not in never falling, but in rising every time we fall.</h1>
                    <h1 className="sm:w-[50%] text-center">
                        Built with React & Tailwind CSS <br />
                        2024 Alex Lau. All rights reserved.
                    </h1>
                </div>
            </div>
        </div>
    )
}