import * as Thumbhash from 'thumbhash';

export function hashToDataUrl(hash: string) {
    const binary = Uint8Array.from(atob(hash), c => c.charCodeAt(0));
    const dataUrl = Thumbhash.thumbHashToDataURL(binary);

    return dataUrl;
}