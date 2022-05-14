import React from "react";
import { Box, Divider, Image, Text, VStack } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import Parser from "html-react-parser";
import SocialMediaIcons from "./MainComponents/SocialMediaIcons";
import PostDetailsSkeleton from "../../global/Skeleton/PostDetailsSkeleton/PostDetailsSkeleton";
import NextPrevPage from "./MainComponents/NextPrevPage";
import Comment from "./Comment/Comment";

const MainPostDetailes = ({ id, data, isLoading }) => {
  return (
    <Box>
      <VStack gap={"1rem"} pl={{base:0,md:"1rem"}}>
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
          <Box>
            {isLoading && <PostDetailsSkeleton />}
            {data && Parser(data?.data?.content?.rendered)}
          </Box>
        </Box>
      </VStack>
      <Divider margin={"3rem 0"} color={"gray.400"} />
      <SocialMediaIcons />
      <NextPrevPage />
      <Divider my={{base:"1rem",md:"3rem"}} color={"gray.400"} />
      <Comment />
    </Box>
  );
};

export default MainPostDetailes;
