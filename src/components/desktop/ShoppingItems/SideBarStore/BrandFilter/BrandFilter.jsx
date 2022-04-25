import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BrandItem from "./BrandItem/BrandItem";

const json = [
  {
    text: "اسکالره",
    src: "eclaree.png",
    inventory:"5"
  },
  {
    text: "تروساردی",
    src: "trussardi.png",
    inventory:"9"
  },
  {
    text: "فلورمار",
    src: "flormar.png",
    inventory:"6"
  },
  {
    text: "کامان",
    src: "comeon.png",
    inventory:"1"
  },
  {
    text: "مای",
    src: "my.png",
    inventory:"3"
  },
];

const BrandFilter = () => {
  return (
    <div>
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
          >
            فیلتر برند محصولات
          </Text>
          <Grid templateColumns="repeat(1, 1fr)" gap={6} py={"1rem"}>
            {json.map((item, index) => {
              return <BrandItem text={item.text} src={item.src} inventory={item.inventory} key={index} />;
            })}
          </Grid>
        </VStack>
      </Box>
    </div>
  );
};

export default BrandFilter;
