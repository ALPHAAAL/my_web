// TODO: Think of a workflow for automatically mapping the hash and image source

import * as Thumbhash from 'thumbhash';
import ProfilePic from '../../assets/img/DSC01603.jpeg';

const binary = Uint8Array.from(atob('aggSDwKZaIiPd3h7h1d3iIh4dwVYN4AB'), c => c.charCodeAt(0));
const blurryImage = Thumbhash.thumbHashToDataURL(binary);

export default {
    ProfilePic: {
        src: ProfilePic,
        hash: blurryImage,
    }
}