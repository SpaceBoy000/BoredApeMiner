import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 255, 255)",
    },
    secondary: {
      main: "#f4b52d",
    },
    purple: {
      main: "#111827",
    },
    text: {
      primary: "black",
      secondary: "#ffbb00",
    },
  },
  button: {
    primary: {
      main: "#000000e6",
    },
    secondary: {
      main: '#03989e',
    }
  },
  typography: {
    fontFamily: "Roboto",
    body1: {  //NFT Labels
      fontSize: 16,
      fontWeight: "bolder",
      opacity:'0.7',
    },
    body2: {
      fontSize: 16,
    },
    body5: {
      fontSize: 40,
      color: 'white',
      fontWeight: 900,
      padding:'10px',
    },
    body6: {
      fontSize: 40,
      color: "rgb(123,63,228)",
      fontWeight: 900,
    },
    body7: {
      fontSize: 20,
      color: "white",
      fontWeight: 900,
      opacity:'0.7'
    },
    allVariants: {
      color: "white", // "rgb(224, 224, 224)",
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
      fontSize: 46,
    },
    h4: {
      fontWeight: 600,
      fontSize: 32,
    },
    h5: { // NFT Card title
      fontSize: 25,
      fontWeight: 700,
      color: 'white',
      padding:'10px 0px',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "6px 6px 20px 6px #00000096",
          borderRadius: 20,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "12px 24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 400,
          fontSize: "1.2rem",
          padding: "10px",
          minWidth: 138,
        },
        contained: {
          boxShadow: "6px 6px 20px 6px #00000096",
        },
        containedSecondary: {
          color: "#17215E",
        },
      },
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
