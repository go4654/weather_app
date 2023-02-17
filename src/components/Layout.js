import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box
      // bgColor="rgb(85,148,179)"

      h="100vh"
      maxW="400px"
      m="auto"
      px="20px"
      py="100px"
    >
      {children}
    </Box>
  );
};
