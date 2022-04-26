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
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { MdCompareArrows } from "react-icons/md";

const MainStoreItem = () => {
  const { isOpen, onClose , onOpen } = useDisclosure();

  return (
    <>
      <GridItem
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={"full"}
        border={"1px solid"}
        borderColor={"gray.300"}
      >
        <Box mt={"1rem"}>
          <Image src="/assets/images/mainImages/dayOffers/comeon-cream-foot.jpg" />
        </Box>
        <Box
          my={"1rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack position={"relative"}>
            <Collapse in={isOpen} startingHeight={"0"}>
              <Box
                style={{
                  position: "absolute",
                  display: "flex",
                  width: "100%",
                  padding: ".5rem 0",
                  top: "-50%",
                  right:"0",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  fontSize: "2rem",
                  backgroundColor: "#fff",
                  // opacity:"0"
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
            </Collapse>
            <Box>
              <Text px={"1rem"} textAlign={"center"}>
                کرم ضد ترک پا کامان حجم ۳۰۰ میلی لیتر
              </Text>
              <Text display={"flex"} justifyContent={"center"} color={"red"} py={"1rem"} fontWeight={"medium"}>
                ۳۵۰۰۰ تومان
              </Text>
            </Box>
            <Box>
              this is last box
            </Box>
          </VStack>
        </Box>
      </GridItem>
    </>
  );
};

export default MainStoreItem;
