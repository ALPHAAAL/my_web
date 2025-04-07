import LazyImage from '../LazyImage';
import { LayoutGrid } from './LayoutGrid';

import IMAGE_JSON from '../../assets/img/images.json';

import { hashToDataUrl } from '../../utils/hash';
import { cn } from '../../utils/utils';

const Skeleton = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Title to be filled in later...
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          To be filled in later...
        </p>
      </div>
    );
  };


const images = Object.values(IMAGE_JSON).map(({ name, width, height, hash }) => {
    return {
        id: hash,
        content: <Skeleton />,
        className: cn(height > width ? 'col-span-1' : 'md:col-span-2', 'grid'),
        thumbnail: (<LazyImage key={hash} className='h-full grid items-center' src={name} width={width} height={height} placeholderImage={hashToDataUrl(hash)} hash={hash} />),
    }
});

export default function Gallery() {
    return (
        <div>
            <p>Gallery for preview only, under construction :P</p>
            <LayoutGrid cards={images} />
        </div>
    )
}