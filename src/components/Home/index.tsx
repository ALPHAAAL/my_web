/// <reference types="vite-plugin-svgr/client" />

import SocialRow from "../SocialRow";

// import background_white from '../../assets/background_white_code_trim_compressed.mov';

const TYPING_TEXT_CLASS_NAME = "overflow-hidden whitespace-nowrap"; // TODO: Add this -> `border-r-4 border-r-white pr-2` for blinking cursor

export default function Home() {
    return (
        <div className='h-full'>
            {/* <video autoPlay muted loop className="absolute w-full h-full object-cover -z-50">
                <source src={background_white} type="video/mp4" />
            </video> */}
            <div className="flex flex-col items-start">
                <h1 className='text-7xl sm:text-8xl font-extrabold bg-clip-text'>Alex Lau</h1>
                <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                    I am a <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                        <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
                            <li className={TYPING_TEXT_CLASS_NAME}>Software Engineer</li>
                            <li className={TYPING_TEXT_CLASS_NAME}>Landscape Photographer</li>
                            <li className={TYPING_TEXT_CLASS_NAME}>Digital Art Hobbyist</li>
                            <li className={TYPING_TEXT_CLASS_NAME}>Avid Reader</li>
                            <li className={TYPING_TEXT_CLASS_NAME} aria-hidden="true">Software Engineer</li>
                        </ul>
                    </span>
                </div>
                <SocialRow />
            </div>
        </div>
    );
}