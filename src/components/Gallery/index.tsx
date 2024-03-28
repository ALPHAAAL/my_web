import { hashToDataUrl } from '../../assets/img/hash-source-map';
import IMAGE_JSON from '../../assets/img/images.json';
import LazyImage from '../LazyImage';

const images = Object.values(IMAGE_JSON).map(({ name, width, height, hash }) => {
    return (
        <LazyImage src={`/assets/images/${name}.webp`} width={width} height={height} placeholderImage={hashToDataUrl(hash)} />
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