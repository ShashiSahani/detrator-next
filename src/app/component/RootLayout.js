import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React from "react";
import ViewportMeta from "./ViewportMeta";
const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: red[700],
    },
    typography: {
      fontFamily: ["Arial", "sans-serif"].join(","),
    },
  },
});
function RootLayout({ children }) {
  return (
    <html>
      <ViewportMeta />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
