import { Box, Card, Stack } from "@mui/material";
import party_h from "@/assets/party_h.png";
import agent_p from "@/assets/agent_p.png";
import agent_b_cup from "@/assets/agent_b_cup.png";
import Typography from "@mui/material/Typography";
import inq_mug from "@/assets/inq_mug.png";
import { improvetimizedId } from "../consts.ts";

const StrategyBanner = () => {
    return (
        <Card
            component={Box}
            sx={{
                py: 4,
                pl: 4,
                border: 1,
                boxShadow: 5,
                width: "80%",
                height: "40%",
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
    >
        <Box
            component="img"
            src={imgSrc}
            className="hexagon"
            sx={{ width: 150, height: 150 }}
            flexShrink={0}
        />
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1" textAlign="center" overflow="hidden">
            {description}
        </Typography>
    </Box>
);

export function ImprovetimizedVision() {
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
            maxWidth="60%"
            mx="auto"
            p="1em"
            sx={{ scrollSnapAlign: "start" }}
        >
            <Stack
                direction="row"
                alignItems="start"
                justifyContent="center"
                spacing={10}
                maxHeight="50%"
                overflow="hidden"
            >
                <ImageAndText
                    imgSrc={party_h}
                    title="Improved"
                    description="We boosted chaos by 238.9%! With 34% more explosions and 100% less restraint, our experiments are faster, louder, and brilliantly unstable. It’s not just better—it’s Improvetimized."
                />
                <ImageAndText
                    imgSrc={agent_p}
                    title="Optimized"
                    description="At the Inquest, we removed inefficiencies like safety to bring you villainy at peak performance. With 200% more ambition and 67% less hesitation, domination has never been this streamlined."
                />
                <ImageAndText
                    imgSrc={agent_b_cup}
                    title="Inquest"
                    description="Perfection isn’t impossible—it’s Inquest. Every device, disaster, and triumph carries our seal of brilliance. Why settle for less when you can have 100% Inquest? And that’s the only percentage that matters."
                />
            </Stack>
            <StrategyBanner />
        </Box>
    );
}
