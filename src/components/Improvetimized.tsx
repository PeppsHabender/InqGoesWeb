import {Box, Card, Grid2, Stack} from "@mui/material";
import party_h from "@/assets/party_h.png";
import agent_p from "@/assets/agent_p.png";
import agent_b_cup from "@/assets/agent_b_cup.png";
import Typography from "@mui/material/Typography";
import inq_mug from "@/assets/inq_mug.png"
import {improvetimizedId} from "../consts.ts";

const StrategyBanner = () => (
    <Card
        sx={{
            p: 4,
            mt: 5,
            border: 1,
            boxShadow: 5,
            width: "100%",
            mx: "auto",
        }}
    >
        <Grid2
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
        >
            <Grid2 size={{xs: 12, md: 7}}>
                <Box>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Where Better <br/> Meets Best
                    </Typography>
                    <Typography variant="body1" sx={{mb: 2}}>
                        Welcome to the Improvetimized Strategy Krewe, where innovation and
                        teamwork come together in perfect harmony. By combining sharp
                        minds and sharper ambition, we forge plans that are not just
                        better but flawlessly executed. Every member of our krewe plays a
                        vital role, working in unison to streamline destruction, maximize
                        impact, and leave nothing to chance.
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{fontStyle: "italic", color: "gray.400"}}
                    >
                        The Improvetimized Strategy Krewe: Because “good enough” is for
                        amateurs, and mediocrity is so yesterday.
                    </Typography>
                </Box>
            </Grid2>

            <Grid2 size={{xs: 12, md: 5}} display="flex" justifyContent="center" marginRight={-8}>
                <Box
                    component="img"
                    src={inq_mug}
                    alt="Improvetimized Strategy Mug"
                    sx={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            </Grid2>
        </Grid2>
    </Card>
);

const ImageAndText = (
    {
        description,
        imgSrc,
        title
    }: {
        imgSrc: string,
        title: string,
        description: string
    }) => (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Box sx={{width: "60%", height: "60%"}}>
            <img src={imgSrc} alt="" className="hexagon" style={{height: "100%", width: "100%"}}/>
        </Box>
        <Typography variant="h4">{title}</Typography>
        <p style={{textAlign: "center"}}>{description}</p>
    </Box>
);

export function ImprovetimizedVision() {
    return (
        <Box
            id={improvetimizedId}
            className="snap-item"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            maxWidth="50%"
            marginLeft="25%"
            sx={{
                scrollSnapAlign: "start"
            }}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={10}>
                <ImageAndText imgSrc={party_h} title="Improved"
                              description="We boosted chaos by 238.9%! With 34% more explosions and 100% less restraint, our experiments are faster, louder, and brilliantly unstable. It’s not just better—it’s Improvetimized."/>
                <ImageAndText imgSrc={agent_p} title="Optimized"
                              description="At the Inquest, we removed inefficiencies like safety to bring you villainy at peak performance. With 200% more ambition and 67% less hesitation, domination has never been this streamlined."/>
                <ImageAndText imgSrc={agent_b_cup} title="Inquest"
                              description="Perfection isn’t impossible—it’s Inquest. Every device, disaster, and triumph carries our seal of brilliance. Why settle for less when you can have 100% Inquest? And that’s the only percentage that matters."/>
            </Stack>
            <StrategyBanner/>
        </Box>
    );
}


