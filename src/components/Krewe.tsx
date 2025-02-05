import the_krewe from "@/assets/TheKrewe.jpg";
import { alpha, Box, Card } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { theme } from "../theme/theme.ts";
import { HexButton, HexImage } from "./utils/Hex.tsx";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { kreweId } from "../consts.ts";
import { agents } from "./utils/Agents.tsx";

class Agent {
    name: string;
    title: string;
    description: string;
    img: string;

    constructor(name: string, title: string, description: string, img: string) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.img = img;
    }
}

export function Krewe() {
    const [idx, setIdx] = useState(0);

    return (
        <Box
            id={kreweId}
            className="snap-item"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
            sx={{
                backgroundImage: `url(${the_krewe})`,
                backgroundSize: "cover",
                scrollSnapAlign: "start",
                pt: "3em",
            }}
        >
            <Typography variant="h3">Meet the Krewe:</Typography>
            <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="center"
            >
                {agents.map((a, i) => {
                    return (
                        <HexButton
                            size="clamp(40px, 3.5vw, 75px)"
                            onClick={() => setIdx(i)}
                            text={a.name}
                            fontSize={25}
                            clicked={i === idx}
                            mx={2}
                        />
                    );
                })}
            </Box>

            <Carousel
                sx={{
                    width: "45%",
                    margin: "auto",
                }}
                interval={5000}
                index={idx}
                navButtonsAlwaysInvisible={true}
                indicators={false}
                swipe={false}
                next={(now) => setIdx(now ?? agents.length - 1)}
                prev={(now) => setIdx(now ?? 0)}
            >
                {agents.map((agent) => (
                    <AgentItem agent={agent} />
                ))}
            </Carousel>
        </Box>
    );
}

function AgentItem(props: { agent: Agent }) {
    return (
        <Box display="flex" flexDirection="row" alignItems="center" mb={4}>
            <HexImage src={props.agent.img} size={"25vh"} borderColor="white" />
            <Card
                sx={{
                    backgroundColor: alpha(theme.palette.background.paper, 0.8),
                    width: "70%",
                    height: "100%",
                    ml: "3em",
                    p: "2em",
                    borderRadius: "1em",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h4">
                    {"Agent " + props.agent.name}
                </Typography>
                <Typography variant="caption">{props.agent.title}</Typography>
                <Typography variant="body1">
                    {props.agent.description}
                </Typography>
            </Card>
        </Box>
    );
}
