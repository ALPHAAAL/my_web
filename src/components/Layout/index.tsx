import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="h-dvh flex flex-col sm:px-[10%] bg-black">
            <h1 className="flex-none bg-pink-400">Navbar</h1>
            <div className="grow">
                <Outlet />
            </div>
            <footer className="flex-none bg-gray-400">Footer</footer>
        </div>
    )
}