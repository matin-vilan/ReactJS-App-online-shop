import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { RiTelegramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

const SocialMediaIcons = () => {
  return (
    <Flex
      w={"250px"}
      mx={"auto"}
      justifyContent={"space-evenly"}
      sx={{ direction: "ltr" }}
    >
      <Box bg={"socialMedia.telegram"} borderRadius={"50%"} padding={".7rem"}>
        <Icon fontSize={"1.4rem"} as={RiTelegramLine} color={"white"} />
      </Box>
      <Box bg={"socialMedia.linkedin"} borderRadius={"50%"} padding={".7rem"}>
        <Icon fontSize={"1.4rem"} as={FaLinkedinIn} color={"white"} />
      </Box>
      <Box bg={"socialMedia.pinterest"} borderRadius={"50%"} padding={".7rem"}>
        <Icon fontSize={"1.4rem"} as={ImPinterest2} color={"white"} />
      </Box>
      <Box bg={"socialMedia.twitter"} borderRadius={"50%"} padding={".7rem"}>
        <Icon fontSize={"1.4rem"} as={BsTwitter} color={"white"} />
      </Box>
      <Box bg={"socialMedia.facebook"} borderRadius={"50%"} padding={".7rem"}>
        <Icon fontSize={"1.4rem"} as={FiFacebook} color={"white"} />
      </Box>
    </Flex>
  );
};

export default SocialMediaIcons;
