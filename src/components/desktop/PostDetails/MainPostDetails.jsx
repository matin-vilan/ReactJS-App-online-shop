import React from "react";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import Parser from "html-react-parser";
import { RiTelegramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

const MainPostDetailes = ({ id, data, isLoading }) => {
  return (
    <div>
      <VStack gap={"1rem"}>
        <Box w={"full"} justifyContent={"start"} display={"flex"}>
          <Badge fontSize={"md"} colorScheme={"red"} variant="subtle">
            سبک زندگی
          </Badge>
        </Box>
        <Box w={"full"}>
          <Text w={"full"} fontSize={"4xl"} color={"postPage.textColor"}>
            راهنمای خرید کادوی شب یلدا
          </Text>
          <Box display={"flex"} color={"gray.400"}>
            <Text marginLeft={"1rem!important"}>ارسال توسط :‌</Text>
            <Text
              _hover={{ color: "black" }}
              cursor={"pointer"}
              transition={"all .5s ease"}
            >
              ادمین
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"start"} w={"full"}>
          <Image src="/assets/images/mainImages/beautyMagazine/1.jpg"></Image>
        </Box>
        <Box w={"full"} color={"gray.500"}>
          <Text>
            {isLoading && (
              <Box>
                <Stack spacing={".6rem"}>
                  <Skeleton height=".6rem" />
                  <Skeleton height=".6rem" />
                  <Skeleton height=".6rem" />
                  <Skeleton height=".6rem" />
                  <Skeleton height=".6rem" />
                  <Skeleton height=".6rem" w={"50%"} />
                </Stack>
              </Box>
            )}
            {data && Parser(data?.data?.content?.rendered)}
          </Text>
        </Box>
      </VStack>
      <Divider margin={"3rem 0"} color={"gray.400"} />
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
    </div>
  );
};

export default MainPostDetailes;
