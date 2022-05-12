import React from "react";
import { Box, Divider, Icon, Tooltip } from "@chakra-ui/react";
import "./MainComponents.css";
import NavigateToNextPage from "../../../global/NavigateToNextPage/NavigateToNextPage";
import NavigateToPrevPage from "../../../global/NavigateToPrevPage/NavigateToPrevPage";
import { MdOutlineWindow } from "react-icons/md";

const NextPrevPage = () => {
  return (
    <Box
      marginTop={"2rem"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <NavigateToNextPage />

      <Tooltip label={"بازگشت به لیست"}>
        <Box
          className="goBackToTheList"
          fontSize={"2rem"}
          cursor={"pointer"}
          color={"gray.300"}
          transition={"all .5s ease"}
          _hover={{color:"black" , transition:"all .5s ease"}}
        >
          <Icon as={MdOutlineWindow} />
        </Box>
      </Tooltip>

      <NavigateToPrevPage />

    </Box>
  );
};

export default NextPrevPage;
