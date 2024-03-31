import CaretIcon from '../../assets/icons/caret-icon.svg?react';

type TagProp = {
    children: React.ReactNode;
};

function Tag({ children }: TagProp) {
    return (
        <span className="bg-slate-700 p-1">{children}</span>
    )
}

type BlodPostRowProp = {
    key: React.Key
}

function BlogPostRow({ key }: BlodPostRowProp) {
    return (
        <div key={key} className="grid sm:grid-cols-5 my-3">
            <div className="flex flex-col sm:p-3">
                <p>Today</p>
                <div className="hidden mt-3 w-[100px] h-[100px] bg-cyan-400 sm:block"></div>
            </div>
            <div className="sm:col-start-2 sm:col-span-3 flex flex-col sm:p-3 [&>*]:mb-2 hover:bg-slate-400/5 cursor-pointer">
                <p className="font-bold">Title</p>
                <p className="text-sm">Description</p>
                <div className="text-xs flex flex-row [&>*]:mr-1">
                    <Tag>Tags 1</Tag>
                    <Tag>Tags 2</Tag>
                    <Tag>Tags 3</Tag>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-sm">{Math.floor(Math.random() * 30)} minutes</p>
                    <CaretIcon className="-rotate-90" width={30} height={30} />
                </div>
            </div>
        </div>
    );
}

export default function Blog() {
    const posts = new Array(5).fill(0);

    return (
        <div>
            <p>Blog page under construction :P</p>
            <h1 className='mt-3 text-4xl'>My thoughts on programming, books, and fun things in life</h1>
            <div className="mt-16 sm:border-l-[0.5px] sm:border-l-slate-700 sm:pl-4 sm:mt-20">
                {posts.map((_, i) => <BlogPostRow key={i} />)}
            </div>
        </div>
    )
}