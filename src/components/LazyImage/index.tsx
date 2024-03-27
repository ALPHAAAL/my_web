import React, { useMemo } from "react"

type LazyImageProps = React.ComponentProps<'img'> & {
    placeholderImage: string;
};

export default function LazyImage(props: LazyImageProps) {
    const { placeholderImage, src, width, height } = props;

    const style: React.CSSProperties = useMemo(() => {
        return {
            backgroundImage: `url(${placeholderImage})`,
            color: 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
        };
    }, [placeholderImage]);

    return (
        <img style={style} src={src} loading="lazy" width={width} height={height} />
    )
}