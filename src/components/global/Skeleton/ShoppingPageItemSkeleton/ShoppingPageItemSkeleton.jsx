import React from "react";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const ShoppingPageItems = () => {
  return (
    <Box w={"90%"} bg={"white"} my={"1rem!important"}>
      <Skeleton w={"full"} height={"15rem"}></Skeleton>
      <SkeletonText
        noOfLines={2}
        my={"2rem"}
        w={"full"}
        height={"2rem"}
      ></SkeletonText>
      <Skeleton mx={"auto"} height={"1.5rem"} width={"50%"}></Skeleton>
    </Box>
  );
};

export default ShoppingPageItems;
