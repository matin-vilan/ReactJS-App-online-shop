import { Box, Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiHeart, FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MoreContentButtons = () => {
  return (
    <>
      <Box
        w={"full"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        pb={"1rem"}
      >
        <Icon
          _hover={{ color: "#777" }}
          cursor={"pointer"}
          fontSize={"1.3rem"}
          as={FiHeart}
        />
        <Button
          position={"relative"}
          py={"1.1rem"}
          color={"white"}
          size={"md"}
          bg={"shopPage.button"}
          minW={"40%"}
          maxW={"40%"}
          sx={{
            "&:hover": {
              background: "shopPage.button",
            },
            ".shopPageButtonText": {
              top: "30%",
              transition: "all .2s ease",
            },
            ".shopPageButtonIcon": {
              bottom: "-60%",
              transition: "all .2s ease",
            },
            "&:hover .shopPageButtonText": {
              top: "-60%",
              zIndex: "-1",
              transition: "all .2s ease",
            },
            "&:hover .shopPageButtonIcon": {
              bottom: "20%",
              transition: "all .2s ease",
            },
          }}
        >
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Icon
              fontSize={{ base: "1.2rem", md: "1.5rem" }}
              className="shopPageButtonIcon"
              as={AiOutlineShoppingCart}
              w={"full"}
              position={"absolute"}
            />
            <Text
              position={"absolute"}
              fontSize={{ base: ".7rem", md: ".9rem" }}
              fontWeight={{ base: "black", md: "bold" }}
              className="shopPageButtonText"
            >
              انتخاب گزینه ها
            </Text>
          </Box>
        </Button>
        <Icon
          _hover={{ color: "#777" }}
          cursor={"pointer"}
          fontSize={"1.3rem"}
          as={FiSearch}
        />
      </Box>
    </>
  );
};

export default MoreContentButtons;
