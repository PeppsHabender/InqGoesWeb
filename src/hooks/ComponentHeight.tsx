import { RefObject, useEffect, useState } from "react";

export function useComponentHeight(ref: RefObject<HTMLElement>) {
    return useComponentSize(ref).height;
}

export function useComponentWidth(ref: RefObject<HTMLElement>) {
    return useComponentSize(ref).width;
}

export function useComponentSize(ref: RefObject<HTMLElement>) {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const update = () => {
            if (ref.current) {
                setHeight(ref.current.clientHeight);
                setWidth(ref.current.clientWidth);
            }
        };

        window.addEventListener("resize", update);
        update();

        return () => {
            window.removeEventListener("resize", update);
        };
    }, [ref]);

    return { width, height };
}
