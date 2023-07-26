import React from "react"
import { Theme } from "@emotion/react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { components, palette, typography } from "../../theme"

declare module "@mui/material/styles" {
  // interface Palette {
  //   hello: Palette["primary"]
  // }

  // interface PaletteOptions {
  //   hello?: PaletteOptions["primary"]
  // }

  // interface SimplePaletteColorOptions {
  //   darker?: string
  // }

  // interface PaletteColor {
  //   darker?: string
  // }

  // interface SimplePaletteColorOptions {
  //   darker?: string
  // }

  interface TypographyVariants {
    "button-small": React.CSSProperties
    "button-medium": React.CSSProperties
    "button-large": React.CSSProperties
  }

  interface TypographyVariantsOptions {
    "button-small"?: React.CSSProperties
    "button-medium"?: React.CSSProperties
    "button-large"?: React.CSSProperties
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tonal: true
  }
}

const defaultTheme = createTheme({
  typography,
  palette,
  components,
})

interface Props {
  children: React.ReactNode
  theme?: Theme
}

const SalesProTheme: React.FC<Props> = ({ children, theme }) => (
  <ThemeProvider theme={theme ? theme : defaultTheme}>{children}</ThemeProvider>
)

export default SalesProTheme
