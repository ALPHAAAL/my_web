import clsx from 'clsx';

import GithubIcon from '../../assets/icons/github-mark.svg?react';
import LinkedinIcon from '../../assets/icons/LinkedIn_icon.svg?react';

export default function SocialRow({ className }: React.ComponentProps<'div'>) {
    return (
        <div className={clsx(className, 'flex flex-row space-x-2 justify-around')}>
            <a className='flex' href="https://github.com/ALPHAAAL" target='_blank'>
                <GithubIcon className="text-blue-500 hover:text-blue-700" width={24} height={24} />
                <span className='ml-3'>Github</span>
            </a>
            <a className='flex' href="https://www.linkedin.com/in/alex-lau-a550a7134/" target='_blank'>
                <LinkedinIcon className="text-blue-500 hover:text-blue-700" width={24} height={24} />
                <span className='ml-3'>Linkedin</span>
            </a>
        </div>
    );
}