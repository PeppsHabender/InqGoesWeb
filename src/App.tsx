import './App.css';
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.ts";
import {Ref, useRef} from "react";
import {InquestAppBar} from "./components/InquestAppBar.tsx";
import {InquestParallax} from "./components/Parallax.tsx";
import {ImprovetimizedVision} from "./components/Improvetimized.tsx";
import {Krewe} from "./components/Krewe.tsx";
import {useComponentHeight} from "./hooks/ComponentHeight.tsx";
import {useScrollObserver} from "./hooks/CurrentSection.tsx";
import {InterceptedMedia} from "./components/Media.tsx";

function App() {
    const appBarRef: Ref<HTMLHeadElement> = useRef(null);

    const appBarHeight = useComponentHeight(appBarRef);
    const currentSection = useScrollObserver();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box display="flex" flexDirection="column" height="100vh">
                <InquestAppBar ref={appBarRef} currentSection={currentSection}/>
                <Box
                    sx={{
                        mt: appBarHeight + "px",
                        overflowY: "scroll",
                        scrollSnapType: "y mandatory",
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": {display: "none"},
                    }}
                >
                    <InquestParallax/>
                    <ImprovetimizedVision/>
                    <Krewe/>
                    <InterceptedMedia/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
