import * as ThumbHash from 'thumbhash';
import sharp from 'sharp';
import fs from 'fs/promises'


const filepath = '/Users/genius/Projects/javascript/my_web/src/assets/img/DSC01603.jpeg';

// Image to ThumbHash
const image = sharp(filepath).resize(100, 100, { fit: 'inside' })
const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const binaryThumbHash = ThumbHash.rgbaToThumbHash(info.width, info.height, data)
console.log('binaryThumbHash:', Buffer.from(binaryThumbHash))

// If you want to use base64 instead of binary...
const thumbHashToBase64 = Buffer.from(binaryThumbHash).toString('base64')
const thumbHashFromBase64 = Buffer.from(thumbHashToBase64, 'base64')
console.log('thumbHashToBase64:', thumbHashToBase64)

// ThumbHash to data URL (can be done on the client, not the server)
const placeholderURL = ThumbHash.thumbHashToDataURL(binaryThumbHash)
console.log('placeholderURL:', placeholderURL)