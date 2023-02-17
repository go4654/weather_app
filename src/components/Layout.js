import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box
      // bgColor="rgb(85,148,179)"
      maxW="400px"
      m="auto"
    >
      {children}
    </Box>
  );
};
