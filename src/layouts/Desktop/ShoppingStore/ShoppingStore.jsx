import React from "react";
import Footer from "../../../components/desktop/Footer/Footer";
import Header from "../../../components/desktop/Header/Header";
import SideBarStore from "./SideBarStore/SideBarStore";
import MainStore from "./MainStore/MainStore";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import styles from "./ShoppingStore.module.css";
import { Container } from "react-bootstrap";
import { theme } from "./SideBarStore/thems";
const ShoppingStore = () => {
  return (
    <div className="shoppingStore" style={{ direction: "rtl" }}>
      <Header />
      <Container w={"100%"}>
        <Grid
          h="auto"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={8}
          my={16}
        >
          <GridItem colSpan={1}>
            <SideBarStore />
          </GridItem>
          <GridItem border={"1px solid black"} colSpan={3}>
            <MainStore />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default ShoppingStore;
