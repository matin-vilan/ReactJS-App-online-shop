import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function MoreContentText() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} width={"100%"} pb={"1rem"} px={"1rem"}>
        <Text color={"shopPage.gray"} display={"flex"} alignItems={"center"}>
          <Icon fontSize={".6rem"} as={IoIosArrowBack} mx={"0.5rem"} /> ساختاری
          ظریف
        </Text>
        <Text color={"shopPage.gray"} display={"flex"} alignItems={"center"}>
          <Icon fontSize={".6rem"} as={IoIosArrowBack} mx={"0.5rem"} /> ساختاری
          ظریف
        </Text>
        <Text color={"shopPage.gray"} display={"flex"} alignItems={"center"}>
          <Icon fontSize={".6rem"} as={IoIosArrowBack} mx={"0.5rem"} /> ساختاری
          ظریف
        </Text>
      </Box>
    </>
  );
}

export default MoreContentText;
