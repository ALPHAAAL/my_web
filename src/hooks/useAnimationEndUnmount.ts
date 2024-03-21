import { useEffect, useState } from "react";

export function useAnimationEndUnmmount(element: React.RefObject<HTMLDivElement>, isMounted: boolean, id: string) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const inner = document.getElementById(id);

        if (isMounted && !shouldRender) {
            setShouldRender(true);
        } else if (!isMounted && shouldRender) {
            if (!inner) {
                throw new Error('useAnimationEndUnmmount cannot find element id');
            }

            const handleAnimationEnd = () => {
                // Make sure the element is hidden right after animation complete to avoid flickering UI
                inner.classList.toggle('hidden');
                setShouldRender(false);
            };

            inner?.addEventListener('animationend', handleAnimationEnd);

            return () => {
                inner?.removeEventListener('animationend', handleAnimationEnd)
            };
        }
    }, [id, element, isMounted, shouldRender]);

    return shouldRender;
}