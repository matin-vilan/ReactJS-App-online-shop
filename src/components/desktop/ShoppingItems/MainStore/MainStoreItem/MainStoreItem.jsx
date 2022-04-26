import React from "react";
import {
  Collapse,
  Divider,
  GridItem,
  Icon,
  Image,
  Text,
  useDisclosure,
  VStack,
  Button,
  Grid,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { MdCompareArrows } from "react-icons/md";
import ImageItem from "./ImageItem/ImageItem";
import ContentItem from "./ContentItem/ContentItem";
import MoreContent from "./MoreContent/MoreContent";

const MainStoreItem = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  return (
    <>
      <GridItem
        bg={"white"}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={"full"}
        border={"1px solid"}
        borderColor={"gray.300"}
        transition={"all .5s ease-out"}
        sx={{
          "&:hover": {
            transform: "scale(1.05,1.04)",
            transition: "all .3s ease-in",
          },
          "&:hover .topCollaps": {
            top: "-35%!important",
            transition: "all .2s ease-in",
          },
        }}
      >
        <ImageItem />

        <Box
          my={"1rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack position={"relative"}>
            {/* <Collapse in={isOpen} startingHeight={"0"}> */}
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
              <Icon as={MdCompareArrows} me={"1rem"} fontWeight={"black"} />
              <Divider
                position={"absolute"}
                bottom={"0"}
                color={"blackAlpha.300"}
              />
            </Box>
            {/* </Collapse> */}

            <ContentItem />

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
