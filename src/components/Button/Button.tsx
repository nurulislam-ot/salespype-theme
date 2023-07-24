import * as React from "react"
import styled from "@emotion/styled"
import { Button, alpha } from "@mui/material"

const CoreButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  minWidth: "unset",

  "&.MuiButton-containedSecondary:focus": {
    backgroundColor: `#006DF5 !important`,
  },
  "&.MuiButton-containedSuccess:focus": {
    backgroundColor: `#008945 !important`,
  },
  "&.MuiButton-containedError:focus": {
    backgroundColor: `#ED0039 !important`,
  },
  "&.MuiButton-containedWarning:focus": {
    backgroundColor: `#F2994A !important`,
  },

  "&.lightErrorButton": {
    "&.MuiButton-containedError": {
      backgroundColor: alpha("#ED0039", 0.2),
      color: "#ED0039",
    },
    "&.MuiButton-containedError:focus": {
      backgroundColor: `${alpha("#ED0039", 0.2)} important`,
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
