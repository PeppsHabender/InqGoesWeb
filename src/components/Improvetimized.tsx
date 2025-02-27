import { Box, Card, Stack, useMediaQuery } from "@mui/material";
import party_h from "@/assets/party_h.png";
import agent_p from "@/assets/agent_p.png";
import agent_b_cup from "@/assets/agent_b_cup.png";
import Typography from "@mui/material/Typography";
import inq_mug from "@/assets/inq_mug.png";
import { improvetimizedId } from "../consts.ts";
import { theme } from "../theme/theme.ts";
import Carousel from "react-material-ui-carousel";
import { ReactNode } from "react";

const StrategyBanner = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Card
            component={Box}
            sx={{
                py: 4,
                pl: 4,
                pr: isMobile ? 4 : 0,
                border: 1,
                boxShadow: 5,
                height: isMobile ? "auto" : "40%",
                overflowY: "hidden",
            }}
        >
            <Box
                display="flex"
                flexDirection="row"
                height="100%"
                overflow="hidden"
            >
                <Box height="100%" display="flex" flexDirection="column">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Where Better <br /> Meets Best
                    </Typography>
                    <Box height="100%" sx={{ overflowY: "scroll" }}>
                        <Typography variant="body2">
                            Welcome to the Improvetimized Strategy Krewe, where
                            innovation and teamwork come together in perfect
                            harmony. By combining sharp minds and sharper
                            ambition, we forge plans that are not just better
                            but flawlessly executed. Every member of our krewe
                            plays a vital role, working in unison to streamline
                            destruction, maximize impact, and leave nothing to
                            chance.
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            sx={{ color: "gray.400" }}
                        >
                            The Improvetimized Strategy Krewe: Because “good
                            enough” is for amateurs, and mediocrity is so
                            yesterday.
                        </Typography>
                    </Box>
                </Box>
                {!isMobile && (
                    <Box
                        component="img"
                        src={inq_mug}
                        alt="Improvetimized Strategy Mug"
                        flexShrink="0"
                        sx={{
                            height: "100%",
                            width: "auto",
                            aspectRatio: 1,
                            mr: "-3vw",
                            objectFit: "cover",
                        }}
                    />
                )}
            </Box>
        </Card>
    );
};

const ImageAndText = ({
    description,
    imgSrc,
    title,
}: {
    imgSrc: string;
    title: string;
    description: string;
}) => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100%"
    >
        <Box
            component="img"
            src={imgSrc}
            className="hexagon"
            flexShrink={0}
            sx={{ height: 150, width: 150 }}
        />
        <Box height="100%">
            <Typography variant="h4" textAlign="center">
                {title}
            </Typography>
            <Typography variant="body1" textAlign="center" overflow="hidden">
                {description}
            </Typography>
        </Box>
    </Box>
);

const inqValues: ReactNode[] = [
    <ImageAndText
        imgSrc={party_h}
        title="Improved"
        description="We boosted chaos by 238.9%! With 34% more explosions and 100% less restraint, our experiments are faster, louder, and brilliantly unstable. It’s not just better—it’s Improvetimized."
    />,
    <ImageAndText
        imgSrc={agent_p}
        title="Optimized"
        description="At the Inquest, we removed inefficiencies like safety to bring you villainy at peak performance. With 200% more ambition and 67% less hesitation, domination has never been this streamlined."
    />,
    <ImageAndText
        imgSrc={agent_b_cup}
        title="Inquest"
        description="Perfection isn’t impossible—it’s Inquest. Every device, disaster, and triumph carries our seal of brilliance. Why settle for less when you can have 100% Inquest? And that’s the only percentage that matters."
    />,
];

export function ImprovetimizedVision() {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            component="div"
            id={improvetimizedId}
            className="snap-item"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            height="100%"
            overflow="hidden"
            maxWidth={isMobile ? "80%" : "60%"}
            mx="auto"
            p="1em"
        >
            {isMobile ? (
                <Box height="auto" width="100%" mt="-3em">
                    <Carousel children={inqValues} sx={{ height: "100%" }} />
                </Box>
            ) : (
                <Stack
                    children={inqValues}
                    direction="row"
                    alignItems="start"
                    justifyContent="center"
                    spacing={10}
                    maxHeight="50%"
                    overflow="hidden"
                />
            )}
            <StrategyBanner />
        </Box>
    );
}
