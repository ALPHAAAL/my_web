/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from 'react-globe.gl';

type G_DATA = {
    lat: number;
    lng: number;
    size: number;
    color: string;
}

type GlobeComponentPropType = {
    width: number;
    height: number
}

const COLORS = [
    '#ed2697', '#0a05ff', '#7fe917', '#402d64', '#8da3cd', '#429c51', '#747164', '#96124b', '#fcf55d', '#e66658', '#5f881b', '#7d7ec4', '#fe3a15'
];
const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>
`;
// Gen random data
const N = 30;
const gData = new Array(30).map(({ coordinates, ...rest }) => ({
    lat: coordinates[0],
    lng: coordinates[1],
    size: 30,
    color: ['red', 'black', 'blue', 'green'][Math.round(Math.random() * 3)],
    ...rest,
}));

export default function GlobeComponent(props: GlobeComponentPropType) {
    const globeRef = useRef<GlobeMethods>();
    const [places, setPlaces] = useState<object[]>([]);
    const [labels, setLabels] = useState<object[]>([]);
    const handleGlobeReady = () => {
        console.log('ready');
    }

    useEffect(() => {
        // load data
        fetch('/assets/geojson/custom_low_all_mini.geo.json')
            .then(res => res.json())
            .then((data) => setPlaces(data));
    }, []);

    return (
        <div className='mt-6'>
            <Globe
                ref={globeRef}
                onGlobeReady={handleGlobeReady}
                backgroundColor='rgba(0,0,0,0)'
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                width={props.width}
                height={props.height}
                htmlElementsData={gData}
                htmlElement={(d: unknown) => {
                    const data = d as G_DATA;

                    const el = document.createElement('div');
                    el.innerHTML = markerSvg;
                    el.style.color = data.color;
                    el.style.width = `${data.size}px`;
                    el.style.cursor = 'pointer';
                    (el.style as unknown as any)['pointer-events'] = 'auto';

                    el.onclick = () => {
                        console.log(d);
                        const control = globeRef.current?.controls();

                        globeRef.current?.pointOfView({
                            lat: data.lat,
                            lng: data.lng,
                            altitude: 0.1,
                        }, 1000)
                    };
                    return el;
                }}
                polygonsData={(places as any)}
                polygonStrokeColor={'rgba(0, 0, 0, 1)'}
                polygonSideColor={(d: any) => COLORS[d.properties.mapcolor9]}
                polygonCapColor={(d: any) => COLORS[d.properties.mapcolor13]}
                polygonLabel={({ properties: d }: any) => d.name}
                polygonAltitude={0.01}
                rendererConfig={{
                    antialias: false
                }}

            // labelsData={labels}
            // labelLat={(d: any) => d.geometry.coordinates[1]}
            // labelLng={(d: any) => d.geometry.coordinates[0]}
            // labelAltitude={0.02}
            // labelSize={0.1}
            // labelDotRadius={0.02}
            // labelText={(d: any) => d.properties.name}
            />
        </div>
    )
}