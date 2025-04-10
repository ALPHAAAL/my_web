import LazyImage from '../LazyImage';

import { hashToDataUrl } from '../../utils/hash';
import IMAGE_JSON from '../../assets/img/images.json';

const images = Object.values(IMAGE_JSON).map(({ name, width, height, hash }) => {
    return (
        <LazyImage className='mb-3' key={hash} src={name} width={width} height={height} placeholderImage={hashToDataUrl(hash)} />
    );
});

export default function Gallery() {

    return (
        <div>
            <p>Gallery for preview only, under construction :P</p>
            <div className='mt-3'>
                {images}
            </div>
        </div>
    )
}