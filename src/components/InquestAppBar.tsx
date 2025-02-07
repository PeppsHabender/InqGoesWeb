import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { theme } from "../theme/theme.ts";
import React from "react";
import { home, improvetimizedId, kreweId, mediaId } from "../consts.ts";
import { Box, lighten, useMediaQuery } from "@mui/material";

const SectionButton = ({
    currentSection,
    sectionId,
    title,
}: {
    sectionId: string;
    title: string;
    currentSection: string | null;
}) => {
    const selected = currentSection === sectionId;

    return (
        <Button
            sx={{
                color: selected
                    ? theme.palette.common.white
                    : lighten(theme.gw2.abyss, 0.65),
            }}
            onClick={selected ? undefined : () => scrollTo(sectionId)}
        >
            <Typography variant="body1">{title}</Typography>
        </Button>
    );
};

interface AppBarProps {
    currentSection: string | null;
}

export const InquestAppBar = React.forwardRef<HTMLHeadElement, AppBarProps>(
    ({ currentSection }, ref) => {
        const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

        return (
            <AppBar
                ref={ref}
                sx={{
                    bgcolor: theme.gw2.darker_abyss,
                    position: "fixed",
                    width: "100%",
                }}
            >
                <Toolbar
                    sx={{
                        marginRight: isMobile ? 0 : "20%",
                        marginLeft: isMobile ? 0 : "20%",
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                        onClick={
                            currentSection === home
                                ? undefined
                                : () => scrollTo(home)
                        }
                    >
                        <img src="/favicon.ico" alt="inq" />
                    </IconButton>
                    <Typography variant="h5" component="div">
                        Join the Inquest
                    </Typography>
                    <div style={{ flexGrow: 1 }} />

                    {!isMobile && (
                        <Box>
                            <SectionButton
                                sectionId={home}
                                title="Home"
                                currentSection={currentSection}
                            />
                            <SectionButton
                                sectionId={improvetimizedId}
                                title="About"
                                currentSection={currentSection}
                            />
                            <SectionButton
                                sectionId={kreweId}
                                title="Krewe"
                                currentSection={currentSection}
                            />
                            <SectionButton
                                sectionId={mediaId}
                                title="Media"
                                currentSection={currentSection}
                            />
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        );
    },
);

function scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
}
