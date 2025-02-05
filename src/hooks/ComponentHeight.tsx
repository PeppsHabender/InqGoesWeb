import { RefObject, useEffect, useState } from "react";

export function useComponentHeight(ref: RefObject<HTMLElement>) {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                setHeight(ref.current.clientHeight);
            }
        };

        window.addEventListener("resize", updateHeight);
        updateHeight();

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, [ref]);

    return height;
}
