import { Box, Divider, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Badge } from "@chakra-ui/react";
import Parser from "html-react-parser";

const MainPostDetailes = ({ id , data }) => {
  // const { getPost } = usePost();
  // const { isLoading, data } = useQuery(["post", id], getPost);

  console.log(data);

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
          <Text>{Parser(data?.data.excerpt.rendered)}</Text>
        </Box>
      </VStack>
      <Divider marginTop={"3rem"} color={"gray.400"}/>
      <VStack>
        
      </VStack>
    </div>
  );
};

export default MainPostDetailes;
