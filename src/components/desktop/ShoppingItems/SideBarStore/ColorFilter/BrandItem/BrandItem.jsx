import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "./BrandItem.module.css"

const BrandItem = ({ text, color, inventory }) => {
  return (
    <>
      <GridItem w={"100%"} colSpan={1} className={styles.brandItem} cursor={"pointer"}>
        <Grid templateColumns={"repeat(8, 1fr)"}>
          <GridItem colSpan={"2"} display={"flex"} justifyContent={"center"} className={styles.brandItemImage}>
            <Box className={styles.brandItemImageBox} position={"relative"} borderRadius={"100%"} p={"1rem"} backgroundColor={color}></Box>
          </GridItem>
          <GridItem
            colSpan={"5"}
            display={"flex"}
            justifyContent={"start"}
            color={"blackAlpha.600"}
            alignItems={"center"}
            className={styles.brandItemText}
          >
            <Text>{text}</Text>
          </GridItem>
          <GridItem colSpan={"1"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text
              border={"1px solid"}
              borderColor={"blackAlpha.300"}
              color={"blackAlpha.600"}
              w={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"45%"}
              className={styles.brandItemInventory}
              maxHeight={"2rem"}
            >
              {inventory}
            </Text>
          </GridItem>
        </Grid>
      </GridItem>
    </>
  );
};

export default BrandItem;
