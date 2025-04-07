import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div className="rounded-xl hidden px-4 sm:flex sm:justify-between text-center fixed bottom-5 left-[50%] ml-[-150px] bg-slate-400 dark:bg-slate-800 border-[1px] dark:border-stone-400 w-[300px] h-[50px]">
            <Link className="hover:bg-slate-500 dark:hover:bg-slate-700 w-[33%] h-full leading-[50px]" to="/about">About</Link>
            <Link className="hover:bg-slate-500 dark:hover:bg-slate-700 w-[33%] h-full leading-[50px]" to="/gallery">Gallery</Link>
            <Link className="hover:bg-slate-500 dark:hover:bg-slate-700 w-[33%] h-full leading-[50px]" to="/blog">Blog</Link>
        </div>
    )
}