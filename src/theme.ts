import { PaletteOptions } from "@mui/material"

export const lightModePalette: PaletteOptions = {
  mode: "light",
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  background: {
    paper: "#FFFFFF",
    default: "#F9FAFB",
  },
  text: {
    primary: "#1C1B1F",
    secondary: "#546376",
  },
  primary: {
    main: "#6258FF", // default
    // light: will be calculated from palette.primary.main,
    // dark: will be calculated from palette.primary.main and palette.action.hover,
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#006DF5",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#F2994A",
    contrastText: "#FFFFFF",
    light: "#FFDCC3",
    dark: "#944200",
  },
  error: {
    main: "#ED0039",
    light: "#ffdad9",
    dark: "#940015",
    contrastText: "#FFFFFF",
  },
  info: {
    main: "#A352C2",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#008945",
    light: "#baf0cb",
    contrastText: "#FFFFFF",
  },
  action: {
    active: "#949DB2",
    // actionHover: "rgba(98, 88, 255, 0.06)",
    hover: "rgba(100, 56, 188, 0.04)",
    hoverOpacity: 0.03,
    selected: "rgba(28, 15, 19, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(3, 6, 11, 0.26)",
    disabledBackground: "rgba(3, 6, 11, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(28, 15, 19, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

export const myBreakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    xxl: 1780,
  },
}