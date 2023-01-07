import { createTheme } from "@mui/material";
export const themeLight = createTheme({
    palette: {
        background: {
            default: "white",
        },
        text: {
            primary: "#212121",
        }
    },
    bg: "white",
    bgDark: "white",
    bgLight: "hsl(0deg 0% 91%)",
    text: "#212121",
    textLight: "#606060",
    hr: 'rgb(0 0 0 / 10%)',
    textDark: 'black'
});

export const themeDark = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#212121",
        },
        text: {
            primary: "white",
        },
    },
    bg: "#212121",
    bgLight: "hsl(0deg 0% 19%)",
    bgDark: '#181818',
    text: "white",
    textLight: "#AAAAAA",
    hr: 'rgb(255 255 255 / 10%)',
    textDark: 'white'
});