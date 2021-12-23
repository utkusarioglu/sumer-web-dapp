import type { FC } from "react";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectColorMode } from "_slices/app/app.slice";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import shadows from "@mui/material/styles/shadows";
import type { Shadows } from "@mui/material/styles/shadows";
import type { ThemeOptions } from "@mui/material/styles";

const common: ThemeOptions = {
  shape: {
    borderRadius: 15,
  },
  shadows: shadows.map(() => "none") as Shadows,
};

const lightTheme: ThemeOptions = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: "#FF0000",
        // colorDefault: "#FF0000",
        // backgroundColor: gray[0],
        // color: "#fff",
      },
    },
  },
};

const darkTheme: ThemeOptions = {};

const Theme: FC<{}> = ({ children }) => {
  const mode = useSelector(selectColorMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        ...(mode === "dark" ? darkTheme : lightTheme),
        ...common,
      }),
    [mode]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
