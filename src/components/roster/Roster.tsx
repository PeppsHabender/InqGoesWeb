import Hexagon from "../Hexagon.tsx";
import roster from "../../assets/roster/roster.json";
import HexVideo from "./HexVideo.tsx";
import {useEffect, useRef, useState} from "react";
import Typography from "../Typography.tsx";
import {useWindowDimensions} from "../../hooks.tsx";

const rosterSorted = roster.sort((a, b) => a.key.localeCompare(b.key));

type SelectionBarProps = {
    setSelected: (agent: number) => void;
    selected: number;
    clientWidth: number;
}

const SelectionBar = ({selected, setSelected, clientWidth}: SelectionBarProps) => {
    const hexWidth = Math.min(80, Math.max(40, (clientWidth / rosterSorted.length * 2) - 50))
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="justify-center sticky w-full top-5 gap-5 flex flex-wrap z-10">
            {
                rosterSorted.map(({key}, idx) => {
                    return <div
                        onClick={() => setSelected(idx)}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        className="hover:cursor-pointer"
                    >
                        <Hexagon
                            height={hexWidth}
                            width={hexWidth}
                            strokeColor={hovered == idx || selected == idx ? "red" : "rgb(153, 0, 0)"}
                            strokeWidth={2}
                            className="content-center"
                        >
                            <div className="size-full bg-black/75 content-center">
                                <span
                                    className="inline-block align-middle"
                                    style={{fontSize: hexWidth / 2.5, fontFamily: "ZenDots"}}>{key.toUpperCase()}
                                </span>
                            </div>
                        </Hexagon>
                    </div>
                })
            }
        </div>
    )
}

const Roster = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { height, width } = useWindowDimensions();
    const isVertical = width / height < 1.2;

    const [selected, setSelected] = useState(0);
    const selectedAgent = rosterSorted[selected];

    const [agentVids, setAgentVids] = useState<string[]>([]);
    useEffect(() => {
        const videoModules = import.meta.glob('/src/assets/roster/*.mp4', {
            eager: true,
            as: 'url',
        });
        console.log(videoModules)

        setAgentVids(Object.values(videoModules));
    }, []);

    return (
        <div className="relative p-5 flex flex-col" ref={ref}>
            <Typography variant="h2" className="pb-5">The Krewe</Typography>
            <SelectionBar selected={selected} setSelected={setSelected} clientWidth={width}/>
            <div
                className={`relative flex space-x-10 ${isVertical ? "flex-col items-center" : "flex-row items-start justify-center"}`}>
                <HexVideo src={agentVids.filter(v => v.includes(selectedAgent.vid.replace(" ", "%20"))).at(0)}
                          className={`absolute flex-auto my-10 ${isVertical ? "mx-auto" : ""}`}/>
                <div
                    className={`relative space-y-1.5 my-auto bg-zinc-900 px-6 pt-10 pb-8 rounded-lg ring-1 ring-dark-red mx-auto sm:max-w-200 sm:px-10 shadow-[inset_0px_0px_20px_10px_black]`}>
                    <Typography variant="h7"
                                className="text-left">{"Agent " + selectedAgent.key.toUpperCase()}</Typography>
                    <Typography variant="body-small"
                                className="text-left text-zinc-400">{selectedAgent?.title}</Typography>
                    <Typography variant="body" className="text-left">{selectedAgent?.description}</Typography>
                </div>
            </div>
            <div className="shadow-[inset_0_10px_5px_-2px_rgba(0,0,0,0.8)] p-7 bg-zinc-900 -mx-5"/>
            <div className="w-full bg-black z-11">
                <div className="mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 aspect-video max-w-[960px]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/RaseuOP2Gds?si=jDcbtZIyyxIv8slC"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className="shadow-[inset_0_-10px_5px_-2px_rgba(0,0,0,0.8)] p-7 bg-zinc-900 -mx-5"/>
        </div>
    );
}

export default Roster;