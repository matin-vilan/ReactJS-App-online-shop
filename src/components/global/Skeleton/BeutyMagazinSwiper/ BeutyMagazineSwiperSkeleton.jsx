import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";

const BeutyMagazineSwiperSkeleton = () => {
  return (
    <>
      <Box display={"flex"}>
        <Box
          ml={"1rem"}
          padding={"1rem"}
          marginBottom={"2rem"}
          width={"22%"}
          boxShadow={"0 0 4px rgb(0 0 0 / 12%)"}
        >
          <Skeleton height={"15rem"} bg={"gray"} mb={"1.5rem"}></Skeleton>
          <Skeleton
            height={".8rem"}
            bg={"gray"}
            width={"80%"}
            mx={"auto"}
            mb={"1.5rem"}
          ></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton
            height={".5rem"}
            bg={"gray"}
            width={"75%"}
            mb={"1rem"}
          ></Skeleton>
        </Box>
        <Box
          ml={"1rem"}
          padding={"1rem"}
          marginBottom={"2rem"}
          width={"22%"}
          boxShadow={"0 0 4px rgb(0 0 0 / 12%)"}
        >
          <Skeleton height={"15rem"} bg={"gray"} mb={"1.5rem"}></Skeleton>
          <Skeleton
            height={".8rem"}
            bg={"gray"}
            width={"80%"}
            mx={"auto"}
            mb={"1.5rem"}
          ></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton
            height={".5rem"}
            bg={"gray"}
            width={"75%"}
            mb={"1rem"}
          ></Skeleton>
        </Box>
        <Box
          ml={"1rem"}
          padding={"1rem"}
          marginBottom={"2rem"}
          width={"22%"}
          boxShadow={"0 0 4px rgb(0 0 0 / 12%)"}
        >
          <Skeleton height={"15rem"} bg={"gray"} mb={"1.5rem"}></Skeleton>
          <Skeleton
            height={".8rem"}
            bg={"gray"}
            width={"80%"}
            mx={"auto"}
            mb={"1.5rem"}
          ></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton height={".5rem"} bg={"gray"} mb={"1rem"}></Skeleton>
          <Skeleton
            height={".5rem"}
            bg={"gray"}
            width={"75%"}
            mb={"1rem"}
          ></Skeleton>
        </Box>
      </Box>
    </>
  );
};

export default BeutyMagazineSwiperSkeleton;
