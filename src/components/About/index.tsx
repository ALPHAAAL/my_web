import { Link } from 'react-router-dom';

import ImageMap, { hashToDataUrl } from '../../assets/img/hash-source-map'
import WorkIcon from '../../assets/icons/work.svg?react';

import LazyImage from '../LazyImage';
import SocialRow from '../SocialRow';

type JobRole = {
    companyName: string;
    icon: React.ReactNode;
    titles: {
        title: string;
        duration: string;
    }[];
}

const VyondIcon = <LazyImage className='mr-3' width={35} height={35} src='assets/images/vyond.webp' placeholderImage={hashToDataUrl("X+sGDwJXSIeHeIiAepp32FeGhIr3qHgP")} />;
const BenoveltyIcon = <LazyImage className='mr-3' width={35} height={35} src='assets/images/benovelty.webp' />;
const VYOND_ROLES = [
    {
        title: 'Senior Software Engineer I',
        duration: 'Aug 2023 - Present',
    },
    {
        title: 'Software Engineer II',
        duration: 'Jan 2022 - Sept 2023',
    },
    {
        title: 'Software Engineer I',
        duration: 'Jun 2021 - Dec 2021',
    },
];
const BN_ROLES = [
    {
        title: 'Fullstack Software Engineer',
        duration: 'Jul 2020 - Jun 2021',
    },
    {
        title: 'Applcaition Developer (PT)',
        duration: 'Mar 2018 - Jun 2020',
    },
    {
        title: 'Application Developer Intern',
        duration: 'Jan 2018 - Feb 2018',
    },
];

function JobRow(props: JobRole) {
    const {
        companyName,
        titles,
        icon,
    } = props;

    return (
        <div className='flex flex-row w-full items-center'>
            {icon}
            <div className='w-full'>
                <h1 className='text-sm font-semibold'>{companyName}</h1>
                {titles.map(({title, duration}) => (
                    <div key={title} className='flex flex-col mt-1 sm:flex-row justify-between sm:mt-2 text-xs'>
                        <p>{title}</p>
                        <p className='mt-1 text-green-300/60 sm:mt-0'>{duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ExperienceSection() {
    return (
        <div className='sm:pl-10 mt-5'>
            <div className='w-full border-[0.5px] border-slate-50/25 p-6'>
                <div className='flex flex-row pb-3 border-b-[0.5px] border-slate-50/25'>
                    <WorkIcon className='mr-3' width={28} height={28} />
                    <h1>Work</h1>
                </div>
                <ol className='mt-5 [&>*]:mt-3'>
                    <li><JobRow key='vyond' companyName='Vyond' titles={VYOND_ROLES} icon={VyondIcon} /></li>
                    <li><JobRow key='bn' companyName='beNovelty' titles={BN_ROLES} icon={BenoveltyIcon} /></li>
                </ol>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div>
            <div className="w-full sm:mt-10">
                <div className='grid grid-cols-1 gap-y-6 sm:pr-3 sm:grid-cols-2 sm:grid-rows-[auto_1fr]'>
                    <div className='sm:col-start-2 sm:pl-10'>
                        <LazyImage src={ImageMap.ProfilePic.src} placeholderImage={ImageMap.ProfilePic.hash} />
                    </div>
                    <div className='sm:col-start-1 sm:row-start-1 sm:row-span-2'>
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
                    <div className='flex flex-col'>
                        <SocialRow />
                        <ExperienceSection />
                    </div>
                </div>
            </div>
        </div>
    )
}