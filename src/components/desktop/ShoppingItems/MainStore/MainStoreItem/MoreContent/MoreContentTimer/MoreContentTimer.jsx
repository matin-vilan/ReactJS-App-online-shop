import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const MoreContentTimer = () => {
  return (
    <>
      <Box w={"full"} pb={".5rem"}>
        <Grid
          templateColumns={"repeat(4,1fr)"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <GridItem>
            <Box display={"flex"} flexDirection={"column"}>
              <Text>۱۳</Text>
              <Text>روز</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box display={"flex"} flexDirection={"column"}>
              <Text>۱۳</Text>
              <Text>ساعت</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box display={"flex"} flexDirection={"column"}>
              <Text>۱۳</Text>
              <Text>دقیقه</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box display={"flex"} flexDirection={"column"}>
              <Text>۱۳</Text>
              <Text>ثانیه</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default MoreContentTimer;
