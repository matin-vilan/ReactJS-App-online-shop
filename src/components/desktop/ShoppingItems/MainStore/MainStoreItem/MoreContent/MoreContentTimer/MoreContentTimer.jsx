import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const MoreContentTimer = () => {
  return (
    <>
      <Box w={"full"} pb={"1rem"}>
        <Grid
          templateColumns={"repeat(4,1fr)"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <GridItem>
            <Box display={"flex"} flexDirection={"column"}>
              <Text textAlign={"center"} fontSize={"xl"} fontWeight={"black"}>
                ۱۳
              </Text>
              <Text
                fontWeight={"light"}
                textAlign={"center"}
                color={"shopPage.iconHover"}
                fontSize={"xx-small"}
              >
                روز
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box display={"flex"} flexDirection={"column"}>
              <Text textAlign={"center"} fontSize={"xl"} fontWeight={"black"}>
                ۱۳
              </Text>
              <Text
                fontWeight={"light"}
                textAlign={"center"}
                color={"shopPage.iconHover"}
                fontSize={"xx-small"}
              >
                ساعت
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box display={"flex"} flexDirection={"column"}>
              <Text textAlign={"center"} fontSize={"xl"} fontWeight={"black"}>
                ۱۳
              </Text>
              <Text
                fontWeight={"light"}
                textAlign={"center"}
                color={"shopPage.iconHover"}
                fontSize={"xx-small"}
              >
                دقیقه
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box display={"flex"} flexDirection={"column"}>
              <Text textAlign={"center"} fontSize={"xl"} fontWeight={"black"}>
                ۱۳
              </Text>
              <Text
                fontWeight={"light"}
                textAlign={"center"}
                color={"shopPage.iconHover"}
                fontSize={"xx-small"}
              >
                ثانیه
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default MoreContentTimer;
