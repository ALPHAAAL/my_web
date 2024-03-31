import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div className="hidden px-4 sm:flex sm:justify-between text-center fixed bottom-5 left-[50%] ml-[-150px] bg-stone-400 w-[300px] h-[50px]">
            <Link className="hover:bg-stone-800 w-[33%] h-full leading-[50px]" to="/about">About</Link>
            <Link className="hover:bg-stone-800 w-[33%] h-full leading-[50px]" to="/gallery">Gallery</Link>
            <Link className="hover:bg-stone-800 w-[33%] h-full leading-[50px]" to="/blog">Blog</Link>
        </div>
    )
}