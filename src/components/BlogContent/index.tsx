import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';

// FIXME: Error handling, loading state, etc
const fetchMd = async (id: string) => {
    const res = await fetch(`/assets/markdowns/${id}.md`);
    const data = await res.text();

    return data;
}

export default function BlogContent() {
    const { id } = useParams();
    const [md, setMd] = useState<string>('');

    useEffect(() => {
        if (id) {
            fetchMd(id).then((data) => {
                setMd(data);
            })
        }
    }, [id]);

    return (
        <div className='prose dark:prose-invert'>
            <Markdown>{md}</Markdown>
        </div>
    );
}