import React from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@emotion/react"
import { theme as themeOption } from "./theme"
import { createTheme } from "@mui/material"

const root = createRoot(document.getElementById("root"))

const theme = createTheme(themeOption)

export const SalesProTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
