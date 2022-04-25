import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';


const jsonSideBar = [
    {
      title: "آرایشی و گریم",
      children: [
        {
          title: "رژ گونه",
        },
      ],
    },
    {
      title: "بدن",
      children: [
        {
          title: "مراقبت بدن",
        },
      ],
    },
    {
      title: "بهداشت شخصی",
      children: [],
    },
    {
      title: "پوست",
      children: [
        {
          title: "شوینده پوست",
        },
        {
          title: "مراقبت پوست",
        },
      ],
    },
    {
      title: "دسته بندی نشده",
      children: [],
    },
    {
      title: "سالنی و کارآموزی",
      children: [],
    },
    {
      title: "عطر",
      children: [
        {
          title: "عطر زنانه",
        },
        {
          title: "عطر مردانه",
        },
      ],
    },
    {
      title: "لوازم برقی",
      children: [],
    },
    {
      title: "مادر و کودک",
      children: [],
    },
    {
      title: "مردانه",
      children: [],
    },
    {
      title: "مو",
      children: [],
    },
  ];

const ProductCategories = () => {
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
              دسته های محصولات
            </Text>

            <Accordion defaultIndex={[1]} outline={"none"}  allowMultiple w={"100%"} color={"gray.500"}>
              {jsonSideBar?.map((item, index) => {
                return (
                  <AccordionItem key={index} sx={{ border: "none!important" }}>
                    <AccordionButton>

                      <Box flex={1} textAlign={"right"}>
                        {item.title}
                      </Box>
                      {item.children.length > 0 && <AccordionIcon />}
                    </AccordionButton>
                    {item.children.length > 0 &&
                      item?.children.map((item, index) => {
                        return (
                          <AccordionPanel key={index} pb={4} px={8}>
                            {item.title}
                          </AccordionPanel>
                        );
                      })}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </VStack>
        </Box>
    </>
  )
}

export default ProductCategories