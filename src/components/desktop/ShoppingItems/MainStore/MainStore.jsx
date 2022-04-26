import React, { useState } from "react";
import {
  VStack,
  Box,
  Grid,
  Text,
  GridItem,
  Icon,
  Select,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import MainStoreItem from "./MainStoreItem/MainStoreItem";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const MainStore = () => {
  const[gridClick , setGridClick] = useState(false)
  const handleSmallGridDesign = ()=>{
    setGridClick(!false)
  }
  const handleBigGridDesign = ()=>{
    setGridClick(!true)
  }

  return (
    <div className="w-100">
      <VStack>
        <Box w={"full"}>
          <Grid templateColumns={"repeat(12, 1fr)"}>
            <GridItem colSpan={6} display={"flex"} alignItems={"center"}>
              <Text cursor={"pointer"} color={"gray.500"} pe={"1rem"}>
                {" "}
                خانه
              </Text>
              <Text>/</Text>
              <Text ps={".5rem"} fontWeight={"bold"}>
                فروشگاه
              </Text>
            </GridItem>
            <GridItem
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              colSpan={3}
            >
              <Box
                display={"flex"}
                sx={{
                  " p:hover ": {
                    color: "black!important",
                    transition:"all .5s ease"
                  },
                }}
              >
                <Text pe={"1rem"}>نمایش :</Text>
                <Text color={"gray.500"} cursor={"pointer"}>
                  9
                </Text>
                <Text cursor={"default"} px={".5rem"}>/</Text>
                <Text color={"gray.500"} cursor={"pointer"}>
                  24
                </Text>
                <Text cursor={"default"} px={".5rem"}>/</Text>
                <Text color={"gray.500"} cursor={"pointer"}>
                  36
                </Text>
              </Box>
              <Box>
                <Icon onClick={handleSmallGridDesign} cursor={"pointer"} color={gridClick ?  "black" : "gray.500"} as={CgMenuGridR} />
                <Icon onClick={handleBigGridDesign} cursor={"pointer"} color={gridClick ? "gray.500" :"black" } as={BsFillGrid3X3GapFill} />
              </Box>
            </GridItem>
            <GridItem
              colSpan={3}
              sx={{
                "& div ": {
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                },
              }}
            >
              <Select
                focusBorderColor={"red.500"}
                cursor={"pointer"}
                fontWeight={"black"}
                className="selectMainStore"
                variant={"flushed"}
              >
                <option>مرتب سازی بر اساس آخرین</option>
                <option>مرتب سازی بر اساس ارزان ترین</option>
                <option>مرتب سازی بر اساس گران ترین</option>
                <option>مرتب سازی بر اساس محبوبیت</option>
              </Select>
            </GridItem>
          </Grid>
        </Box>

        <Box w={"full"}>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
            <MainStoreItem />
          </Grid>
        </Box>
      </VStack>
    </div>
  );
};

export default MainStore;
