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