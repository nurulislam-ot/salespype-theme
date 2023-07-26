import { Components, PaletteOptions } from "@mui/material"

export const palette: PaletteOptions = {
  primary: {
    main: "#346FEF",
  },
  secondary: {
    main: "#924CFF",
  },
  error: {
    main: "#EC131F",
  },
  warning: {
    main: "#F79009",
    contrastText: "#fff",
  },
  info: {
    main: "#00BEC5",
  },
  success: {
    main: "#008951",
  },
}

export const components: Components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
        letterSpacing: "-0.05em",
        textTransform: "capitalize",
      },
      sizeMedium: {
        letterSpacing: "-0.2 px",
        fontSize: "14px",
      },
      sizeLarge: {
        letterSpacing: "-0.3 px",
        fontSize: "15px",
      },
      sizeSmall: {
        borderRadius: "6px",
        letterSpacing: "-0.1 px",
        fontSize: "13px",
        lineHeight: "20px",
      },
    },
  },
}
