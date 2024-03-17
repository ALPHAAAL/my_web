import { useEffect, useState } from "react";

export function useAnimationEndUnmmount(id: string, isMounted: boolean) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const element = document.getElementById(id);

        if (isMounted && !shouldRender) {
            setShouldRender(true);
        } else if (!isMounted && shouldRender) {
            if (!element) {
                throw new Error('useAnimationEndUnmmount cannot find element id');
            }

            const handleAnimationEnd = () => {
                setShouldRender(false);
            };

            element.addEventListener('transitionend', handleAnimationEnd);

            return () => {
                element.removeEventListener('transitionend', handleAnimationEnd)
            };
        }
    }, [id, isMounted, shouldRender]);

    return shouldRender;
}