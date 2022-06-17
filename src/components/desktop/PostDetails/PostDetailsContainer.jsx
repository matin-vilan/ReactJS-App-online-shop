import React, { useEffect } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import MainPostDetailes from "./MainPostDetails";
import SidebarPostDetailes from "./SidebarPostDetailes";
import { usePost } from "../../../hooks/usePost";
import { useQuery } from "react-query";
import LastDiscount from "../Main/LastDiscount/LastDiscount";

const PostDetailsContainer = ({ id }) => {
  const { getPost } = usePost();

  const { isLoading, data } = useQuery(["post", id], getPost);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Box maxW={"container.xl"} className="postDetailesContainer">
      <Box
        py={"3rem"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"postPage.blog"}
      >
        <Text fontSize={"7xl"} fontWeight={"black"}>
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
      <Container maxW={"1600px"}>
        <Box className="postDetailesMainAndSide" display={"flex"} w={"full"}>
          <Grid templateColumns="repeat(4, 1fr)" w={"full"} marginTop={"3rem"}>
            <GridItem colSpan={{ base: 4, md: 3 }}>
              <MainPostDetailes id={id} data={data} isLoading={isLoading} />
            </GridItem>
            <GridItem
              colSpan={{ base: 0, md: 1 }}
              display={{ base: "none", md: "block" }}
            >
              <SidebarPostDetailes />
            </GridItem>
          </Grid>
        </Box>
      </Container>
      <Divider my={"2rem"} color={"gray.300"} />
      <LastDiscount />
      <Divider my={"2rem"} color={"gray.300"} />
    </Box>
  );
};

export default PostDetailsContainer;
