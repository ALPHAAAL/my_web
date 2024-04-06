import * as ThumbHash from 'thumbhash';
import sharp from 'sharp';
import fs from 'fs'
import path from 'path';

const BASE_DIR = 'photos';
const ASSETS_DIR = path.join('./', '..', 'src', 'assets', 'img');
const PUBLIC_ASSETS_DIR = path.join('./', '..', 'public', 'assets', 'images');

async function generateHash() {
    const photos = fs.readdirSync(BASE_DIR);
    let json = {};

    for (const imagePath of photos.filter(file => !file.includes('.webp'))) {
        const image = sharp(path.join(BASE_DIR, imagePath));
        const imageForHash = image.resize(100, 100, { fit: 'inside' });
        const { data, info } = await imageForHash.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
        const binaryThumbHash = ThumbHash.rgbaToThumbHash(info.width, info.height, data);
        const thumbHashToBase64 = Buffer.from(binaryThumbHash).toString('base64');

        const imageToBeResize = sharp(path.join(BASE_DIR, imagePath));
        const meta = await imageToBeResize.metadata();
        const width = meta.width;
        const height = meta.height;
        const imageBasename = path.parse(imagePath).name;

        if (!fs.existsSync(path.join(PUBLIC_ASSETS_DIR, `${imageBasename}.webp`))) {
            imageToBeResize.webp().toFile(path.join(PUBLIC_ASSETS_DIR, `${imageBasename}.webp`));
        }

        if (!fs.existsSync(path.join(PUBLIC_ASSETS_DIR, `${imageBasename}_mobile.webp`))) {
            imageToBeResize.webp().resize({
                width: width > 1000 ? Math.ceil(width / 3) : width,
                height: width > 1000 ? Math.ceil(height / 3) : height,
            }).toFile(path.join(PUBLIC_ASSETS_DIR, `${imageBasename}_mobile.webp`));
        }

        // TODO: Remove this later, improve logic
        if (imageBasename !== 'DSC01603') {
            json[imageBasename] = {
                name: imageBasename,
                hash: thumbHashToBase64,
                width,
                height,
            };
        }
    }

    console.log(json);
    fs.writeFileSync(path.join(ASSETS_DIR, 'images.json'), JSON.stringify(json));
}

generateHash();