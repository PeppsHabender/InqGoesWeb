import {useEffect, useState} from "react";
import Typography from "./Typography.tsx";

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}


const Media = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const imageModules = import.meta.glob('/src/assets/media/*.{png,jpg,jpeg,svg}', {
            eager: true,
            as: 'url',
        });

        setImages(shuffle(Object.values(imageModules)));
    }, []);

    return (
        <div className="flex flex-col space-y-5 p-5 sm:max-h-screen sm:overflow-scroll md:max-h-none md:overflow-hidden md:p10 h-full content-center justify-center">
            <Typography variant="h2">Intercepted Media</Typography>
            <div className="m-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-10 space-y-10">
                {images.map((image) => <img className="rounded-md" src={image} alt=""/>)}
            </div>
        </div>
    )
}

export default Media;