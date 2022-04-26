import React from "react";
import { VStack, Box, Grid } from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import MainStoreItem from './MainStoreItem/MainStoreItem';

const MainStore = () => {
  return (
    <div className="w-100">
      <VStack>
        <Box  w={"full"}>
          <Grid>

          </Grid>
        </Box>

        <Box w={"full"}>
          <Grid
            templateColumns={{
              base:"repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg:"repeat(4, 1fr)",
            }}
          >
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />


          </Grid>
        </Box>
      </VStack>
    </div>
  );
};

export default MainStore;
