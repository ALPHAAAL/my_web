import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="h-dvh md:px-[20%] bg-slate-800 text-green-300">
            <div className="h-full flex flex-col bg-slate-900 px-5 py-3">
                <div>
                    Something goes here
                </div>
                <div className="grow">
                    <Outlet />
                </div>
                <div className="py-3 border-t border-green-300" />
                <div className="flex px-5 justify-between">
                    <h1 className="hidden sm:block w-[50%] text-center">The greatest glory in living lies not in never falling, but in rising every time we fall.</h1>
                    <h1 className="w-[50%] text-center">
                        Built with React & Tailwind CSS <br />
                        2024 Alex Lau. All rights reserved.
                    </h1>
                </div>
            </div>
        </div>
    )
}