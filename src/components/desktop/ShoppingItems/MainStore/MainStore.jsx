import React, { Fragment, useState } from "react";
import {
  VStack,
  Box,
  Grid,
  Text,
  GridItem,
  Icon,
  Select,
  Divider,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import MainStoreItem from "./MainStoreItem/MainStoreItem";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { BsArrowDownUp } from "react-icons/bs";
import { useQuery } from "react-query";
import { useProducts } from "../../../../hooks/useProducts";
import ShoppingPageItems from "../../../global/Skeleton/ShoppingPageItemSkeleton/ShoppingPageItemSkeleton";

const MainStore = () => {
  const [gridClick, setGridClick] = useState(false);
  const handleSmallGridDesign = () => {
    setGridClick(!false);
  };
  const handleBigGridDesign = () => {
    setGridClick(!true);
  };

  const { fetchAllProducts } = useProducts();
  const { isLoading, data } = useQuery("products", fetchAllProducts);

  return (
    <div className="w-100">
      <VStack>
        <Box w={"full"}>
          <Grid
            templateColumns={"repeat(12, 1fr)"}
            templateRows={{ base: "repeat(3, 1fr)", lg: "repeat(1, 1fr)" }}
          >
            <GridItem colSpan={5} display={"flex"} alignItems={"center"}>
              <Text cursor={"pointer"} color={"gray.500"} pe={"1rem"}>
                خانه
              </Text>
              <Text>/</Text>
              <Text ps={".5rem"} fontWeight={"bold"}>
                فروشگاه
              </Text>
            </GridItem>

            <GridItem
              display={"flex"}
              justifyContent={{ base: "flex-end", lg: "space-around" }}
              alignItems={"center"}
              colSpan={{ base: 6, lg: 4 }}
              rowSpan={{ base: 1, lg: 3 }}
              marginLeft={{ base: "0", lg: "1rem" }}
              w={"full"}
            >
              <Box
                display={"flex"}
                justifyContent={{ base: "flex-end", lg: "flex-start" }}
                sx={{
                  " p:hover ": {
                    color: "black!important",
                    transition: "all .5s ease",
                  },
                }}
              >
                <Text color={"gray.500"} pe={"1rem"}>
                  نمایش :
                </Text>
                <Box
                  color={"gray.500"}
                  display={"flex"}
                  className={"d-flex d-lg-none"}
                >
                  <Text>۱</Text>
                  <Text>-</Text>
                  <Text>۸</Text>
                  <Text>از</Text>
                  <Text>۱۱</Text>
                  <Text>نتیجه</Text>
                </Box>

                <Box className="d-none d-lg-flex">
                  <Text color={"gray.500"} cursor={"pointer"}>
                    9
                  </Text>
                  <Text cursor={"default"} px={".5rem"}>
                    /
                  </Text>
                  <Text color={"gray.500"} cursor={"pointer"}>
                    24
                  </Text>
                  <Text cursor={"default"} px={".5rem"}>
                    /
                  </Text>
                  <Text color={"gray.500"} cursor={"pointer"}>
                    36
                  </Text>
                </Box>
              </Box>

              <Box className="d-none d-lg-block">
                <Icon
                  onClick={handleSmallGridDesign}
                  cursor={"pointer"}
                  color={gridClick ? "black" : "gray.500"}
                  as={CgMenuGridR}
                />
                <Icon
                  onClick={handleBigGridDesign}
                  cursor={"pointer"}
                  color={gridClick ? "gray.500" : "black"}
                  as={BsFillGrid3X3GapFill}
                />
              </Box>
            </GridItem>

            <GridItem
              rowSpan={1}
              colSpan={12}
              display={{ base: "block", lg: "none" }}
            >
              <Divider />
            </GridItem>

            <GridItem
              colSpan={{ base: 6, lg: 0 }}
              rowSpan={{ base: 1, lg: 0 }}
              className={"d-flex d-lg-none"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Icon fontSize={"2xl"} as={FaBars} />
              <Text ps={"1rem"} fontWeight={"black"}>
                مشاهده فیلتر ها
              </Text>
            </GridItem>

            <GridItem
              rowSpan={{ base: 1, lg: 2 }}
              colSpan={{ base: 6, lg: 3 }}
              display={{ base: "flex", lg: "block" }}
              justifyContent={"flex-end"}
              mt={"1rem"}
              sx={{
                "& div ": {
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                },
              }}
            >
              <Icon
                display={{ base: "block!important", md: "none!important" }}
                as={BsArrowDownUp}
                fontSize={"xl"}
                fontWeight={"black"}
              />
              <Select
                focusBorderColor={"red.500"}
                cursor={"pointer"}
                fontWeight={{ base: "light", sm: "bold" }}
                className="selectMainStore"
                display={{ base: "none!important", md: "block!important" }}
                variant={"flushed"}
                fontSize={{ base: "sm", md: "md" }}
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
            {isLoading && (
              <Fragment>
                <ShoppingPageItems />
                <ShoppingPageItems />
                <ShoppingPageItems />
                <ShoppingPageItems />
                <ShoppingPageItems />
                <ShoppingPageItems />
                <ShoppingPageItems />
                <ShoppingPageItems />
                <ShoppingPageItems />

              </Fragment>
            )}
            {data?.data?.map((item, index) => {
              return <MainStoreItem key={index} productDetails={item} />;
            })}
          </Grid>
        </Box>
      </VStack>
    </div>
  );
};

export default MainStore;
