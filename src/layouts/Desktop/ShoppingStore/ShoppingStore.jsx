import React from "react";
import SideBarStore from "../../../components/desktop/ShoppingItems/SideBarStore/SideBarStore";
import MainStore from "../../../components/desktop/ShoppingItems/MainStore/MainStore";
import { Container, Grid, GridItem } from "@chakra-ui/react";

const ShoppingStore = () => {

  return (
    <div className="shoppingStore" style={{ direction: "rtl" }}>
      <Container maxW="container.2xl">
        <Grid
          h="auto"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={8}
          my={16}
          width={"full"}
        >
          <GridItem
            colSpan={{ base: 0, lg: 1 }}
            className={"d-lg-block d-none"}
          >
            <SideBarStore />
          </GridItem>
          <GridItem className="w-100" colSpan={{ base: 4, lg: 3 }}>
            <MainStore />
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default ShoppingStore;
