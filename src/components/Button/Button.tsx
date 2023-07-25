import * as React from "react";
import { Button, ButtonProps } from "@mui/material";

type CustomButtonVariant = "text" | "outlined" | "contained" | "custom";

interface CustomButtonProps extends ButtonProps {
  variant?: CustomButtonVariant;
}

const CoreButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, variant = "contained", ...others }, ref) => (
    <Button ref={ref} variant="custom" {...others}>
      {children}
    </Button>
  )
);

export default CoreButton;
