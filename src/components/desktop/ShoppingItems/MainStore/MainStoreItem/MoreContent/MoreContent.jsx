import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import MoreContentButtons from "./MoreContentButtons/MoreContentButtons";
import MoreContentText from "./MoreContentText/MoreContentText";
import MoreContentTimer from "./MoreContentTimer/MoreContentTimer";

const MoreContent = () => {
  return (
    <>
      <Box
        style={{
          position: "absolute",
          right:"0",
          bottom: "-160%",
          height: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor:"white"
        }}
      >
        <MoreContentText/>

        <MoreContentButtons />
        <Divider color={"gray.300"} mb={".3rem"} />
        <MoreContentTimer />
        
      </Box>
    </>
  );
};

export default MoreContent;
