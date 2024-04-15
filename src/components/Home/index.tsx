/// <reference types="vite-plugin-svgr/client" />
import LazyImage from '../LazyImage';
import SocialRow from "../SocialRow";

import { hashToDataUrl } from '../../utils/hash';
import IMAGE_JSON from '../../assets/img/images.json';

const images = Object.values(IMAGE_JSON).map(({ name, hash, width, height }) => {
    const sh = window.screen.height;
    const newHeight = sh > 1280 ? Math.min(400, height) : Math.min(300, height);
    const scale = newHeight / height;
    const newWidth = Math.floor(width * scale);

    return (
        <LazyImage key={hash} src={name} height={newHeight} width={newWidth} placeholderImage={hashToDataUrl(hash)} className='max-h-[300px] xl:max-h-[400px]' />
    );
});
const mobileImages = Object.values(IMAGE_JSON).map(({ name, hash, width, height }) => {
    return (
        <LazyImage key={hash} src={name} width={width} height={height} placeholderImage={hashToDataUrl(hash)} className='object-cover w-full' />
    );
});

const TYPING_TEXT_CLASS_NAME = "overflow-hidden whitespace-nowrap"; // TODO: Add this -> `border-r-4 border-r-white pr-2` for blinking cursor

export default function Home() {
    return (
        <div className='h-full'>
            <div className="flex flex-col items-start">
                {/* <h1 className='text-6xl sm:text-8xl font-extrabold bg-clip-text'>Alex Lau</h1> */}
                <svg height="100" fill="transparent" stroke="currentColor" strokeWidth="2" className="stroke-fill-animation text-6xl sm:text-8xl font-bold bg-clip-text" width="100%">
                    <text dominantBaseline="middle" y="50%">Alex Lau</text>
                </svg>
                <div className="font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-stone-600/60 to-slate-800 dark:from-slate-200/60 to-50% dark:to-slate-200">
                    I am a <span className="text-teal-500 dark:text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                        <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
                            <li className={TYPING_TEXT_CLASS_NAME}>Software Engineer</li>
                            <li className={TYPING_TEXT_CLASS_NAME}>Landscape Photographer</li>
                            <li className={TYPING_TEXT_CLASS_NAME}>Digital Art Hobbyist</li>
                            <li className={TYPING_TEXT_CLASS_NAME}>Avid Reader</li>
                            <li className={TYPING_TEXT_CLASS_NAME} aria-hidden="true">Software Engineer</li>
                        </ul>
                    </span>
                </div>
                <SocialRow className='mt-3' shouldShowName={false} />
                <div className='hidden md:-translate-x-[10%] lg:-translate-x-[15%] w-screen sm:flex sm:flex-row py-10 sm:py-20 sm:overflow-scroll scroll-smooth scrollbar-hide [&>*]:mr-8'>
                    {images}
                </div>
                <div className='grid grid-cols-2 gap-x-5 gap-y-3 mt-12 sm:hidden'>
                    {mobileImages}
                </div>
            </div>
        </div>
    );
}