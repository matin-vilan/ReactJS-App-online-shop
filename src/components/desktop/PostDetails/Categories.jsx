import React from "react";
import { Text } from "@chakra-ui/react";

const jsonCategories = [
  {
    title: "آرایشی و زیبایی",
  },
  {
    title: "تناسب اندام و تغذیه",
  },
  {
    title: "دسته بندی نشده",
  },
  {
    title: "سبک زندگی",
  },
  {
    title: "محصولات بهداشتی",
  },
  {
    title: "مراقبت و سلامتی",
  },
];

const Categories = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {jsonCategories?.map((item, index) => {
        return (
          <Text
            transition={"all .5s ease"}
            cursor={"pointer"}
            color={"postPage.categoryTextColor"}
            key={index}
            marginBottom={"1rem!important"}
            _hover={{ color: "black", transition: "all .5s ease" }}
          >
            {item?.title}
          </Text>
        );
      })}
    </div>
  );
};

export default Categories;
