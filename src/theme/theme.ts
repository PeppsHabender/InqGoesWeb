import {
    createTheme,
    darken,
    lighten,
    responsiveFontSizes,
} from "@mui/material";
import ZenDots from "@/assets/ZenDots-Regular.ttf";

declare module "@mui/material/styles" {
    interface Theme {
        gw2: {
            imperial_red: string;
            crimson_lion: string;
            red_lion: string;
            abyss: string;
            darker_abyss: string;
            tar: string;
        };
    }

    interface ThemeOptions {
        gw2?: {
            imperial_red?: string;
            crimson_lion?: string;
            red_lion?: string;
            abyss?: string;
            darker_abyss?: string;
            tar?: string;
        };
    }
}

export let theme = createTheme({
    gw2: {
        imperial_red: "#ed2939",
        crimson_lion: "rgb(129, 0, 0)",
        red_lion: "rgb(212, 3, 3)",
        abyss: "rgb(26, 24, 27)",
        darker_abyss: darken("rgb(26, 24, 27)", 0.6),
        tar: "rgb(6, 10, 19)",
    },
});

function headline(fontSize: number) {
    return {
        fontFamily: "ZenDots",
        "font-size": `clamp(${12 * fontSize}px, ${fontSize}vw, 50px)`,
    };
}

theme = createTheme(theme, {
    palette: {
        primary: {
            main: theme.gw2.red_lion,
            light: theme.gw2.imperial_red,
            dark: theme.gw2.crimson_lion,
        },
        background: {
            default: theme.gw2.abyss,
            paper: theme.gw2.darker_abyss,
        },
        text: {
            primary: "#ffffff",
            secondary: lighten(theme.gw2.abyss, 0.6),
        },
    },
    typography: {
        fontFamily: "ZenDots",
        textTransform: "none",
        h1: headline(1.8),
        h2: headline(1.6),
        h3: headline(1.5),
        h4: headline(1.45),
        h5: headline(1.4),
        h6: headline(1.35),
        caption: {
            color: lighten(theme.gw2.abyss, 0.6),
        },
        body1: {
            "font-size": `clamp(11px, 1.3vw, 20px)`,
        },
        body2: {
            "font-size": `clamp(10.5px, 1.2vw, 18px)`,
        },
        subtitle1: {
            "font-size": `clamp(10px, 1.1vw, 16px)`,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  font-family: 'ZenDots';
                  font-style: normal;
                  font-display: swap;
                  font-weight: 400;
                  src: local('ZenDots'), local('ZenDots'), url(${ZenDots}) format('truetype');
                }
            `,
        },
    },
});

theme = responsiveFontSizes(theme, { factor: 5 });
