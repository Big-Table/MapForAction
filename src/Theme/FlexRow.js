import Box from "@material-ui/core/Box";
import React from "react";

export default function FlexRow({ children, ...props }) {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" {...props}>
      {children}
    </Box>
  );
}
