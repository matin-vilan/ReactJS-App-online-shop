import { color, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Checkbox: {},
  },

  colors: {
    shopPage: {
      price: "#d60644",
      gray: "rgb(51 51 51 / 65%)",
      button: "#d60644",
      iconHover: "#777",
    },
    postPage: {
      blog: "#e8e8e8",
      inputBorder:"rgba(0,0,0,0.105)",
      searchIconColor:"#777",
      searchIconHoverColor:"#333",
      fontColor:"#333",
      titleBackground:"rgba(125, 125, 125, 0.15)",
      textColor:"#333333",
      categoryTextColor:"#bbb",
      
    },
  },
});

export default theme;
