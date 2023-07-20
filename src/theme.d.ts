import { Palette } from "@mui/material"

declare module "@mui/material/styles" {
  interface Palette {
    other: {
      [key: string]: string
    }
  }

  interface PaletteOptions {
    other: {
      [key: string]: string | Palette["primary"]
    }
  }

  interface PaletteColorOptions {
    [key: string]: string
  }
}
