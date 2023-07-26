import { Components, PaletteOptions } from "@mui/material"
import { TypographyOptions } from "@mui/material/styles/createTypography"

const inter = ["Inter", "sans-serif"].join(",")

const baseButtonStyle = {
  fontFamily: inter,
  fontWeight: 580,
  lineHeight: "24px",
}

export const typography: TypographyOptions = {
  "button-large": {
    ...baseButtonStyle,
    letterSpacing: "-0.3 px",
    fontSize: "15px",
  },

  "button-medium": {
    ...baseButtonStyle,
    letterSpacing: "-0.2 px",
    fontSize: "14px",
  },

  "button-small": {
    ...baseButtonStyle,
    letterSpacing: "-0.1 px",
    fontSize: "13px",
    lineHeight: "20px",
  },
}

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
    variants: [
      {
        props: { variant: "tonal" },
        style: {
          textTransform: "capitalize",
          color: "#004ABB",
          backgroundColor: "#346FEF0D",
        },
      },
    ],
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        boxShadow: "none",
        borderRadius: "8px",
        letterSpacing: "-0.05em",
        fontFamily: "Inter",
        textTransform: "capitalize",
      },
      sizeMedium: {
        ...typography["button-medium"],
      },
      sizeLarge: {
        ...typography["button-large"],
      },
      sizeSmall: {
        borderRadius: "6px",
        ...typography["button-large"],
      },
    },
  },
}
