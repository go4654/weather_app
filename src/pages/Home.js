import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";

export const Home = () => {
  const { data, isLoading } = useQuery(["weather"], getWeather);
  console.log(data);
  return <Box>Home</Box>;
};
