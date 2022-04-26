import React from "react";
import { GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const MainStoreItem = () => {
  return (
    <>
      <GridItem w={"full"} border={"1px solid"} borderColor={"gray.300"}>
        <Box mt={"1rem"}>
          <Image src="/assets/images/mainImages/dayOffers/comeon-cream-foot.jpg" />
        </Box>
        <Box
          my={"1rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack>
            <Text px={"1rem"} textAlign={"center"} >کرم ضد ترک پا کامان حجم ۳۰۰ میلی لیتر</Text>
            <Text color={"red"} py={"1rem"} fontWeight={"medium"}>
              ۳۵۰۰۰ تومان
            </Text>
          </VStack>
        </Box>
      </GridItem>
    </>
  );
};

export default MainStoreItem;
