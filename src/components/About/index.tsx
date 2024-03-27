import { Link } from 'react-router-dom';
import ImageMap from '../../assets/img/hash-source-map'
import LazyImage from '../LazyImage';

import SocialRow from '../SocialRow';

export default function About() {
    return (
        <div>
            <div className="flex flex-col-reverse sm:flex-row w-full">
                <div className='sm:w-[60%] sm:pr-3'>
                    <h1 className="mt-3 text-6xl font-bold">Alex Lau</h1>
                    <div className='mt-4 leading-relaxed sm:leading-loose text-lg tracking-wider'>
                        <p>
                            Hi there! I am a software engineer from Hong Kong with a passion for developing high-performance software and crafting fluid web application with React. I have experience in building an experimental 2D vector graphics renderer with Rust + WebGPU + WASM, and since that project, I fell in love with computer graphics and Rust, so in my free time, I like to watch YouTube tutorials about those topics and implement related fun projects.
                        </p>
                        <p className='mt-3'>
                            Outside of my programming life, I have a wide range of hobbies that keep my mind and body engaged. From reading books, to doing digital paintings, and hiking around the world for beautiful landscape photos (Checkout my photos <Link className='italic underline' to='/gallery'>here</Link>!). I always keep an open-mind for experiencing and learning something new, so that I can get a multifaceted perspective in life, and towards different problems.
                        </p>
                        <p className='mt-3'>
                            I also like to keep a blog of the fun / difficult problems that I have encountered during my work / personal projects, so feel free to check out my <Link className='italic underline' to='/blog'>Blog</Link> section, and share your thoughts to me! :)
                        </p>
                    </div>
                </div>
                <div className='sm:w-[40%]'>
                    <LazyImage src={ImageMap.ProfilePic.src} placeholderImage={ImageMap.ProfilePic.hash} />
                    <div>
                        <SocialRow className='mt-3' />
                    </div>
                </div>
            </div>
        </div>
    )
}