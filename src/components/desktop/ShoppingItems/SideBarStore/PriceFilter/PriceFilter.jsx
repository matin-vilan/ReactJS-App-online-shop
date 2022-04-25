import React, { useState } from "react";
import {
  Box,
  Button,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";

const PriceFilter = () => {

    const [sliderValue, setSliderValue] = useState([55000, 75000]);
    const handleSliderChange = (e) => {
      setSliderValue(e);
    };

  return (
    <>
      <Box border={"1px solid"} borderColor={"gray.300"} w={"100%"}>
        <VStack w={"100%"} p={4}>
          <Text
            fontSize={{ base: "sm", md: "xl", lg: "xl" }}
            fontWeight={{ base: "medium", md: "black", lg: "black" }}
            display={"flex"}
            justifyContent={"start"}
            bg={"gray.200"}
            py={2}
            px={{ base: "1", md: "4" }}
            w={"100%"}
          >
            فیلتر قیمت
          </Text>
          <RangeSlider
            aria-label={["min", "max"]}
            onChange={(e) => handleSliderChange(e)}
            colorScheme={"red"}
            min={30000}
            max={130000}
            step={5000}
            defaultValue={[55000, 70000]}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <HStack>
            <Text fontSize={"sm"} color={"gray.400"} fontWeight={"light"}>
              قیمت :{" "}
            </Text>
            <Text fontSize={{ base: "md", md: "sm" }} fontWeight={"black"}>
              {sliderValue[1]}تومان - {sliderValue[0]}تومان{" "}
            </Text>
            <Button size={"sm"} fontWeight={"light"}>
              فیلتر
            </Button>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default PriceFilter;
