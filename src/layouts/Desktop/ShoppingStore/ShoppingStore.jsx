import React from "react";
import SideBarStore from "../../../components/desktop/ShoppingItems/SideBarStore/SideBarStore";
import MainStore from "../../../components/desktop/ShoppingItems/MainStore/MainStore";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import StickyFooter from "../../../components/mobile/StickyFooter/StickyFooter";
import Footer from "../../../components/desktop/Footer/Footer";
import Header from '../../../components/desktop/Header/Header';

const ShoppingStore = () => {
  return (
    <div className="shoppingStore" style={{ direction: "rtl" }}>
      <Header />
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
      <Footer />
    </div>
  );
};

export default ShoppingStore;
