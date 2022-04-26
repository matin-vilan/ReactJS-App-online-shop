import { Box, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FiHeart, FiSearch } from "react-icons/fi";


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
        <Icon fontSize={"1.3rem"} as={FiHeart} />
        <Button>انتخاب گزینه ها</Button>
        <Icon fontSize={"1.3rem"} as={FiSearch} />
      </Box>
    </>
  );
};

export default MoreContentButtons;
