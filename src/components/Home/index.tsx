/// <reference types="vite-plugin-svgr/client" />

// import background_white from '../../assets/background_white_code_trim_compressed.mov';
import GithubIcon from '../../assets/github-mark.svg?react';
import LinkedinIcon from '../../assets/LinkedIn_icon.svg?react';

const TYPING_TEXT_CLASS_NAME = "overflow-hidden whitespace-nowrap"; // TODO: Add this -> `border-r-4 border-r-white pr-2` for blinking cursor

export default function Home() {
    return (
        <div className='h-full bg-gradient-to-tr to-blue-400 from-green-500'>
            {/* <video autoPlay muted loop className="absolute w-full h-full object-cover -z-50">
                <source src={background_white} type="video/mp4" />
            </video> */}
            <div className="ml-3 flex flex-col items-start">
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
                <div className='mt-5 flex flex-row space-x-2'>
                    <a href="https://github.com/ALPHAAAL" target='_blank'>
                        <GithubIcon className="text-blue-500 hover:text-blue-700" width={24} height={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/alex-lau-a550a7134/" target='_blank'>
                        <LinkedinIcon className="text-blue-500 hover:text-blue-700" width={24} height={24} />
                    </a>
                </div>
            </div>
        </div>
    );
}