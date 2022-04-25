import { VStack } from "@chakra-ui/react";
import React from "react";
import BrandFilter from "./BrandFilter/BrandFilter";
import ColorFilter from "./ColorFilter/ColorFilter";
import InventoryFilter from "./InventoryFilter/InventoryFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import ProductCategories from "./ProductCategories/ProductCategories";

const SideBarStore = () => {
  return (
    <div className={"sideBarStore"}>
      <VStack w={"100%"}>
        
        <InventoryFilter />

        <PriceFilter />

        <ProductCategories />

        <BrandFilter />

        <ColorFilter />

      </VStack>
    </div>
  );
};

export default SideBarStore;
