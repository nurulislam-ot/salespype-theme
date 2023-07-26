import * as React from "react"
import { Button, ButtonProps, alpha, styled } from "@mui/material"

const StyledButton = styled(Button)<ButtonProps>(
  ({ theme, variant, color = "primary" }) => {
    if (variant === "tonal") {
      return {
        background: alpha(theme.palette[color as "primary"].main, 0.05),
        color: theme.palette[color as "primary"].main,
      }
    }
  }
)

export default StyledButton
