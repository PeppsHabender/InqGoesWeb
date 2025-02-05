import { useEffect, useState } from "react";

export function useScrollObserver() {
    const [currentSection, setCurrentSection] = useState<string | null>(null);

    useEffect(() => {
        const snapItems = document?.querySelectorAll(".snap-item") ?? [];
        if (!snapItems.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio >= 0.5) {
                        setCurrentSection(entry.target.id);
                    }
                });
            },
            { root: null, threshold: 0.5 },
        );

        snapItems.forEach((item) => observer.observe(item));

        return () => snapItems.forEach((item) => observer.unobserve(item));
    }, [currentSection]);

    return currentSection;
}
