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
      w={"230px"}
      mx={"auto"}
      justifyContent={"space-evenly"}
      sx={{ direction: "ltr" }}
    >
      <Box bg={"socailMedia.telegram"} borderRadius={"50%"} padding={".4rem"}>
        <Icon fontSize={"1.5rem"} as={RiTelegramLine} color={"white"} />
      </Box>
      <Box bg={"socailMedia.linkedin"} borderRadius={"50%"} padding={".4rem"}>
        <Icon fontSize={"1.5rem"} as={FaLinkedinIn} />
      </Box>
      <Box bg={"socailMedia.pinterest"} borderRadius={"50%"} padding={".4rem"}>
        <Icon fontSize={"1.5rem"} as={ImPinterest2} />
      </Box>
      <Box bg={"socailMedia.twitter"} borderRadius={"50%"} padding={".4rem"}>
        <Icon fontSize={"1.5rem"} as={BsTwitter} />
      </Box>
      <Box bg={"socialMedia.facebook"} borderRadius={"50%"} padding={".4rem"}>
        <Icon fontSize={"1.5rem"} as={FiFacebook} />
      </Box>
    </Flex>
  );
};

export default SocialMediaIcons;
