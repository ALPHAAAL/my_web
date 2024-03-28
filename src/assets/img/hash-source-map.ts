// TODO: Think of a workflow for automatically mapping the hash and image source

import * as Thumbhash from 'thumbhash';
import ProfilePic from '../../assets/img/DSC01603.jpeg';

export function hashToDataUrl(hash: string) {
    const binary = Uint8Array.from(atob(hash), c => c.charCodeAt(0));
    const dataUrl = Thumbhash.thumbHashToDataURL(binary);

    return dataUrl;
}

export default {
    ProfilePic: {
        src: ProfilePic,
        hash: hashToDataUrl('aggSDwKZaIiPd3h7h1d3iIh4dwVYN4AB'),
    }
}