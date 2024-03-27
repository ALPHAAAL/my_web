import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div className={`px-2 sm:flex sm:justify-between items-center align-middle hidden fixed bottom-5 left-[50%] ml-[-150px] bg-red-400 w-[300px] h-[50px]`}>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/blog">Blog</Link>
        </div>
    )
}