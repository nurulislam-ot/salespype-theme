import type {} from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    custom: true;
  }
}
