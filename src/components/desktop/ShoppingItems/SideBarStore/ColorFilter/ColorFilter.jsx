import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BrandItem from "./BrandItem/BrandItem";

const json = [
    {
      text: "honey width gold",
      inventory:"5",
      color:"blue"
    },
    {
      text: "sun kissed 80",
      inventory:"9",
      color:"red"
    },
    {
      text: "sunny coral",
      inventory:"6",
      color:"pink"
    }
  ];

const ColorFilter = () => {
  return (
    <>
      <Box border={"1px solid"} borderColor={"gray.300"} w={"100%"}>
        <VStack w={"100%"} p={4}>
          <Text
            fontSize={{ base: "sm", md: "xl", lg: "xl" }}
            fontWeight={{ base: "medium", md: "black", lg: "black" }}
            display={"flex"}
            justifyContent={"start"}
            bg={"gray.200"}
            py={2}
            px={{ base: "1", md: "4" }}
            w={"100%"}
          >فیلتر رنگ</Text>
          <Grid templateColumns="repeat(1, 1fr)" gap={6} py={"1rem"} w={"full"}>
              {json.map((item, index)=>{
                return <BrandItem key={index} color={item.color} inventory={item.inventory} text={item.text} />
              })}
          </Grid>
        </VStack>
      </Box>
    </>
  );
};

export default ColorFilter;
