import fs from 'fs'
import path from 'path';

const PUBLIC_ASSETS_DIR = path.join('./', '..', 'public', 'assets');

const content = fs.readFileSync(path.join(PUBLIC_ASSETS_DIR, 'ne_10m_populated_places.json'));
const json = JSON.parse(content);
const result = [];

for (const feature of json.features) {
    let coordinates = [];

    if (feature.geometry.type === 'MultiPolygon') {
        coordinates = feature.geometry.coordinates.map((polygon) => {
            return polygon.map((coordinates) => {
                return coordinates.map((coordinate) => {
                    return coordinate.map((val) => parseFloat(parseFloat(val).toPrecision(4)));
                });
            });
        });
    } else if (feature.geometry.type === 'Polygon') {
        coordinates = feature.geometry.coordinates.map((polygon) => {
            return polygon.map((coordinate) => {
                return coordinate.map((val) => parseFloat(parseFloat(val).toPrecision(4)));
            });
        });
    } else if (feature.geometry.type === 'Point') {
        coordinates = feature.geometry.coordinates.map((val) => {
            return parseFloat(parseFloat(val).toPrecision(4));
        });
    }

    result.push({
        type: feature.type,
        properties: {
            name: feature.properties.NAMEASCII,
        },
        geometry: {
            type: feature.geometry.type,
            coordinates,
        },
        // geometry: feature.geometry
    });
}

fs.writeFileSync(path.join(PUBLIC_ASSETS_DIR, 'ne_10m_populated_places_mini.json'), JSON.stringify(result));