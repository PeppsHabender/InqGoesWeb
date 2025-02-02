import {createTheme, darken, lighten, responsiveFontSizes} from "@mui/material";
import ZenDots from "@/assets/ZenDots-Regular.ttf";

declare module '@mui/material/styles' {
    interface Theme {
        gw2: {
            imperial_red: string,
            crimson_lion: string,
            red_lion: string,
            abyss: string,
            darker_abyss: string,
            tar: string
        };
    }

    interface ThemeOptions {
        gw2?: {
            imperial_red?: string,
            crimson_lion?: string,
            red_lion?: string,
            abyss?: string,
            darker_abyss?: string,
            tar?: string,
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
        tar: "rgb(6, 10, 19)"
    },
});

const zenDots = {fontFamily: "ZenDots"}

theme = createTheme(theme, {
    palette: {
        primary: {
            main: theme.gw2.red_lion,
            light: theme.gw2.imperial_red,
            dark: theme.gw2.crimson_lion
        },
        background: {
            default: theme.gw2.abyss,
            paper: theme.gw2.darker_abyss
        },
        text: {
            primary: "#ffffff",
        },
    },
    typography: {
        fontFamily: "ZenDots",
        textTransform: "none",
        h1: zenDots,
        h2: zenDots,
        h3: zenDots,
        h4: zenDots,
        h5: zenDots,
        h6: zenDots,
        caption: {
            color: lighten(theme.gw2.abyss, 0.6)
        }
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

theme = responsiveFontSizes(theme);