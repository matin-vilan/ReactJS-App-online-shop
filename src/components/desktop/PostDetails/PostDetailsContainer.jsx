import React from "react";
import { Box, Text } from '@chakra-ui/react';
import MainPostDetailes from './MainPostDetails';
import SidebarPostDetailes from "./SidebarPostDetailes";
import { usePost } from '../../../hooks/usePost';
import { useQuery } from 'react-query';

const PostDetailsContainer = ({id}) => {

  const { getPost } = usePost();

  const { isLoading, data } = useQuery(["post", id], getPost);

  return (
    <div className="postDetailesContainer">
      <Box
        py={"3rem"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"postPage.blog"}
      >
        <Text fontSize={"4xl"} fontWeight={"black"}>
          وبلاگ
        </Text>
        <Box display={"flex"}>
          <Text fontWeight={"bold"} fontSize={"sm"}>
            خانه
          </Text>
          <Text fontWeight={"bold"} fontSize={"sm"} px={".5rem"}>
            /
          </Text>
          <Text fontWeight={"bold"} fontSize={"sm"}>
            {data?.data?.title?.rendered}
          </Text>
        </Box>
      </Box>
      <Box className="postDetailesMainAndSide">
        <MainPostDetailes />
        <SidebarPostDetailes />
      </Box>
    </div>
  );
};

export default PostDetailsContainer;
