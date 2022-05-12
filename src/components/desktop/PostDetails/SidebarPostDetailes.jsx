import React from "react";
import { Box, Input, Skeleton, Stack, Text, VStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import SideBarBox from "./SideBarComponents/SideBarBox/SideBarBox";
import { usePosts } from "../../../hooks/usePosts";
import { useQuery } from "react-query";
import Categories from "./SideBarComponents/Categories";

const SidebarPostDetailes = () => {
  const { fetchPosts } = usePosts();
  const { isLoading, data } = useQuery("post", fetchPosts);

  return (
    <VStack>
      <SideBarBox>
        <Box
          display={"flex"}
          alignItems={"center"}
          border={"2px solid"}
          padding={"0 .5rem"}
          borderColor={"postPage.inputBorder"}
          borderRadius={".4rem"}
        >
          <Input
            type="text"
            border={"none"}
            placeholder={"جستجو برای نوشته ها"}
          />
          <Icon
            as={BsSearch}
            color={"postPage.searchIconColor"}
            _hover={{
              color: "postPage.searchIconHoverColor",
              transition: "all .4s ease",
            }}
            cursor={"pointer"}
            style={{ fontSize: "1.2rem", transition: "all .4s ease" }}
          />
        </Box>
      </SideBarBox>
      <SideBarBox title={"نوشته های تازه"}>
        {isLoading && (
          <Box marginTop={"1rem"}>
            <Stack spacing={"1rem"}>
              <Skeleton w={"70%"} height=".5rem" />
              <Skeleton w={"70%"} height=".5rem" />
              <Skeleton w={"70%"} height=".5rem" />
            </Stack>
          </Box>
        )}
        {data?.data?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Text
                color={"postPage.textColor"}
                fontWeight={"medium"}
                marginTop={"1rem!important"}
              >
                {item?.title?.rendered}
              </Text>
            </React.Fragment>
          );
        })}
      </SideBarBox>
      <SideBarBox title={"دسته ها"}>
        <Categories />
      </SideBarBox>
    </VStack>
  );
};

export default SidebarPostDetailes;
