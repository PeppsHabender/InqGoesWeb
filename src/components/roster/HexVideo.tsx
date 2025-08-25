type HexVideoProps = {
    src?: string;
    className?: string;
}

const HexVideo = ({src, className = ""}: HexVideoProps) => {
    return (
        <div className={`relative overflow-hidden bg-black ${className}`}>
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="object-center"
                width="100%"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />

            <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <clipPath id="hexClip" clipPathUnits="userSpaceOnUse">
                        <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
                    </clipPath>
                </defs>

                <g clipPath="url(#hexClip)">
                    <polygon
                        points="50,0 100,25 100,75 50,100 0,75 0,25"
                        fill="none"
                        stroke="black"
                        strokeWidth="10"
                        opacity="0.7"
                    />
                    <polygon
                        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                        fill="none"
                        stroke="black"
                        strokeWidth="8"
                        opacity="0.6"
                    />
                    <polygon
                        points="50,9 91,29.5 91,70.5 50,91 9,70.5 9,29.5"
                        fill="none"
                        stroke="black"
                        strokeWidth="6"
                        opacity="0.5"
                    />
                    <polygon
                        points="50,12 88,31 88,69 50,88 12,69 12,31"
                        fill="none"
                        stroke="black"
                        strokeWidth="4"
                        opacity="0.3"
                    />
                </g>
            </svg>
        </div>
    );
};

export default HexVideo