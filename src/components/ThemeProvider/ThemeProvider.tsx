import React from "react"
import { Theme } from "@emotion/react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { lightModePalette, myBreakpoints } from "../../theme"

const defaultTheme = createTheme({
  palette: lightModePalette,
  breakpoints: myBreakpoints,
})

interface Props {
  children: React.ReactNode
  theme?: Theme
}

const SalesProTheme: React.FC<Props> = ({ children, theme }) => (
  <ThemeProvider theme={theme ? theme : defaultTheme}>{children}</ThemeProvider>
)

export default SalesProTheme
