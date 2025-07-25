import Hexagon from "../Hexagon.tsx";
import agent_a from "../../assets/agent_vids/agent_a.mp4"
import agent_b from "../../assets/agent_vids/agent_b.mp4"
import agent_c from "../../assets/agent_vids/agent_c.mp4"
import agent_h from "../../assets/agent_vids/agent_h.mp4"
import agent_j from "../../assets/agent_vids/agent_j.mp4"
import agent_l from "../../assets/agent_vids/agent_l.mp4"
import agent_n from "../../assets/agent_vids/agent_n.mp4"
import agent_p from "../../assets/agent_vids/agent_p.mp4"
import agent_s from "../../assets/agent_vids/agent_s.mp4"
import agent_x from "../../assets/agent_vids/agent_x.mp4"
import agent_z from "../../assets/agent_vids/agent_z.mp4"
import HexVideo from "./HexVideo.tsx";
import {useRef, useState} from "react";
import Typography from "../Typography.tsx";
import {useWindowDimensions} from "../../hooks.tsx";

const agents = new Map([
    ["a", {
        title: "Spirited Motivator and Reluctant Inspiration",
        description:
            "Agent A's unconventional methods and love for \"liquid courage\" make him a wild card, but his knack for boosting morale is unmatched. Whether lifting spirits or lifting heavy objects (while slightly tipsy), his humor and heart keep the krewe grounded in their mission.",
        vid: agent_a,
    }],
    ["b", {
        title: "Shadow Operative and Silent Eliminator",
        description:
            "When subtlety is key, Agent B is already three steps ahead. A master of stealth and precision, Agent B operates in the shadows, ensuring that obstacles simply… disappear. Efficiency, discretion, and ruthless focus define her every move.",
        vid: agent_b,
    }],
    ["c", {
        title: "Burned-Out, Buffed Up",
        description: "He'd rather be pulling five-stars in his favorite gacha, but when the krewe needs him most, he’s always there-on time, on point, and boosting everyone’s speed like it’s second nature. He may not look motivated, but his quickness keeps the team moving and the mission alive.",
        vid: agent_c,
    }],
    ["h", {
        title: "The Visionary Overseer of Improvetimized Excellence",
        description:
            "Agent H isn't just a leader; he's the beating heart of the Improvetimized Strategy Krewe. With a mind for innovation and a commanding presence, Agent H ensures every scheme is as bold as it is brilliant. He unites the krewe under a single vision: flawless domination through science, ingenuity, and unwavering determination.",
        vid: agent_h,
    }],
    ["j", {
        title: "The Architect of Calculated Chaos",
        description:
            "As the krewe's master strategist, Agent J is the brain behind every breakthrough. From intricate plans to decisive adjustments in the heat of battle, Agent J's strategies turn possibilities into inevitabilities. He doesnt't just think outside the box-he redesigns it to fit his own rules.",
        vid: agent_j,
    }],
    ["l", {
        title: "Digital Demolisher and Damage Specialist",
        description:
            "With unmatched hacking prowess and devastating firepower, Agent L is a one-person whirlwind of destruction. Whether breaking through enemy systems or breaking enemies themselves, Agent L's talents ensure no line of defense stands for long. In their hands, chaos is not just a tool-it's an art form.",
        vid: agent_l,
    }],
    ["n", {
        title: "Eager Apprentice and New Blood",
        description:
            "The youngest member of the krewe, Agent N brings fresh energy and untested potential to the team. His wide-eyed enthusiasm and willingness to learn have made him an instant favorite (and target of lighthearted pranks). Don't let his inexperience fool you-he's already proving his worth.",
        vid: agent_n,
    }],
    ["p", {
        title: "The Analyst of Order and Unshakable Clarity",
        description: "A recent addition to the krewe, Agent P brings both damage and dependable support with a calm, calculated approach. While chaos reigns around him, he sees the patterns others miss-and acts with purpose. For Agent P, everything makes sense, and that quiet confidence turns every move into a precise contribution to victory.",
        vid: agent_p,
    }],
    ["s", {
        title: "The Unbreakable Wall with Questionable Vibes",
        description: "Agent S takes hits like a champ and dishes out jokes just as hard-but don’t let the laughter fool you. Behind the shield is a specialist who thrives on pushing buttons (enemies’ and teammates’ alike). Equal parts hilarious and hazardous, Agent S is the kind of tank you love having on your side… most of the time.",
        vid: agent_s,
    }],
    ["x", {
        title: "Arcane Conductor of Absolute Power",
        description:
            "Agent X wields magic with precision and artistry, channeling forces that others barely comprehend. A masterful caster and the krewe's go-to for magical solutions, his presence ensures every experiment is as spectacular as it is effective. For Agent X, power isn't just a tool-it's his symphony.",
        vid: agent_x,
    }],
    ["z", {
        title: "Madness Incarnate and Chaos Personified",
        description:
            "To call Agent Z unpredictable would be unhinged, but they have a knack for delivering results no one else could imagine-or survive.",
        vid: agent_z,
    }],
]);

type SelectionBarProps = {
    setSelected: (agent: string) => void;
    selected: string;
    clientWidth: number;
}

const SelectionBar = ({selected, setSelected, clientWidth}: SelectionBarProps) => {
    const hexWidth = Math.min(100, Math.max(40, (clientWidth / agents.size * 2) - 30))
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="justify-center sticky w-full top-5 gap-5 flex flex-wrap z-10">
            {
                Array.from(agents, ([key]) => {
                    // Do something with key and value
                    return <div
                        onClick={() => setSelected(key)}
                        onMouseEnter={() => setHovered(key)}
                        onMouseLeave={() => setHovered(null)}
                        className="hover:cursor-pointer"
                    >
                        <Hexagon
                            height={hexWidth}
                            width={hexWidth}
                            strokeColor={hovered == key || selected == key ? "red" : "rgb(153, 0, 0)"}
                            strokeWidth={2}
                            className="content-center"
                        >
                                <span
                                    className="inline-block align-middle"
                                    style={{fontSize: hexWidth / 2.5, fontFamily: "ZenDots"}}>{key.toUpperCase()}
                                </span>
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

    const [selected, setSelected] = useState("a");
    const selectedAgent = agents.get(selected);

    return (
        <div className="relative p-5 flex flex-col" ref={ref}>
            <Typography variant="h2" className="pb-5">The Krewe</Typography>
            <SelectionBar selected={selected} setSelected={setSelected} clientWidth={width}/>
            <div className={`relative flex space-x-10 ${isVertical ? "flex-col items-center" : "flex-row items-start justify-center"}`}>
                <HexVideo src={selectedAgent?.vid} className="absolute flex-auto my-10"/>
                <div className={`relative space-y-1.5 my-auto bg-zinc-900 px-6 pt-10 pb-8 rounded-lg ring-1 ring-dark-red mx-auto sm:max-w-200 sm:px-10 shadow-[inset_0px_0px_20px_10px_black]`}>
                    <Typography variant="h7" className="text-left">{"Agent " + selected.toUpperCase()}</Typography>
                    <Typography variant="body-small" className="text-left text-zinc-400">{selectedAgent?.title}</Typography>
                    <Typography variant="body" className="text-left">{selectedAgent?.description}</Typography>
                </div>
            </div>
        </div>
    );
}

export default Roster;