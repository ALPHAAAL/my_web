import React, { useMemo } from "react"

type LazyImageProps = React.ComponentProps<'img'> & {
    placeholderImage?: string;
    needSrcSet?: boolean
};

export default function LazyImage(props: LazyImageProps) {
    const { needSrcSet = true, placeholderImage, src, width, height, className } = props;

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
        <img
            className={className}
            style={style}
            src={`/assets/images/${src}.webp`}
            srcSet={needSrcSet ? `/assets/images/${src}.webp 1920w, /assets/images/${src}_mobile.webp 375w`: undefined}
            decoding="async"
            loading="lazy"
            width={width}
            height={height}
            alt={src}
        />
    )
}