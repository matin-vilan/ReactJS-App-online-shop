import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Icon,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaStarOfLife } from "react-icons/fa";

const Comment = () => {
  return (
    <Box>
      <Box mb={"2rem"}>
        <Text fontSize={"2xl"} fontWeight={"black"} mb={"1rem!important"}>
          دیدگاهتان را بنویسید
        </Text>
        <Box display={"flex"}>
          <Text color={"postPage.categoryTextColor"}>
            نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
            شده‌اند
          </Text>
          <Icon
            as={FaStarOfLife}
            fontSize={".5rem"}
            color={"red"}
            mr={".2rem"}
          />
        </Box>
      </Box>

      {/* ==================================== */}

      <Box mb={"1rem"}>
        <Box display={"flex"}>
          <Text>دیدگاه</Text>
          <Icon
            as={FaStarOfLife}
            fontSize={".5rem"}
            color={"red"}
            mr={".2rem"}
          />
        </Box>
        <Box>
          <Textarea
            mt={"1rem"}
            height={"10rem"}
            borderColor={"postPage.inputBorder"}
            border={"2px solid"}
            _focus={{ outline: "none!important" }}
          />
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        w={"full"}
        justifyContent={"space-between"}
      >
        {/* name input====================== */}
        <Box
          w={{ base: "full", md: "calc(95%/3)" }}
          mb={{ base: "1rem", md: "0" }}
        >
          <Box display={"flex"}>
            <Text>نام</Text>
            <Icon
              as={FaStarOfLife}
              fontSize={".5rem"}
              color={"red"}
              mr={".2rem"}
            />
          </Box>
          <Box>
            <Input
              mt={".5rem"}
              borderColor={"postPage.inputBorder"}
              border={"2px solid"}
              _focus={{ outline: "none!important" }}
              w={"full"}
            />
          </Box>
        </Box>

        {/* email input====================== */}
        <Box
          w={{ base: "full", md: "calc(95%/3)" }}
          mb={{ base: "1rem", md: "0" }}
        >
          <Box display={"flex"}>
            <Text>ایمیل</Text>
            {/* <Icon
              as={FaStarOfLife}
              fontSize={".5rem"}
              color={"red"}
              mr={".2rem"}
            /> */}
          </Box>
          <Box>
            <Input
              w={"full"}
              type={"email"}
              mt={".5rem"}
              borderColor={"postPage.inputBorder"}
              border={"2px solid"}
              _focus={{ outline: "none!important" }}
            />
          </Box>
        </Box>

        {/* website input======================= */}

        <Box w={{ base: "full", md: "calc(95%/3)" }}>
          <Box display={"flex"}>
            <Text>وبسایت</Text>
            <Icon
              as={FaStarOfLife}
              fontSize={".5rem"}
              color={"red"}
              mr={".2rem"}
            />
          </Box>
          <Box>
            <Input
              w={"full"}
              type={"email"}
              mt={".5rem"}
              borderColor={"postPage.inputBorder"}
              border={"2px solid"}
              _focus={{ outline: "none!important" }}
            />
          </Box>
        </Box>
        {/* checkbox =========================== */}
      </Box>
      <Box my={"2rem"}>
        <Checkbox className="chekboxComment">
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </Checkbox>
      </Box>
      <Box>
        <Button
          colorScheme={"red"}
          borderRadius={"none"}
          backgroundColor={"all.red"}
          color={"white"}
        >
          فرستادن دیدگاه
        </Button>
      </Box>
    </Box>
  );
};

export default Comment;
