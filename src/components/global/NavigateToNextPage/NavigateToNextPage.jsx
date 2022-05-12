import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import "../../desktop/PostDetails/MainComponents/MainComponents.css";

const NavigateToNextPage = () => {
  return (
    <Box
      className="newest"
      display={"flex"}
      alignItems={"center"}
      cursor={"pointer"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"2px solid black"}
        borderRadius={"50%"}
        width={"2rem"}
        height={"2rem"}
        ml={"1rem"}
        className="nextIcon"
      >
        <Icon fontSize={"1.5rem"} as={MdOutlineNavigateNext} />
      </Box>
      <Box>
        <Text
          mb={"1rem"}
          color={"postPage.categoryTextColor"}
          fontWeight={"bold"}
        >
          جدیدتر
        </Text>
        <Text fontSize={".9rem"}>راهنمای خرید بهترین کادو برای روز دختر</Text>
      </Box>
    </Box>
  );
};

export default NavigateToNextPage;
