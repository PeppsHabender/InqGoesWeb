import {useEffect, useState} from "react";
import Typography from "./Typography.tsx";

const Media = () => {
    const [images, setImages] = useState<string[]>([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const imageModules = import.meta.glob('/src/assets/media/*.{png,jpg,jpeg,svg}', {
            eager: true,
            as: 'url',
        });

        setImages(Object.values(imageModules));
    }, []);

    return (
        <div className="flex flex-col space-y-5 p-5 md:p10 h-full overflow-hidden content-center justify-center">
            <Typography variant="h2">Intercepted Media</Typography>
            <div>
                <img className="m-auto h-auto max-w-full rounded-lg object-cover object-center" src={images[selected]} alt=""/>
            </div>
            <div className="flex flex-wrap w-full space-y-5 space-x-5 overflow-scroll justify-center p-2">
                {
                    images.map((image, idx) => <div onClick={() => setSelected(idx)}>
                        <img className={`h-auto w-20 md:w-40 lg:w-50 xl:w-60 rounded-lg ${selected == idx ? "scale-[105%] ring-2 ring-dark-red" : "cursor-pointer hover:scale-[105%]"}`} src={image} alt=""/>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Media;