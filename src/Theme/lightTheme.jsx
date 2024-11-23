import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    text: {
      textprimary: "#091B29",
      textsecondary: "#51585E",
      texttertiary: "#717B85",
    },
    line: {
      line1: "#A9AFBC",
      line2: "#CACFDB",
    },
    background: {
      bg1: "#EDEFF2",
      bg2: "#F2F4F7",
      bg3: "#F5F7FA",
    },
    default: {
      white: "#FFFFFF",
    },
    primary: {
      main: "#009065",
      dark: "#006547",
      lite: "#D9EFE9",
    },
    secondary: {
      main: "#DFD328",
      dark: "#666114",
      lite: "#EFE992",
      a100: "#F9C300",
    },
  },
  typography: {
    text: {
      font1: "DM Sans",
      font2: "IBM Plex Serif",
    },
  },
});


