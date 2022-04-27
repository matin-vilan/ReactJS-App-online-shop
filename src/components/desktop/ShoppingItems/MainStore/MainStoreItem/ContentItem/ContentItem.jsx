import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ContentItem = () => {
  return (
    <>
      <Box bg={"white"} zIndex={"2"} className={"contentItemContainer"}>
        <Text px={"1rem"} textAlign={"center"}>
          کرم ضد ترک پا کامان حجم ۳۰۰ میلی لیتر
        </Text>
        <Text
          display={"flex"}
          justifyContent={"center"}
          color={"shopPage.price"}
          pt={".4rem"}
          pb={".7rem"}
          fontWeight={"bold"}
          fontSize={"1.1rem"}
        >
          ۳۵۰۰۰ تومان
        </Text>
      </Box>
    </>
  );
};

export default ContentItem;
