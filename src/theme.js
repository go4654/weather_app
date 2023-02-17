import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `"Noto Sans KR", sans-serif`,
    body: `"Noto Sans KR", sans-serif`,
  },
});

export default theme;
