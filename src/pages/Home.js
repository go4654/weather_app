import { Box, Heading, Img, Text, VStack, HStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getWeather } from "../api";
import { Layout } from "../components/Layout";
import { base, ICON_URL, rain, sun } from "../Info";
import { useCurrentLocation } from "../lib/useCurrentLocation";

export const Home = () => {
  const [bgColor, setBgColor] = useState();
  const [icon, setIcon] = useState();
  const { lat, lon } = useCurrentLocation();

  const { data, isLoading } = useQuery(["weather", lat, lon], getWeather, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    if (data?.weather[0].main === "Rain") {
      setBgColor(rain.bg);
    } else if (data?.weather[0].main === "Sun") {
      setBgColor(sun.bg);
    } else {
      setBgColor(base.bg);
    }
    if (data?.weather[0].icon) {
      setIcon(data?.weather[0].icon);
    }
  }, [data]);
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();

  return (
    <Layout>
      <>
        {isLoading ? (
          ""
        ) : (
          <>
            {data && (
              <VStack
                background={bgColor}
                h="100vh"
                pt="30px"
                pb="100px"
                justifyContent={"space-between"}
              >
                <VStack w="100%" textAlign={"center"} mt="30px" color={"white"}>
                  <Heading fontWeight={400}>{data.name}</Heading>
                  <Box>{`${hour}시 ${min}분`}</Box>

                  <Box w="30%">
                    <Img w="100%" src={`${ICON_URL}${icon}@2x.png`} />
                  </Box>

                  <Heading pl="40px" fontSize={"100px"} fontWeight="500">
                    {Math.round(data.main.temp)}°
                  </Heading>

                  <Text fontSize={"20px"}>{data?.weather[0].main}</Text>
                </VStack>

                <Box w="45px" h="2px" bgColor={"gray.100"}></Box>

                <HStack
                  letterSpacing={"-1px"}
                  color="white"
                  w="100%"
                  justifyContent={"space-evenly"}
                >
                  <VStack>
                    <Text fontSize="20px" fontWeight={600}>
                      {data.main.feels_like}°
                    </Text>
                    <Box>체감 온도</Box>
                  </VStack>

                  <Box w="1px" h="35px" bgColor={"gray.100"}></Box>

                  <VStack>
                    <Text fontSize="20px" fontWeight={600}>
                      {data.main.humidity}%
                    </Text>
                    <Box>습도</Box>
                  </VStack>

                  <Box w="1px" h="35px" bgColor={"gray.100"}></Box>

                  <VStack>
                    <Text fontSize="20px" fontWeight={600}>
                      {data.wind.speed} m/s
                    </Text>
                    <Box>바람 속도</Box>
                  </VStack>
                </HStack>
              </VStack>
            )}
          </>
        )}
      </>
    </Layout>
  );
};
