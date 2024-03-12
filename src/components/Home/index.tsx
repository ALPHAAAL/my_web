/// <reference types="vite-plugin-svgr/client" />

import background_white from '../../assets/background_white_code_trim_compressed.mov';
import GithubIcon from '../../assets/github-mark.svg?react';
import LinkedinIcon from '../../assets/LinkedIn_icon.svg?react';

const TYPING_TEXT_CLASS_NAME = "overflow-hidden whitespace-nowrap"; // TODO: Add this -> `border-r-4 border-r-white pr-2` for blinking cursor

export default function Home() {
    return (
        <div className='bg-gradient-to-tr to-blue-400 from-green-500'>
            {/* <video autoPlay muted loop className="absolute w-full h-full object-cover -z-50">
                <source src={background_white} type="video/mp4" />
            </video> */}
            <div className="h-screen ml-3 flex flex-col justify-center items-star">
                <h1 className='text-9xl bg-clip-text'>Alex Lau</h1>
                <div className='w-max'>
                    <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                        I am a <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                            <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
                                <li className={TYPING_TEXT_CLASS_NAME}>Software Engineer</li>
                                <li className={TYPING_TEXT_CLASS_NAME}>Landscape Photographer</li>
                                <li className={TYPING_TEXT_CLASS_NAME}>Digital Art Hobbyist</li>
                                <li className={TYPING_TEXT_CLASS_NAME}>Avid Reader</li>
                                <li className={TYPING_TEXT_CLASS_NAME} aria-hidden="true">Software Engineer</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className='mt-5 flex flex-row space-x-2'>
                    <GithubIcon width={24} height={24} />
                    <LinkedinIcon width={24} height={24} />
                </div>
            </div>
        </div>
    );
}