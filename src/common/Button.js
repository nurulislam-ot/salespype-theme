import styled from "@emotion/styled"
import { Button, alpha } from "@mui/material"

const CoreButton = styled(Button)(({ theme, backgroundColor }) => ({
  boxShadow: "none",
  minWidth: "unset",
  "&.MuiButton-contained:focus": {
    backgroundColor: `${
      backgroundColor ? backgroundColor : theme.palette.primary.main
    } !important`,
  },
  "&.MuiButton-containedSecondary:focus": {
    backgroundColor: `${theme.palette.secondary.main} !important`,
  },
  "&.MuiButton-containedSuccess:focus": {
    backgroundColor: `${theme.palette.success.main} !important`,
  },
  "&.MuiButton-containedError:focus": {
    backgroundColor: `${theme.palette.error.main} !important`,
  },
  "&.MuiButton-containedWarning:focus": {
    backgroundColor: `${theme.palette.warning.main} !important`,
  },

  "&.lightErrorButton": {
    "&.MuiButton-containedError": {
      backgroundColor: alpha(theme.palette.error.main, 0.2),
      color: theme.palette.error.main,
    },
    "&.MuiButton-containedError:focus": {
      backgroundColor: `${alpha(theme.palette.error.main, 0.2)} important`,
    },
  },
  "&.MuiButton-outlined:focus": {
    backgroundColor: "unset",
  },
  "&.MuiButton-text:focus": {
    backgroundColor: "unset",
  },

  "&.MuiButton-root:hover": {
    boxShadow: "none",
  },
  "&.MuiButton-sizeSmall": {
    fontSize: "13px",
    lineHeight: "22px",
    padding: "4px 10px",
  },
  "&.MuiButton-sizeMedium": {
    fontSize: "14px",
    lineHeight: "24px",
    padding: "6px 16px",
  },
  "&.MuiButton-sizeLarge": {
    padding: "8px 24px",
  },
  "&.MuiButton-sizeSmall .MuiSvgIcon-root": {
    fontSize: "18px",
  },
  "&.MuiButton-sizeMedium .MuiSvgIcon-root": {
    fontSize: "20px",
  },
  "&.MuiButton-sizeLarge .MuiSvgIcon-root": {
    fontSize: "24px",
  },
  "& .MuiCircularProgress-root": {
    position: "unset",
  },
}))

export default CoreButton
