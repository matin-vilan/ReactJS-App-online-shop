import { Box, Image } from "@chakra-ui/react";
import React from "react";

const ImageItem = () => {
  return (
    <>
      <Box mt={"1rem"} bg={"white"} overflow={"hidden"}>
        <Image className="shopImageItem" src="/assets/images/mainImages/dayOffers/comeon-cream-foot.jpg" />
      </Box>
    </>
  );
};

export default ImageItem;