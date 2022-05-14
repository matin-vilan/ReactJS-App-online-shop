import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import "../../desktop/PostDetails/MainComponents/MainComponents.css";

const NavigateToPrevPage = () => {
  return (
    <Box
      className="newest"
      display={"flex"}
      alignItems={"center"}
      cursor={"pointer"}
    >
      <Box display={"flex"} alignItems={"end"} flexDirection={"column"}>
        <Text
          mb={"1rem"}
          color={{base:"black",md:"postPage.categoryTextColor"}}
          fontWeight={"bold"}
        >
          قدیمی تر
        </Text>
        <Text fontSize={".9rem"} display={{ base: "none", md: "block" }}>
          راهنمای خرید بهترین کادو برای روز دختر
        </Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"2px solid black"}
        borderRadius={"50%"}
        width={"2rem"}
        height={"2rem"}
        mr={"1rem"}
        className="nextIcon"
      >
        <Icon fontSize={"1.5rem"} as={MdOutlineNavigateBefore} />
      </Box>
    </Box>
  );
};

export default NavigateToPrevPage;
