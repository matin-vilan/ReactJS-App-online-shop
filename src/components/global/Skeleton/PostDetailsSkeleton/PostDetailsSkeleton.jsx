import React from "react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";

const PostDetailsSkeleton = () => {
  return (
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
  );
};

export default PostDetailsSkeleton;
