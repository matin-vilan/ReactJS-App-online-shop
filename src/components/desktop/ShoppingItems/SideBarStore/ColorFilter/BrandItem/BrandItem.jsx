import React from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import styles from "./BrandItem.module.css";
import { BsCheck } from "react-icons/bs";

const BrandItem = ({ text, color, inventory }) => {
  return (
    <>
      <GridItem
        w={"100%"}
        colSpan={1}
        sx={{
          "& .check-icon": {
            display: "none",
          },
          "&:hover .check-icon": {
            display: "block",
          },
        }}
        cursor={"pointer"}
      >
        <Grid templateColumns={"repeat(8, 1fr)"}>
          <GridItem
            colSpan={"2"}
            display={"flex"}
            justifyContent={"center"}
            className={styles.brandItemImage}
          >
            <Center bg={color} borderRadius="50%" p="8px" w="34px" h="34px">
              <Icon
                className="check-icon"
                bg={color}
                fontSize="18px"
                color="white"
                as={BsCheck}
              />
            </Center>
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
          <GridItem
            colSpan={"1"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
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
