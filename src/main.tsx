import * as React from "react"
import { ThemeProvider } from "@emotion/react"
import { lightModePalette, myBreakpoints } from "./theme"
import { Theme, createTheme } from "@mui/material/styles"

const defaultTheme = createTheme({
  palette: lightModePalette,
  breakpoints: myBreakpoints,
})

interface Props {
  children: React.ReactNode
  theme?: Theme
}

export const SalesProTheme: React.FC<Props> = ({ children, theme }) => (
  <ThemeProvider theme={theme ? theme : defaultTheme}>{children}</ThemeProvider>
)

export * from "./components/Button/Button"
