import { useNavigate } from 'react-router-dom';
import CaretIcon from '../../assets/icons/caret-icon.svg?react';

import MD_JSON from '../../assets/markdown.json';

type TagProp = {
    children: React.ReactNode;
};

function Tag({ children }: TagProp) {
    return (
        <span className="bg-slate-700 p-1">{children}</span>
    )
}

type BlogPostRowType = {
    title: string;
    description: string;
    tags: string[];
    readingTime: number;
    createAt: Date;
}

function BlogPostRow(props: BlogPostRowType) {
    const { title, description, tags, readingTime, createAt } = props;
    const navigate = useNavigate();

    return (
        <div className="grid sm:grid-cols-5 my-3">
            <div className="flex flex-col sm:p-3">
                <p>{`${createAt.toLocaleDateString()}`}</p>
                <div className="hidden mt-3 w-[100px] h-[100px] bg-cyan-400 sm:block"></div>
            </div>
            <div onClick={() => navigate('react_caveats')} className="sm:col-start-2 sm:col-span-3 flex flex-col sm:p-3 [&>*]:mb-2 hover:bg-slate-400/5 cursor-pointer">
                <p className="font-bold">{title}</p>
                <p className="text-sm">{description}</p>
                <div className="text-xs flex flex-row [&>*]:mr-1">
                    {
                        tags.map((tag) => <Tag key={tag}>{tag}</Tag>)
                    }
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-sm">{readingTime} minutes</p>
                    <CaretIcon className="-rotate-90" width={30} height={30} />
                </div>
            </div>
        </div>
    );
}

export default function Blog() {
    return (
        <div>
            <p>Blog page under construction :P</p>
            <h1 className='mt-3 text-4xl'>My thoughts on programming, books, and fun things in life</h1>
            <div className="mt-16 sm:border-l-[0.5px] sm:border-l-slate-700 sm:pl-4 sm:mt-20">
                {MD_JSON.map((data) => <BlogPostRow key={data.name} createAt={new Date(data.createAt)} title={data.name} description={data.description} readingTime={data.readingTime} tags={data.tags} />)}
            </div>
        </div>
    )
}