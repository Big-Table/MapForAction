import Box from "@material-ui/core/Box";
import React from "react";

export default function FlexColumn({ children, ...props }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  );
}
