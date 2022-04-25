import React, { useState } from "react";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "./BrandItem.module.css"

const BrandItem = ({ text, src, inventory }) => {
  return (
    <>
      <GridItem w={"100%"} colSpan={1} className={styles.brandItem} cursor={"pointer"}>
        <Grid templateColumns={"repeat(8, 1fr)"}>
          <GridItem colSpan={"2"} display={"flex"} justifyContent={"center"} className={styles.brandItemImage}>
            <Image src={`/assets/images/ShopingImages/sidebarImages/${src}`} />
          </GridItem>
          <GridItem
            colSpan={"5"}
            display={"flex"}
            justifyContent={"start"}
            ps={"1rem"}
            color={"blackAlpha.600"}
            className={styles.brandItemText}
          >
            <Text>{text}</Text>
          </GridItem>
          <GridItem colSpan={"1"} display={"flex"} justifyContent={"center"} >
            <Text
              border={"1px solid"}
              borderColor={"blackAlpha.300"}
              color={"blackAlpha.600"}
              w={"100%"}
              display={"flex"}
              justifyContent={"center"}
              borderRadius={"45%"}
              className={styles.brandItemInventory}
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
