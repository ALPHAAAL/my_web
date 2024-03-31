import clsx from 'clsx';

import GithubIcon from '../../assets/icons/github-mark.svg?react';
import LinkedinIcon from '../../assets/icons/LinkedIn_icon.svg?react';

type SocialRowPropType = React.ComponentProps<'div'> & {
    shouldShowName?: boolean;
}

export default function SocialRow({ className, shouldShowName = true }: SocialRowPropType) {
    return (
        <div className={clsx(className, 'flex flex-row space-x-4 justify-around h-min')}>
            <a className='flex hover:text-blue-700' href="https://github.com/ALPHAAAL" target='_blank'>
                <GithubIcon width={24} height={24} />
                {shouldShowName && <span className='ml-3'>Github</span>}
            </a>
            <a className='flex hover:text-blue-700' href="https://www.linkedin.com/in/alex-lau-a550a7134/" target='_blank'>
                <LinkedinIcon width={24} height={24} />
                {shouldShowName && <span className='ml-3'>Linkedin</span>}
            </a>
        </div>
    );
}