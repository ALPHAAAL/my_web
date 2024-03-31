import React, { useMemo } from "react"

type LazyImageProps = React.ComponentProps<'img'> & {
    placeholderImage?: string;
};

export default function LazyImage(props: LazyImageProps) {
    const { placeholderImage, src, width, height, className } = props;

    const style: React.CSSProperties = useMemo(() => {
        return {
            backgroundImage: placeholderImage ? `url(${placeholderImage})` : undefined,
            color: 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
        };
    }, [placeholderImage]);

    return (
        <img className={className} style={style} src={src} loading="lazy" width={width} height={height} />
    )
}