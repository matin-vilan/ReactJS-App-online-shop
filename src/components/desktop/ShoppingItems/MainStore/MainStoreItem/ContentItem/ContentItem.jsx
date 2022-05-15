import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ContentItem = ({ title }) => {
  return (
    <>
      <Box bg={"white"} zIndex={"2"} className={"contentItemContainer"}>
        <Text px={"1rem"} textAlign={"center"}>
          {title?.rendered}
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
