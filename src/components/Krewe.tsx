import the_krewe from "@/assets/TheKrewe.jpg";
import { alpha, Box, Card, useMediaQuery } from "@mui/material";
import { theme } from "../theme/theme.ts";
import { HexButton, HexImage } from "./utils/Hex.tsx";
import Typography from "@mui/material/Typography";
import { useRef, useState } from "react";
import { kreweId } from "../consts.ts";
import { agents } from "./utils/Agents.tsx";
import { useComponentSize } from "../hooks/ComponentHeight.tsx";

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

const AgentItem = ({
    agent: { description, img, name, title },
}: {
    agent: Agent;
}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const cardRef = useRef<HTMLDivElement>(null);
    const { width: cardWidth, height: cardHeight } = useComponentSize(cardRef);

    return (
        <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems="center"
            justifyContent="center"
            mb={4}
            height="100%"
            maxWidth={isMobile ? "90%" : "50%"}
        >
            <Box
                flexGrow={isMobile ? 0 : 1}
                alignItems="center"
                justifyContent="center"
                mb={isMobile ? 2 : 0}
            >
                <HexImage
                    src={img}
                    size={`min(max(${cardWidth}px, ${cardHeight * 0.8}px), ${isMobile ? "30vh" : "20vh"})`}
                    borderColor="white"
                />
            </Box>
            <Card
                ref={cardRef}
                sx={{
                    backgroundColor: alpha(theme.palette.background.paper, 0.8),
                    maxHeight: "100%",
                    ml: isMobile ? 0 : "3em",
                    p: "2em",
                    borderRadius: "1em",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "start",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h4">{"Agent " + name}</Typography>
                <Typography variant="caption">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
            </Card>
        </Box>
    );
};

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
                pt: "3em",
            }}
        >
            <Typography variant="h3" gutterBottom>
                Meet the Krewe:
            </Typography>
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

            <AgentItem agent={agents[idx]} />
        </Box>
    );
}
