import { Box, Text } from "@chakra-ui/react";
import React from "react";
import MoreContent from "../MoreContent/MoreContent";

const ContentItem = () => {
  return (
    <>
      <Box bg={"white"} zIndex={"2"}>
        <Text px={"1rem"} textAlign={"center"}>
          کرم ضد ترک پا کامان حجم ۳۰۰ میلی لیتر
        </Text>
        <Text
          display={"flex"}
          justifyContent={"center"}
          color={"red"}
          py={"1rem"}
          fontWeight={"medium"}
        >
          ۳۵۰۰۰ تومان
        </Text>
      </Box>
    </>
  );
};

export default ContentItem;
