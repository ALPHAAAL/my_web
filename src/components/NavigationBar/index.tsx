import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div className={`px-2 sm:flex sm:justify-between hidden fixed bottom-5 left-[50%] ml-[-150px] bg-red-400 w-[300px] h-[50px]`}>
            <Link to="/about">About</Link>
            <Link to="/about">Gallery</Link>
            <Link to="/about">Blog</Link>
        </div>
    )
}