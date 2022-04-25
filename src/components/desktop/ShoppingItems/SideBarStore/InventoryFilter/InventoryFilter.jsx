import React from 'react'
import { Box, Checkbox, Text, VStack } from '@chakra-ui/react';

const InventoryFilter = () => {
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
              فیلتر موجودی و حراج
            </Text>
            <Checkbox w={"100%"} color={"gray.500"}>
              محصولات تخفیف دار
            </Checkbox>
            <Checkbox w={"100%"} color={"gray.500"}>
              محصولات موجود
            </Checkbox>
          </VStack>
        </Box>
    </>
  )
}

export default InventoryFilter