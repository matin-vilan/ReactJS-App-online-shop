import React from "react";
import { Box } from "@chakra-ui/react";

const SideBarBox = ({ children, title }) => {
  return (
    <>
      <Box marginBottom={"1.5rem!important"} boxShadow={"0 0px 1px 1px #e6e6e6"} padding={"1rem"} w={"full"}>
        {title && (
          <Box
            fontSize={"xl"}
            color={"postPage.fontColor"}
            fontWeight={"bold"}
            padding={".3rem 1rem"}
            bg={"postPage.titleBackground"}
          >
            {title}
          </Box>
        )}
        {children}
      </Box>
    </>
  );
};

export default SideBarBox;
