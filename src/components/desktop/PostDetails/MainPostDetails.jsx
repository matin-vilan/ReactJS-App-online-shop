import {
  Box,
  Divider,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
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
      <HStack
        display={"flex"}
        justifyContent={"center"}
        sx={{ direction: "ltr" }}
      >
        <Box backgroundColor={"red"} margin={"0!important"} m={"0 1rem!important"} >
          <Icon fontSize={"2rem"} as={RiTelegramLine} />
        </Box>
        <Box backgroundColor={"red"} margin={"0!important"} m={"0 .1rem!important"} >
          <Icon fontSize={"2rem"} as={FaLinkedinIn} />
        </Box>
        <Box backgroundColor={"red"} margin={"0!important"} m={"0 .1rem!important"} >
          <Icon fontSize={"2rem"} as={ImPinterest2} />
        </Box>
        <Box backgroundColor={"red"} margin={"0!important"} m={"0 .1rem!important"} >
          <Icon fontSize={"2rem"} as={BsTwitter} />
        </Box>
        <Box backgroundColor={"red"} margin={"0!important"} m={"0 .1rem!important"} >
          <Icon fontSize={"2rem"} as={FiFacebook} />
        </Box>
      </HStack>
    </div>
  );
};

export default MainPostDetailes;
