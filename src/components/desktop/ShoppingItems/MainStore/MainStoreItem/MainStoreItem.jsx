import React from "react";
import {
  Collapse,
  Divider,
  GridItem,
  Icon,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ImageItem from "./ImageItem/ImageItem";
import ContentItem from "./ContentItem/ContentItem";
import MoreContent from "./MoreContent/MoreContent";
import { FaRandom } from "react-icons/fa";

const MainStoreItem = ({ productDetails }) => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  // console.log(productDetails);
  return (
    <>
      <GridItem
        cursor={"pointer"}
        bg={"white"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={"full"}
        border={"1px solid"}
        borderColor={"gray.300"}
        transition={"all .5s ease-out"}
        zIndex={"1"}
        sx={{
          "&:hover": {
            transform: "scale(1.05,1.04)",
            transition: "all .3s ease-in",
            border: "none",
            boxShadow: " 0rem 0.1rem 1rem 0.1rem #a6a6a6bf",
            zIndex: "10",
          },
          "&:hover .topCollaps": {
            top: "-35%!important",
            transition: "all .2s ease-in",
          },

          "&:hover .shopImageItem": {
            transform: "scale(1.15)",
            transition: "all 1s ease-in",
            maxWidth: "100%!important",
          },
          "&:hover .contentItemContainer": {
            marginBottom: ".5rem!important",
          },
        }}
      >
        <ImageItem image={productDetails?.featured_media} />

        <Box
          my={"1rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack position={"relative"} width={"full"}>
            <Box
              className="topCollaps"
              style={{
                transition: "all .3s ease-out",
                position: "absolute",
                display: "flex",
                width: "100%",
                padding: ".5rem 0",
                top: "10%",
                zIndex: "1",
                right: "0",
                justifyContent: "flex-end",
                alignItems: "center",
                fontSize: "2rem",
                backgroundColor: "#fff",
              }}
            >
              <Divider
                position={"absolute"}
                top={"0"}
                color={"blackAlpha.300"}
              />
              <Icon as={FaRandom} me={"1rem"} />
              <Divider
                position={"absolute"}
                bottom={"0"}
                color={"blackAlpha.300"}
              />
            </Box>

            {/* content of the item here */}
            <ContentItem title={productDetails.title} />

            <Collapse in={isOpen} startingHeight={"0"}>
              <MoreContent />
            </Collapse>
          </VStack>
        </Box>
      </GridItem>
    </>
  );
};

export default MainStoreItem;
